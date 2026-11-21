import dotenv from 'dotenv';
import {randomUUID, timingSafeEqual} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import express from 'express';
import type {NextFunction, Request, Response} from 'express';
import {
  appendChatMessage,
  closeDatabase,
  computeSubmissionFingerprint,
  createChatSession,
  findRecentDuplicateLead,
  getChatSessionAuthorized,
  getDatabase,
  getLeadByReferenceId,
  getLeadEmailStatusCounts,
  getTotalVisitors,
  hashVisitorIdentifier,
  listFailedLeadsForRetry,
  recordUniqueVisitor,
  saveLeadRecord,
  updateChatEmailStatus,
  updateLeadEmailStatus,
  type LeadSourceType,
  type StoredLeadSummary,
} from './server/db.ts';
import {buildLlmsFullTxt, buildLlmsTxt} from './server/llms.ts';
import {
  inspectSmtpEnvironment,
  isMailerConfigured,
  sendEnquiryNotificationEmail,
  verifySmtpConnection,
} from './server/mailer.ts';
import {
  checkRateLimit,
  getClientIp,
  isBotOrAutomatedRequest,
  isValidEmailAddress,
  isValidPhoneNumber,
  parseCookieValue,
  sanitizeMultiline,
  sanitizeSingleLine,
} from './server/security.ts';
import {
  LEGACY_SITEMAP_CHILD_PATHS,
  buildPrimarySitemapXml,
  normalizeCanonicalSitemapBaseUrl,
  renderUrlSetXml,
} from './server/sitemap.ts';
import {ROUTES} from './src/config/routes.ts';
import {resolveBaseUrl} from './src/config/seo.ts';

interface SsrModule {
  render: (
    url: string,
    requestOrigin?: string,
  ) => {
    html: string;
    headTags: string;
    statusCode: number;
  };
}

interface InquiryPayload {
  type?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  city?: string;
  service?: string;
  industry?: string;
  subject?: string;
  message?: string;
  description?: string;
  sourcePage?: string;
  sourceSection?: string;
  consent?: boolean;
  website_url?: string;
}

interface ChatStartPayload {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  service?: string;
  requirement?: string;
  sourcePage?: string;
  consent?: boolean;
  website_url?: string;
}

