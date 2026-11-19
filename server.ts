import 'dotenv/config';
import {randomUUID} from 'node:crypto';
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
  getTotalVisitors,
  hashVisitorIdentifier,
  recordUniqueVisitor,
  saveLeadRecord,
  updateChatEmailStatus,
  updateLeadEmailStatus,
  type LeadSourceType,
} from './server/db.ts';
import {sendEnquiryNotificationEmail} from './server/mailer.ts';
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
import {CORE_INDEXABLE_ROUTES, ROUTES} from './src/config/routes.ts';
import {resolveBaseUrl} from './src/config/seo.ts';
import {
  ALL_BLOG_ARTICLES,
  ALL_INDUSTRIES,
  ALL_LOCATIONS,
  ALL_SERVICES,
} from './src/data/index.ts';

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
const isProduction = process.env.NODE_ENV === 'production';
const rawPort = process.env.PORT;
const port: number | string =
  rawPort && /^\d+$/.test(rawPort) ? Number(rawPort) : rawPort || 3000;
const VISITOR_COOKIE_NAME = 'klyia_vid';
const DEFAULT_SITEMAP_LASTMOD = '2026-11-18';

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

function buildUrlSetXml(
  baseUrl: string,
  entries: {path: string; priority: string; changefreq: string; lastmod?: string}[],
): string {
  const rows = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${baseUrl}${entry.path}</loc>\n    <lastmod>${entry.lastmod || DEFAULT_SITEMAP_LASTMOD}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    rows,
    '</urlset>',
  ].join('\n');
}