interface ChatMessagePayload {
  sessionId?: string;
  sessionToken?: string;
  message?: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot =
  path.basename(__dirname) === 'server' && path.basename(path.dirname(__dirname)) === 'dist'
    ? path.resolve(__dirname, '../..')
    : __dirname;

// Load .env from projectRoot cleanly without overriding existing Hostinger environment variables
dotenv.config({path: path.resolve(projectRoot, '.env'), override: false});

const isProduction = process.env.NODE_ENV === 'production';
const rawPort = process.env.PORT;
const port: number | string =
  rawPort && /^\d+$/.test(rawPort) ? Number(rawPort) : rawPort || 3000;
const VISITOR_COOKIE_NAME = 'klyia_vid';

const SUCCESS_SAVED_AND_EMAILED_MSG =
  'Your enquiry has been received successfully. Our team will contact you shortly.';
const SAVED_EMAIL_DELAYED_MSG =
  'Your enquiry has been received, but email notification is temporarily delayed. Our team will still be able to access your enquiry.';
const DB_SAVE_FAILED_MSG =
  'Your enquiry could not be submitted. Please try again or contact us directly.';

const activeRetryRefs = new Set<string>();

function isAdminAuthorized(req: Request): boolean {
  const configuredKey = (process.env.ADMIN_API_KEY || '').trim();
  if (!configuredKey || configuredKey.length < 16) {
    return false;
  }
  const authHeader = (req.get('authorization') || '').trim();
  const provided = authHeader.toLowerCase().startsWith('bearer ')
    ? authHeader.slice(7).trim()
    : (req.get('x-admin-key') || '').trim();
  if (!provided) {
    return false;
  }
  const expectedBuf = Buffer.from(configuredKey, 'utf8');
  const providedBuf = Buffer.from(provided, 'utf8');
  if (expectedBuf.length !== providedBuf.length) {
    return false;
  }
  return timingSafeEqual(expectedBuf, providedBuf);
}

async function deliverSavedLeadEmail(lead: StoredLeadSummary): Promise<{
  delivered: boolean;
  errorCode?: string;
  messageId?: string;
}> {
  if (lead.emailStatus === 'sent') {
    return {delivered: true};
  }
  if (activeRetryRefs.has(lead.referenceId)) {
    return {delivered: false, errorCode: 'DELIVERY_IN_PROGRESS'};
  }
  activeRetryRefs.add(lead.referenceId);

  try {
    const emailKind =
      lead.source === 'callback'
        ? 'callback'
        : lead.source === 'solar'
          ? 'solar'
          : lead.source === 'service'
            ? 'service'
            : lead.source === 'quote'
              ? 'quote'
              : lead.source === 'chat'
                ? 'chat_lead'
                : 'contact';

    const mailResult = await sendEnquiryNotificationEmail({
      kind: emailKind,
      referenceId: lead.referenceId,
      name: lead.name,
      company: lead.company,
      email: lead.email,
      phone: lead.phone,
      city: lead.city,
      service: lead.service,
      industry: lead.industry,
      subject: lead.subject,
      message: lead.message,
      sourcePage: lead.sourcePage,
      sourceSection: lead.sourceSection,
      submittedAtIso: lead.createdAt,
      consentGiven: lead.consent,
    });

    if (mailResult.delivered) {
      updateLeadEmailStatus(lead.referenceId, 'sent', {
        messageId: mailResult.messageId,
        incrementRetry: true,
      });
      return {delivered: true, messageId: mailResult.messageId};
    }

    updateLeadEmailStatus(lead.referenceId, 'failed', {
      errorMsg: mailResult.error || 'SMTP delivery failed',
      errorCode: mailResult.errorCode || 'SMTP_ERROR',
      incrementRetry: true,
    });
    return {
      delivered: false,
      errorCode: mailResult.errorCode || 'SMTP_ERROR',
    };
  } finally {
    activeRetryRefs.delete(lead.referenceId);
  }
}

async function runPendingEnquiryRecoverySweep(): Promise<{
  attempted: number;
  delivered: number;
  failed: number;
}> {
  if (!isMailerConfigured()) {
    return {attempted: 0, delivered: 0, failed: 0};
  }
  const pendingLeads = listFailedLeadsForRetry({maxRetries: 5, limit: 5, includeAuthErrors: false});
  let attempted = 0;
  let delivered = 0;
  let failed = 0;

  for (const lead of pendingLeads) {
    if (lead.lastEmailAttemptAt) {
      const elapsedMs = Date.now() - new Date(lead.lastEmailAttemptAt).getTime();
      if (Number.isFinite(elapsedMs) && elapsedMs < 90_000) {
        continue;
      }
    }
    attempted += 1;
    const outcome = await deliverSavedLeadEmail(lead);
    if (outcome.delivered) {
      delivered += 1;
    } else {
      failed += 1;
    }
  }
  return {attempted, delivered, failed};
}

function getRequestOrigin(req: Request): string {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const protocol =
    typeof forwardedProto === 'string' && forwardedProto.length > 0
      ? forwardedProto.split(',')[0].trim()
      : req.protocol || 'https';
  const host = req.get('host');
  if (!host) {
    return resolveBaseUrl();
  }
  return `${protocol}://${host}`;
}

async function createAppServer() {
  getDatabase();

  const startupEnv = inspectSmtpEnvironment();
  console.info(
    `[SMTP Startup Check] configured=${startupEnv.configured} host=${startupEnv.host} port=${startupEnv.port} secure=${startupEnv.secure} user=${startupEnv.userMasked || '(unset)'} to=${startupEnv.toEmail}${
      startupEnv.missingVars.length > 0 ? ` missing=[${startupEnv.missingVars.join(', ')}]` : ''
    }`,
  );

  const app = express();
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.use(express.json({limit: '64kb'}));

  const REDIRECT_MAP: Record<string, string> = {
    '/insights': ROUTES.INSIGHTS,
    '/insights/': ROUTES.INSIGHTS,
    '/sitemap.html': ROUTES.SITEMAP,
    '/about': ROUTES.ABOUT,
    '/contact': ROUTES.CONTACT,
    '/quote': ROUTES.GET_A_QUOTE,
    '/service': ROUTES.SERVICES,
    '/services': ROUTES.SERVICES,
    '/industry': ROUTES.INDUSTRIES,
    '/industries': ROUTES.INDUSTRIES,
    '/location': ROUTES.LOCATIONS,
    '/locations': ROUTES.LOCATIONS,
    '/erp': ROUTES.ERP_HUB,
    '/erp/': ROUTES.ERP_HUB,
    '/erp-solutions': ROUTES.ERP_HUB,
    '/erp-solutions/': ROUTES.ERP_HUB,
    '/blog': ROUTES.INSIGHTS,
  };

  // Permanent 301 canonical domain redirect: www.klyiatechnology.com -> https://klyiatechnology.com
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith('/api/') || req.path === '/health') {
      next();
      return;
    }