async function createAppServer() {
  getDatabase();

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
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    res
      .status(200)
      .type('text/plain; charset=utf-8')
      .send(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get('/sitemap.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const childSitemaps = [
      '/sitemap-pages.xml',
      '/sitemap-services.xml',
      '/sitemap-industries.xml',
      '/sitemap-locations.xml',
      '/sitemap-blog.xml',
    ];
    const entries = childSitemaps
      .map(
        (childPath) =>
          `  <sitemap>\n    <loc>${baseUrl}${childPath}</loc>\n    <lastmod>${DEFAULT_SITEMAP_LASTMOD}</lastmod>\n  </sitemap>`,
      )
      .join('\n');

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      entries,
      '</sitemapindex>',
    ].join('\n');

    res.status(200).type('application/xml; charset=utf-8').send(xml);
  });

  app.get('/sitemap-pages.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const xml = buildUrlSetXml(
      baseUrl,
      CORE_INDEXABLE_ROUTES.map((routePath) => ({
        path: routePath,
        priority: routePath === '/' ? '1.0' : '0.8',
        changefreq: 'weekly',
      })),
    );
    res.status(200).type('application/xml; charset=utf-8').send(xml);
  });

  app.get('/sitemap-services.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const xml = buildUrlSetXml(
      baseUrl,
      ALL_SERVICES.filter((item) => item.indexable !== false).map((item) => ({
        path: item.canonicalPath,
        priority: '0.85',
        changefreq: 'monthly',
        lastmod: item.updatedAt,
      })),
    );
    res.status(200).type('application/xml; charset=utf-8').send(xml);
  });

  app.get('/sitemap-industries.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const xml = buildUrlSetXml(
      baseUrl,
      ALL_INDUSTRIES.filter((item) => item.indexable !== false).map((item) => ({
        path: item.canonicalPath,
        priority: item.priorityBadge ? '0.9' : '0.8',
        changefreq: 'monthly',
        lastmod: item.updatedAt,
      })),
    );
    res.status(200).type('application/xml; charset=utf-8').send(xml);
  });

  app.get('/sitemap-locations.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const xml = buildUrlSetXml(
      baseUrl,
      ALL_LOCATIONS.filter((item) => item.indexable !== false).map((item) => ({
        path: item.canonicalPath,
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: item.updatedAt,
      })),
    );
    res.status(200).type('application/xml; charset=utf-8').send(xml);
  });

  app.get('/sitemap-blog.xml', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    const xml = buildUrlSetXml(
      baseUrl,
      ALL_BLOG_ARTICLES.filter((item) => item.indexable !== false).map((item) => ({
        path: item.canonicalPath,
        priority: '0.75',
        changefreq: 'monthly',
        lastmod: item.updatedAt,
      })),
    );
    res.status(200).type('application/xml; charset=utf-8').send(xml);
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

    const allowedSources: LeadSourceType[] = ['contact', 'quote', 'service', 'solar'];
    const source: LeadSourceType = allowedSources.includes(body.type as LeadSourceType)
      ? (body.type as LeadSourceType)
      : defaultSource;

    if (name.length < 2) {
      res.status(400).json({ok: false, error: 'Please provide your full name (at least 2 characters).'});
      return;
    }
    if (!isValidEmailAddress(email)) {
      res.status(400).json({ok: false, error: 'Please provide a valid email address.'});
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      res.status(400).json({ok: false, error: 'Please provide a valid 10-digit mobile number.'});
      return;
    }
    if (message.length < 10) {
      res.status(400).json({
        ok: false,
        error: 'Please include brief project or enquiry details (at least 10 characters).',
      });
      return;
    }
    if (!consentGiven) {
      res.status(400).json({
        ok: false,
        error: 'Please confirm your privacy consent before submitting your enquiry.',
      });
      return;
    }

    const fingerprint = computeSubmissionFingerprint([
      source,
      email,
      phone.replace(/\D/g, ''),
      service,
      message,
    ]);

    try {
      const recentDuplicate = findRecentDuplicateLead(fingerprint, 120);
      if (recentDuplicate && recentDuplicate.emailStatus === 'sent') {
        res.status(200).json({
          ok: true,
          duplicatePrevented: true,
          emailDelivered: true,
          referenceId: recentDuplicate.referenceId,
          createdAt: recentDuplicate.createdAt,
        });
        return;
      }

      const saved = saveLeadRecord({
        source,
        name,
        company,
        phone,
        email,
        city,
        service,
        industry,
        subject,
        message,
        sourcePage,
        sourceSection,
        consentGiven,
        fingerprint,
      });

      const emailKind =
        source === 'solar'
          ? 'solar'
          : source === 'service'
            ? 'service'
            : source === 'quote'
              ? 'quote'
              : 'contact';

      const mailResult = await sendEnquiryNotificationEmail({
        kind: emailKind,
        referenceId: saved.referenceId,
        name,
        company,
        email,
        phone,
        city,
        service,
        industry,
        subject,
        message,
        sourcePage,
        sourceSection,
        submittedAtIso: saved.createdAt,
        consentGiven,
      });

      if (!mailResult.configured) {
        updateLeadEmailStatus(saved.referenceId, 'smtp_unconfigured', mailResult.error);
        res.status(503).json({
          ok: false,
          savedLocally: true,
          emailDelivered: false,
          referenceId: saved.referenceId,
          error:
            'Your enquiry could not be emailed to klyiatechnology@gmail.com because server SMTP credentials (SMTP_USER / SMTP_PASS) are not configured yet. Please reach us directly via WhatsApp (+91 8296887643) or Call Now.',
        });
        return;
      }

      if (!mailResult.delivered) {
        updateLeadEmailStatus(saved.referenceId, 'failed', mailResult.error);
        res.status(502).json({
          ok: false,
          savedLocally: true,
          emailDelivered: false,
          referenceId: saved.referenceId,
          error:
            'Email delivery to klyiatechnology@gmail.com failed due to an SMTP relay error. Please retry or contact us directly via WhatsApp (+91 8296887643) or Call Now.',
        });
        return;
      }

      updateLeadEmailStatus(saved.referenceId, 'sent');
      console.info(
        `[Lead Delivered] ${saved.referenceId} | source=${source} | service=${service || 'general'} | page=${sourcePage}`,
      );

      res.status(201).json({
        ok: true,
        emailDelivered: true,
        referenceId: saved.referenceId,
        createdAt: saved.createdAt,
      });
    } catch (error) {
      console.error('[Lead Save Error]', error);
      res.status(500).json({
        ok: false,
        emailDelivered: false,
        error:
          'Unable to process your enquiry right now. Please message us on WhatsApp at +91 8296887643 or Call Now.',
      });
    }
  };

  app.post('/api/inquiries', (req: Request, res: Response) => {
    void handleLeadSubmission(req, res, 'contact');
  });

  app.post('/api/leads', (req: Request, res: Response) => {
    void handleLeadSubmission(req, res, 'quote');
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
    const service = sanitizeSingleLine(body.service, 120);
    const requirement = sanitizeMultiline(body.requirement, 2000);
    const sourcePage = sanitizeSingleLine(body.sourcePage, 200) || '/';
    const consentGiven = body.consent === true;

    if (name.length < 2) {
      res.status(400).json({ok: false, error: 'Please enter your full name.'});
      return;
    }
    if (!isValidPhoneNumber(phone)) {
      res.status(400).json({ok: false, error: 'Please enter a valid 10-digit mobile number.'});
      return;
    }
    if (!isValidEmailAddress(email)) {
      res.status(400).json({ok: false, error: 'Please enter a valid email address.'});
      return;
    }
    if (company.length < 2) {
      res.status(400).json({ok: false, error: 'Please enter your company or business name.'});
      return;
    }
    if (service.length < 2) {
      res.status(400).json({ok: false, error: 'Please select a service you are interested in.'});
      return;
    }
    if (requirement.length < 10) {
      res.status(400).json({
        ok: false,
        error: 'Please briefly describe your requirement (at least 10 characters).',
      });
      return;
    }
    if (!consentGiven) {
      res.status(400).json({
        ok: false,
        error: 'Please provide consent before starting the chat.',
      });
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
        subject: `Chatbox Lead — ${session.service}`,
        message: session.initialRequirement,
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

      const emailStatus = !mailResult.configured
        ? 'smtp_unconfigured'
        : mailResult.delivered
          ? 'sent'
          : 'failed';

      updateLeadEmailStatus(session.referenceId, emailStatus, mailResult.error);
      updateChatEmailStatus(session.id, emailStatus, initialMessages[0]?.id);

      const emailNotice = mailResult.delivered
        ? 'Your details have been forwarded to klyiatechnology@gmail.com. No agent is currently live in this window; our team reviews enquiries directly and will respond shortly.'
        : !mailResult.configured
          ? 'Your enquiry has been logged locally, but automatic Gmail forwarding is awaiting server SMTP credentials. For immediate help, please tap WhatsApp or Call Now below.'
          : 'Your enquiry has been logged locally, though automatic Gmail delivery encountered a relay issue. Please retry or use WhatsApp / Call Now below.';

      res.status(201).json({
        ok: true,
        sessionId: session.id,
        sessionToken: session.sessionToken,
        referenceId: session.referenceId,
        emailDelivered: mailResult.delivered,
        smtpConfigured: mailResult.configured,
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
        error: 'Unable to start enquiry chat right now. Please use WhatsApp or Call Now.',
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

      const emailStatus = !mailResult.configured
        ? 'smtp_unconfigured'
        : mailResult.delivered
          ? 'sent'
          : 'failed';

      updateChatEmailStatus(sessionId, emailStatus, savedMsg.id);

      if (!mailResult.delivered) {
        res.status(mailResult.configured ? 502 : 503).json({
          ok: false,
          savedLocally: true,
          emailDelivered: false,
          smtpConfigured: mailResult.configured,
          message: {...savedMsg, emailStatus},
          error: !mailResult.configured
            ? 'Message saved locally, but Gmail forwarding requires SMTP credentials on the server. Please use WhatsApp or Call Now for immediate reply.'
            : 'Message saved locally, but SMTP delivery to klyiatechnology@gmail.com failed. Please retry or use WhatsApp.',
        });
        return;
      }

      res.status(201).json({
        ok: true,
        emailDelivered: true,
        message: {...savedMsg, emailStatus: 'sent'},
      });
    } catch (error) {
      console.error('[Chat Message Error]', error);
      res.status(500).json({
        ok: false,
        emailDelivered: false,
        error: 'Unable to send chat message right now. Please try WhatsApp or Call Now.',
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

  const shutdown = () => {
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