    const rawHost = (req.get('x-forwarded-host') || req.get('host') || '').split(',')[0].trim();
    const hostname = rawHost.replace(/:\d+$/, '').toLowerCase();

    if (hostname === 'www.klyiatechnology.com') {
      const legacyTarget = REDIRECT_MAP[req.path];
      const queryIndex = req.originalUrl.indexOf('?');
      const querySuffix = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : '';
      const destination = legacyTarget ? `${legacyTarget}${querySuffix}` : req.originalUrl;
      res.redirect(301, `https://klyiatechnology.com${destination}`);
      return;
    }

    next();
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const cleanPath = req.path;
    const redirectTarget = REDIRECT_MAP[cleanPath];
    if (redirectTarget && redirectTarget !== cleanPath) {
      const queryIndex = req.originalUrl.indexOf('?');
      const querySuffix = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : '';
      res.redirect(301, `${redirectTarget}${querySuffix}`);
      return;
    }
    next();
  });

  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({status: 'ok', service: 'klyia-technology'});
  });

  app.get('/robots.txt', (req: Request, res: Response) => {
    const baseUrl = normalizeCanonicalSitemapBaseUrl(getRequestOrigin(req));
    res
      .status(200)
      .setHeader('Cache-Control', 'public, max-age=3600')
      .type('text/plain; charset=utf-8')
      .send(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get('/llms.txt', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    res
      .status(200)
      .setHeader('Cache-Control', 'public, max-age=3600')
      .type('text/plain; charset=utf-8')
      .send(buildLlmsTxt(baseUrl));
  });

  app.get('/llms-full.txt', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    res
      .status(200)
      .setHeader('Cache-Control', 'public, max-age=3600')
      .type('text/plain; charset=utf-8')
      .send(buildLlmsFullTxt(baseUrl));
  });

  app.get('/sitemap.xml', (req: Request, res: Response) => {
    const {xml} = buildPrimarySitemapXml({
      requestOrigin: getRequestOrigin(req),
      redirectMap: REDIRECT_MAP,
    });

    res
      .status(200)
      .setHeader('Cache-Control', 'public, max-age=3600')
      .type('application/xml; charset=utf-8')
      .send(xml);
  });

  for (const legacySitemapPath of LEGACY_SITEMAP_CHILD_PATHS) {
    app.get(legacySitemapPath, (req: Request, res: Response) => {
      const baseUrl = normalizeCanonicalSitemapBaseUrl(getRequestOrigin(req));
      res.redirect(301, `${baseUrl}/sitemap.xml`);
    });
  }

  app.get('/sitemap-:part.xml', (req: Request, res: Response, next: NextFunction) => {
    const partParam = req.params.part;
    if (!/^\d+$/.test(partParam)) {
      next();
      return;
    }

    const partIndex = Number(partParam) - 1;
    const {isIndex, chunks} = buildPrimarySitemapXml({
      requestOrigin: getRequestOrigin(req),
      redirectMap: REDIRECT_MAP,
    });

    if (!isIndex || partIndex < 0 || partIndex >= chunks.length) {
      next();
      return;
    }

    res
      .status(200)
      .setHeader('Cache-Control', 'public, max-age=3600')
      .type('application/xml; charset=utf-8')
      .send(renderUrlSetXml(chunks[partIndex]));
  });

  app.get('/api/visitors', (_req: Request, res: Response) => {
    try {
      const totalVisitors = getTotalVisitors();
      res.setHeader('Cache-Control', 'public, max-age=15, stale-while-revalidate=30');
      res.status(200).json({ok: true, totalVisitors});
    } catch (error) {
      console.error('[Visitors Read Error]', error);
      res.status(500).json({ok: false, error: 'Unable to retrieve visitor count.'});
    }
  });

  app.post('/api/visitors/track', (req: Request, res: Response) => {
    if (!checkRateLimit(req, res, 'visitors-track', 30, 60_000)) {
      return;
    }

    try {
      const referer = (req.get('referer') || '').toLowerCase();
      if (isBotOrAutomatedRequest(req) || referer.includes('/admin')) {
        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json({ok: true, totalVisitors: getTotalVisitors(), counted: false});
        return;
      }

      let visitorId = parseCookieValue(req.headers.cookie, VISITOR_COOKIE_NAME);
      if (!visitorId || !/^[a-zA-Z0-9-]{16,64}$/.test(visitorId)) {
        visitorId = randomUUID();
        const isSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
        res.cookie(VISITOR_COOKIE_NAME, visitorId, {
          httpOnly: true,
          sameSite: 'lax',
          secure: isSecure,
          maxAge: 365 * 24 * 60 * 60 * 1000,
          path: '/',
        });
      }

      const visitorHash = hashVisitorIdentifier(`${visitorId}:${getClientIp(req).slice(0, 16)}`);
      const result = recordUniqueVisitor(visitorHash);

      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({
        ok: true,
        totalVisitors: result.totalVisitors,
        counted: result.counted,
      });
    } catch (error) {
      console.error('[Visitors Track Error]', error);
      res.status(500).json({ok: false, error: 'Unable to record visit.'});
    }
  });

  // Persistent Lead & Actual SMTP Email Delivery Handler
  const handleLeadSubmission = async (
    req: Request,
    res: Response,
    defaultSource: LeadSourceType,
  ) => {
    if (!checkRateLimit(req, res, 'lead-submit', 10, 60_000)) {
      return;
    }

    const body = (req.body ?? {}) as InquiryPayload;

    // Spam honeypot check
    if (typeof body.website_url === 'string' && body.website_url.trim().length > 0) {
      res.status(200).json({ok: true, emailDelivered: true, referenceId: 'KLY-ACCEPTED'});
      return;
    }

    const name = sanitizeSingleLine(body.name, 120);
    const company = sanitizeSingleLine(body.company, 140);
    const email = sanitizeSingleLine(body.email, 160);
    const phone = sanitizeSingleLine(body.phone, 32);
    const city = sanitizeSingleLine(body.city || (body as {location?: string}).location, 100);
    const service = sanitizeSingleLine(body.service, 120);
    const industry = sanitizeSingleLine(body.industry, 120);
    const subject = sanitizeSingleLine(body.subject, 160);
    const message = sanitizeMultiline(body.message || body.description, 2000);
    const sourcePage = sanitizeSingleLine(body.sourcePage, 200) || '/';
    const sourceSection = sanitizeSingleLine(body.sourceSection, 120) || 'Website Form';
    const consentGiven = body.consent === true;

    const allowedSources: LeadSourceType[] = ['contact', 'quote', 'service', 'solar', 'callback'];
    const source: LeadSourceType = allowedSources.includes(body.type as LeadSourceType)
      ? (body.type as LeadSourceType)
      : defaultSource;
    const isCallbackLead = source === 'callback';

    if (name.length < 2) {
      res.status(400).json({ok: false, error: 'Please provide your full name (at least 2 characters).'});
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      res.status(400).json({ok: false, error: 'Please provide a valid 10-digit Indian mobile number.'});
      return;
    }

    const effectiveEmail = isCallbackLead ? '' : email;
    const effectiveService = service || (isCallbackLead ? 'Callback Request' : '');
    const effectiveSubject = subject || (isCallbackLead ? 'Homepage Callback Request' : '');
    const effectiveMessage =
      message || (isCallbackLead ? 'Quick callback request submitted from Homepage Hero Banner.' : '');
    const effectiveConsent = isCallbackLead ? true : consentGiven;

    if (!isCallbackLead) {
      if (!isValidEmailAddress(effectiveEmail)) {
        res.status(400).json({ok: false, error: 'Please provide a valid email address.'});
        return;
      }
      if (effectiveMessage.length < 10) {
        res.status(400).json({
          ok: false,
          error: 'Please include brief project or enquiry details (at least 10 characters).',
        });
        return;
      }
      if (!effectiveConsent) {
        res.status(400).json({
          ok: false,
          error: 'Please confirm your privacy consent before submitting your enquiry.',
        });
        return;
      }
    }

    const fingerprint = computeSubmissionFingerprint([
      source,
      effectiveEmail,
      phone.replace(/\D/g, ''),
      effectiveService,
      effectiveMessage,
    ]);

    try {
      const recentDuplicate = findRecentDuplicateLead(fingerprint, 120);
      if (recentDuplicate) {
        if (recentDuplicate.emailStatus === 'sent') {
          res.status(200).json({
            ok: true,
            saved: true,
            duplicatePrevented: true,
            emailDelivered: true,
            emailStatus: 'sent',
            referenceId: recentDuplicate.referenceId,
            createdAt: recentDuplicate.createdAt,
            statusMessage: SUCCESS_SAVED_AND_EMAILED_MSG,
          });
          return;
        }

        const lastAttemptMs = recentDuplicate.lastEmailAttemptAt
          ? new Date(recentDuplicate.lastEmailAttemptAt).getTime()
          : 0;
        const secondsSinceAttempt = lastAttemptMs ? (Date.now() - lastAttemptMs) / 1000 : 999;

        // Avoid duplicate DB rows & rapid retry storms within 20 seconds; otherwise safely re-attempt existing enquiry
        if (secondsSinceAttempt < 20) {
          res.status(202).json({
            ok: true,
            saved: true,
            duplicatePrevented: true,
            emailDelivered: false,
            emailStatus: recentDuplicate.emailStatus,
            referenceId: recentDuplicate.referenceId,
            createdAt: recentDuplicate.createdAt,
            statusMessage: SAVED_EMAIL_DELAYED_MSG,
          });
          return;
        }

        const existingLead = getLeadByReferenceId(recentDuplicate.referenceId);
        if (existingLead) {
          const retryOutcome = await deliverSavedLeadEmail(existingLead);
          res.status(retryOutcome.delivered ? 200 : 202).json({
            ok: true,
            saved: true,
            duplicatePrevented: true,
            emailDelivered: retryOutcome.delivered,
            emailStatus: retryOutcome.delivered ? 'sent' : 'failed',
            referenceId: existingLead.referenceId,
            createdAt: existingLead.createdAt,
            statusMessage: retryOutcome.delivered
              ? SUCCESS_SAVED_AND_EMAILED_MSG
              : SAVED_EMAIL_DELAYED_MSG,
          });
          return;
        }
      }

      // Step 2: Persist enquiry permanently in SQLite BEFORE attempting SMTP delivery
      let saved: {referenceId: string; createdAt: string};
      try {
        saved = saveLeadRecord({
          source,
          name,
          company,
          phone,
          email: effectiveEmail,
          city,
          service: effectiveService,
          industry,
          subject: effectiveSubject,
          message: effectiveMessage,
          sourcePage,
          sourceSection,
          consentGiven: effectiveConsent,
          fingerprint,
        });
      } catch (dbError) {
        console.error('[Lead Database Save Error]', dbError);
        res.status(500).json({
          ok: false,
          saved: false,
          emailDelivered: false,
          error: DB_SAVE_FAILED_MSG,
        });
        return;
      }

      // Step 3: Attempt SMTP email delivery (never fail/delete the saved DB record on SMTP errors)
      const emailKind =
        source === 'callback'
          ? 'callback'
          : source === 'solar'
            ? 'solar'
            : source === 'service'
              ? 'service'
              : source === 'quote'
                ? 'quote'
                : 'contact';

      let delivered = false;
      let messageId: string | undefined;
      let errorCode = 'SMTP_ERROR';
      let errorMsg = 'SMTP delivery failed.';

      try {
        const mailResult = await sendEnquiryNotificationEmail({
          kind: emailKind,
          referenceId: saved.referenceId,
          name,
          company,
          email: effectiveEmail,
          phone,
          city,
          service: effectiveService,
          industry,
          subject: effectiveSubject,
          message: effectiveMessage,
          sourcePage,
          sourceSection,
          submittedAtIso: saved.createdAt,
          consentGiven: effectiveConsent,
        });
        delivered = mailResult.delivered;
        messageId = mailResult.messageId;
        errorCode = mailResult.errorCode || (mailResult.configured ? 'SMTP_ERROR' : 'SMTP_NOT_CONFIGURED');
        errorMsg = mailResult.error || errorMsg;
      } catch (transportError) {
        errorCode = 'SMTP_UNEXPECTED_ERROR';
        errorMsg = transportError instanceof Error ? transportError.message : 'Unexpected SMTP transport error';
      }

      // Step 4: Record email delivery outcome & return truthful response (zero SMTP error leakage)
      if (delivered) {
        updateLeadEmailStatus(saved.referenceId, 'sent', {
          messageId,
          incrementRetry: true,
        });
        console.info(
          `[Lead Delivered] ${saved.referenceId} | source=${source} | service=${service || 'general'} | page=${sourcePage}`,
        );

        res.status(201).json({
          ok: true,
          saved: true,
          emailDelivered: true,
          emailStatus: 'sent',
          referenceId: saved.referenceId,
          createdAt: saved.createdAt,
          statusMessage: SUCCESS_SAVED_AND_EMAILED_MSG,
        });
        return;
      }

      updateLeadEmailStatus(saved.referenceId, 'failed', {
        errorMsg,
        errorCode,
        incrementRetry: true,
      });

      res.status(202).json({
        ok: true,
        saved: true,
        emailDelivered: false,
        emailStatus: 'failed',
        referenceId: saved.referenceId,
        createdAt: saved.createdAt,
        statusMessage: SAVED_EMAIL_DELAYED_MSG,
      });
    } catch (error) {
      console.error('[Lead Submission Error]', error);
      res.status(500).json({
        ok: false,
        saved: false,
        emailDelivered: false,
        error: DB_SAVE_FAILED_MSG,
      });
    }
  };

  app.post('/api/inquiries', (req: Request, res: Response) => {
    void handleLeadSubmission(req, res, 'contact');
  });

  app.post('/api/leads', (req: Request, res: Response) => {
    void handleLeadSubmission(req, res, 'quote');
  });

  // Protected Admin SMTP Diagnostics & Failed-Enquiry Retry Endpoints
  app.get('/api/admin/smtp-diagnostics', async (req: Request, res: Response) => {
    if (!isAdminAuthorized(req)) {
      res.status(403).json({ok: false, error: 'Unauthorized.'});
      return;
    }
    try {
      const diagnostics = await verifySmtpConnection();
      const leadStatusCounts = getLeadEmailStatusCounts();
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({
        ok: true,
        diagnostics,
        leadStatusCounts,
      });
    } catch (error) {
      console.error('[Admin SMTP Diagnostics Error]', error);
      res.status(500).json({ok: false, error: 'Unable to run SMTP diagnostics.'});
    }
  });

  app.post('/api/admin/enquiries/retry', async (req: Request, res: Response) => {
    if (!isAdminAuthorized(req)) {
      res.status(403).json({ok: false, error: 'Unauthorized.'});
      return;
    }
    try {
      const body = (req.body ?? {}) as {referenceId?: string; includeAuthErrors?: boolean};
      const targetRef = sanitizeSingleLine(body.referenceId, 64);

      if (targetRef) {
        const lead = getLeadByReferenceId(targetRef);
        if (!lead) {
          res.status(404).json({ok: false, error: 'Enquiry reference not found.'});
          return;
        }
        if (lead.emailStatus === 'sent') {
          res.status(200).json({
            ok: true,
            referenceId: lead.referenceId,
            alreadySent: true,
            delivered: true,
          });
          return;
        }
        const outcome = await deliverSavedLeadEmail(lead);
        res.status(200).json({
          ok: true,
          referenceId: lead.referenceId,
          delivered: outcome.delivered,
          errorCode: outcome.errorCode ?? null,
        });
        return;
      }

      const targets = listFailedLeadsForRetry({
        maxRetries: 10,
        limit: 20,
        includeAuthErrors: body.includeAuthErrors === true,
      });
      const results: {referenceId: string; delivered: boolean; errorCode?: string}[] = [];
      for (const lead of targets) {
        const outcome = await deliverSavedLeadEmail(lead);
        results.push({
          referenceId: lead.referenceId,
          delivered: outcome.delivered,
          errorCode: outcome.errorCode,
        });
      }

      res.status(200).json({
        ok: true,
        attempted: results.length,
        deliveredCount: results.filter((r) => r.delivered).length,
        results,
      });
    } catch (error) {
      console.error('[Admin Retry Error]', error);
      res.status(500).json({ok: false, error: 'Unable to retry failed enquiries.'});
    }
  });

  // Website Chatbox API (Mandatory Visitor Gate -> SQLite Session + Gmail SMTP Delivery)
  app.post('/api/chat/start', async (req: Request, res: Response) => {
    if (!checkRateLimit(req, res, 'chat-start', 10, 60_000)) {
      return;
    }

    const body = (req.body ?? {}) as ChatStartPayload;

    if (typeof body.website_url === 'string' && body.website_url.trim().length > 0) {
      res.status(400).json({ok: false, error: 'Automated submission rejected.'});
      return;
    }

    const name = sanitizeSingleLine(body.name, 120);
    const phone = sanitizeSingleLine(body.phone, 32);
    const email = sanitizeSingleLine(body.email, 160);
    const company = sanitizeSingleLine(body.company, 140);
    const service = sanitizeSingleLine(body.service, 120) || 'Website Enquiry Chat';
    const requirement = sanitizeMultiline(body.requirement, 2000);
    const sourcePage = sanitizeSingleLine(body.sourcePage, 200) || '/';

    if (name.length < 2) {
      res.status(400).json({ok: false, error: 'Please enter your full name.'});
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      res.status(400).json({ok: false, error: 'Please enter a valid 10-digit Indian mobile number.'});
      return;
    }

    try {
      const {session, initialMessages} = createChatSession({
        name,
        phone,
        email,
        company,
        service,
        initialRequirement: requirement,
        sourcePage,
      });

      const mailResult = await sendEnquiryNotificationEmail({
        kind: 'chat_lead',
        referenceId: session.referenceId,
        name: session.name,
        company: session.company,
        email: session.email,
        phone: session.phone,
        service: session.service,
        subject: `Chatbox Lead — ${session.name}`,
        message:
          session.initialRequirement ||
          'Visitor initiated Website Enquiry Chat with Name & Phone Number.',
        sourcePage: session.sourcePage,
        sourceSection: 'Website Chatbox (Step 1)',
        submittedAtIso: session.createdAt,
        consentGiven: true,
        transcript: initialMessages.map((m) => ({
          sender: m.sender,
          text: m.message,
          createdAt: m.createdAt,
        })),
      });

      const emailStatus = mailResult.delivered ? 'sent' : 'failed';

      updateLeadEmailStatus(session.referenceId, emailStatus, {
        errorMsg: mailResult.delivered ? undefined : mailResult.error,
        errorCode: mailResult.delivered ? undefined : mailResult.errorCode || 'SMTP_ERROR',
        messageId: mailResult.messageId,
        incrementRetry: true,
      });
      updateChatEmailStatus(session.id, emailStatus, initialMessages[0]?.id);

      const emailNotice = mailResult.delivered
        ? SUCCESS_SAVED_AND_EMAILED_MSG
        : SAVED_EMAIL_DELAYED_MSG;

      res.status(mailResult.delivered ? 201 : 202).json({
        ok: true,
        saved: true,
        sessionId: session.id,
        sessionToken: session.sessionToken,
        referenceId: session.referenceId,
        emailDelivered: mailResult.delivered,
        emailStatus,
        emailNotice,
        messages: initialMessages.map((m) => ({
          ...m,
          emailStatus,
        })),
      });
    } catch (error) {
      console.error('[Chat Start Error]', error);
      res.status(500).json({
        ok: false,
        saved: false,
        error: DB_SAVE_FAILED_MSG,
      });
    }
  });

  app.post('/api/chat/session', (req: Request, res: Response) => {
    const body = (req.body ?? {}) as {sessionId?: string; sessionToken?: string};
    const sessionId = sanitizeSingleLine(body.sessionId, 80);
    const sessionToken = sanitizeSingleLine(body.sessionToken, 120);
    if (!sessionId || !sessionToken) {
      res.status(400).json({ok: false, error: 'Missing chat session credentials.'});
      return;
    }

    const found = getChatSessionAuthorized(sessionId, sessionToken);
    if (!found) {
      res.status(404).json({ok: false, error: 'Chat session not found.'});
      return;
    }

    res.status(200).json({
      ok: true,
      session: {
        referenceId: found.session.referenceId,
        name: found.session.name,
        company: found.session.company,
        service: found.session.service,
        initialRequirement: found.session.initialRequirement,
        emailStatus: found.session.emailStatus,
      },
      messages: found.messages,
    });
  });

  app.post('/api/chat/message', async (req: Request, res: Response) => {
    if (!checkRateLimit(req, res, 'chat-message', 20, 60_000)) {
      return;
    }

    const body = (req.body ?? {}) as ChatMessagePayload;
    const sessionId = sanitizeSingleLine(body.sessionId, 80);
    const sessionToken = sanitizeSingleLine(body.sessionToken, 120);
    const message = sanitizeMultiline(body.message, 2000);

    if (!sessionId || !sessionToken) {
      res.status(401).json({ok: false, error: 'Please complete the visitor details form first.'});
      return;
    }
    if (message.length < 2) {
      res.status(400).json({ok: false, error: 'Please enter a message before sending.'});
      return;
    }

    const found = getChatSessionAuthorized(sessionId, sessionToken);
    if (!found) {
      res.status(404).json({ok: false, error: 'Chat session expired or invalid.'});
      return;
    }

    // Prevent accidental duplicate message within 5 seconds
    const lastMsg = found.messages[found.messages.length - 1];
    if (
      lastMsg &&
      lastMsg.sender === 'visitor' &&
      lastMsg.message === message &&
      Date.now() - new Date(lastMsg.createdAt).getTime() < 5000
    ) {
      res.status(200).json({
        ok: true,
        duplicatePrevented: true,
        emailDelivered: lastMsg.emailStatus === 'sent',
        message: lastMsg,
      });
      return;
    }

    try {
      const savedMsg = appendChatMessage(sessionId, 'visitor', message, 'pending');
      const fullTranscript = [...found.messages, savedMsg].map((m) => ({
        sender: m.sender,
        text: m.message,
        createdAt: m.createdAt,
      }));

      const mailResult = await sendEnquiryNotificationEmail({
        kind: 'chat_message',
        referenceId: found.session.referenceId,
        name: found.session.name,
        company: found.session.company,
        email: found.session.email,
        phone: found.session.phone,
        service: found.session.service,
        subject: `Chat Follow-Up (${found.session.service})`,
        message,
        sourcePage: found.session.sourcePage,
        sourceSection: 'Website Chatbox (Conversation)',
        submittedAtIso: savedMsg.createdAt,
        consentGiven: found.session.consent,
        transcript: fullTranscript,
      });

      const emailStatus = mailResult.delivered ? 'sent' : 'failed';

      updateChatEmailStatus(sessionId, emailStatus, savedMsg.id);

      if (!mailResult.delivered) {
        res.status(202).json({
          ok: true,
          saved: true,
          emailDelivered: false,
          emailStatus,
          message: {...savedMsg, emailStatus},
          statusMessage: SAVED_EMAIL_DELAYED_MSG,
        });
        return;
      }

      res.status(201).json({
        ok: true,
        saved: true,
        emailDelivered: true,
        emailStatus: 'sent',
        message: {...savedMsg, emailStatus: 'sent'},
        statusMessage: SUCCESS_SAVED_AND_EMAILED_MSG,
      });
    } catch (error) {
      console.error('[Chat Message Error]', error);
      res.status(500).json({
        ok: false,
        saved: false,
        emailDelivered: false,
        error: DB_SAVE_FAILED_MSG,
      });
    }
  });

  let vite: Awaited<ReturnType<(typeof import('vite'))['createServer']>> | null = null;
  let productionTemplate = '';
  let productionRender: SsrModule['render'] | null = null;

  if (!isProduction) {
    const {createServer} = await import('vite');
    vite = await createServer({
      server: {middlewareMode: true},
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const clientDistDir = path.resolve(projectRoot, 'dist/client');
    const serverEntryPath = path.resolve(projectRoot, 'dist/server/entry-server.js');
    const templatePath = path.resolve(clientDistDir, 'index.html');

    productionTemplate = await fs.readFile(templatePath, 'utf-8');
    const serverModule = (await import(pathToFileURL(serverEntryPath).href)) as SsrModule;
    productionRender = serverModule.render;

    app.use(
      '/assets',
      express.static(path.resolve(clientDistDir, 'assets'), {
        maxAge: '365d',
        immutable: true,
      }),
    );

    app.use(
      express.static(clientDistDir, {
        index: false,
        maxAge: '7d',
      }),
    );
  }

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    if (url.startsWith('/api/')) {
      res.status(404).json({ok: false, error: 'API endpoint not found.'});
      return;
    }

    try {
      let template: string;
      let renderFn: SsrModule['render'];

      if (!isProduction && vite) {
        const rawTemplate = await fs.readFile(path.resolve(projectRoot, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, rawTemplate);
        const loaded = (await vite.ssrLoadModule('/src/entry-server.tsx')) as SsrModule;
        renderFn = loaded.render;
      } else if (productionRender) {
        template = productionTemplate;
        renderFn = productionRender;
      } else {
        throw new Error('SSR renderer is not initialized.');
      }

      const {html, headTags, statusCode} = renderFn(url, getRequestOrigin(req));

      const finalHtml = template
        .replace('<!--app-head-->', headTags)
        .replace('<!--app-html-->', html);

      res
        .status(statusCode)
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .send(finalHtml);
    } catch (error) {
      if (!isProduction && vite && error instanceof Error) {
        vite.ssrFixStacktrace(error);
      }
      next(error);
    }
  });

  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('[SSR Server Error]', err);
    if (res.headersSent) {
      return;
    }
    res
      .status(500)
      .setHeader('Content-Type', 'text/html; charset=utf-8')
      .send(
        '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Server Error | Klyia Technology</title></head><body style="font-family:sans-serif;padding:48px;background:#080808;color:#CDCBCA;"><h1 style="color:#FFFFFF;">Something went wrong</h1><p style="color:#969696;">Please refresh the page or contact Klyia Technology at klyiatechnology@gmail.com.</p></body></html>',
      );
  });

  const server = await new Promise<ReturnType<typeof app.listen>>((resolve, reject) => {
    const onListening = () => {
      console.info(
        `Klyia Technology SSR server running on port ${port} (${isProduction ? 'production' : 'development'})`,
      );
      resolve(httpServer);
    };

    const httpServer =
      typeof port === 'number'
        ? app.listen(port, '0.0.0.0', onListening)
        : app.listen(port, onListening);

    httpServer.once('error', (error) => {
      reject(error);
    });
  });

  const retryInterval = setInterval(() => {
    void runPendingEnquiryRecoverySweep().catch((err) => {
      console.error('[Enquiry Recovery Sweep Error]', err);
    });
  }, 120_000);
  retryInterval.unref();

  const shutdown = () => {
    clearInterval(retryInterval);
    server.close(() => {
      closeDatabase();
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

export const serverReady = createAppServer().catch((error) => {
  console.error('Failed to start Klyia Technology SSR server:', error);
  closeDatabase();
  process.exit(1);
});
