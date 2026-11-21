import dns from 'node:dns/promises';
import nodemailer from 'nodemailer';
import type {Transporter} from 'nodemailer';
import {escapeHtml, isValidEmailAddress, sanitizeSingleLine} from './security.ts';

export interface EnquiryEmailPayload {
  kind: 'contact' | 'quote' | 'service' | 'solar' | 'chat_lead' | 'chat_message' | 'callback';
  referenceId: string;
  name: string;
  company?: string;
  email?: string;
  phone: string;
  city?: string;
  service?: string;
  industry?: string;
  subject?: string;
  message: string;
  sourcePage?: string;
  sourceSection?: string;
  submittedAtIso: string;
  consentGiven: boolean;
  transcript?: {
    sender: 'visitor' | 'system';
    text: string;
    createdAt: string;
  }[];
}

export type SmtpStage = 'config' | 'dns' | 'connect_verify' | 'send' | 'recipient_accept';

export interface EmailDeliveryResult {
  configured: boolean;
  delivered: boolean;
  transient: boolean;
  stage: SmtpStage;
  errorCode?: string;
  responseCode?: number;
  messageId?: string;
  acceptedRecipients?: string[];
  rejectedRecipients?: string[];
  transportPort?: number;
  transportSecure?: boolean;
  error?: string;
}

export interface SmtpEnvInspection {
  configured: boolean;
  missingVars: string[];
  host: string;
  port: number;
  secure: boolean;
  requireTls: boolean;
  tlsNormalizedFromMismatch: boolean;
  userMasked: string;
  fromAddress: string;
  toEmail: string;
  appPasswordSpacesStripped: boolean;
}

export interface SmtpDiagnosticReport {
  timestamp: string;
  env: SmtpEnvInspection;
  dns: {
    resolved: boolean;
    addresses?: string[];
    error?: string;
  };
  primaryVerify: {
    ok: boolean;
    host: string;
    port: number;
    secure: boolean;
    stage: SmtpStage;
    errorCode?: string;
    responseCode?: number;
    message: string;
    latencyMs: number;
  };
  alternatePortVerify?: {
    ok: boolean;
    host: string;
    port: number;
    secure: boolean;
    errorCode?: string;
    message: string;
    latencyMs: number;
  };
}

interface NormalizedSmtpConfig {
  configured: boolean;
  missingVars: string[];
  host: string;
  port: number;
  secure: boolean;
  requireTls: boolean;
  tlsNormalizedFromMismatch: boolean;
  user: string;
  pass: string;
  appPasswordSpacesStripped: boolean;
  requireAuth: boolean;
  isGmailRelay: boolean;
  fromDisplayName: string;
  fromAddress: string;
  toEmail: string;
  toEmailValid: boolean;
  ipFamily: 4 | 6 | undefined;
  rejectUnauthorized: boolean;
}

function stripWrappingQuotes(raw: string | undefined): string {
  const trimmed = (raw || '').trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function maskEmailAddress(email: string): string {
  const atIndex = email.indexOf('@');
  if (atIndex <= 1) {
    return email ? '***' : '';
  }
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const visible = local.slice(0, Math.min(2, local.length));
  return `${visible}${'*'.repeat(Math.max(3, local.length - visible.length))}${domain}`;
}

function extractDisplayName(rawFrom: string): string {
  if (!rawFrom) {
    return 'Klyia Technology Website';
  }
  const angleIdx = rawFrom.indexOf('<');
  const candidate = angleIdx >= 0 ? rawFrom.slice(0, angleIdx) : '';
  const cleaned = sanitizeSingleLine(candidate.replace(/["'<>]/g, ''), 80);
  return cleaned || 'Klyia Technology Website';
}

function extractAddressFromFromHeader(rawFrom: string): string {
  if (!rawFrom) {
    return '';
  }
  const match = rawFrom.match(/<([^<>]+)>/);
  const candidate = (match ? match[1] : rawFrom).trim();
  return isValidEmailAddress(candidate) ? candidate : '';
}

function getNormalizedSmtpConfig(): NormalizedSmtpConfig {
  const user = stripWrappingQuotes(process.env.SMTP_USER);
  const rawPass = stripWrappingQuotes(process.env.SMTP_PASS);
  const explicitHost = stripWrappingQuotes(process.env.SMTP_HOST);
  const rawPort = stripWrappingQuotes(process.env.SMTP_PORT);
  const rawSecure = stripWrappingQuotes(process.env.SMTP_SECURE).toLowerCase();
  const rawFrom = stripWrappingQuotes(process.env.SMTP_FROM);
  const toEmail = stripWrappingQuotes(process.env.ENQUIRY_TO_EMAIL) || 'klyiatechnology@gmail.com';
  const requireAuth = stripWrappingQuotes(process.env.SMTP_REQUIRE_AUTH).toLowerCase() !== 'false';
  const rawFamily = stripWrappingQuotes(process.env.SMTP_IP_FAMILY);
  const rejectUnauthorized =
    stripWrappingQuotes(process.env.SMTP_TLS_REJECT_UNAUTHORIZED).toLowerCase() !== 'false';

  const isGmailUser = user.toLowerCase().endsWith('@gmail.com') || user.toLowerCase().endsWith('@googlemail.com');
  const host = explicitHost || (isGmailUser ? 'smtp.gmail.com' : '');
  const isGmailRelay = host.toLowerCase() === 'smtp.gmail.com' || isGmailUser;

  // Google presents 16-character App Passwords as 4 space-separated groups ("xxxx xxxx xxxx xxxx").
  // Strip spaces cleanly if pasted directly from Google Account security UI.
  let pass = rawPass;
  let appPasswordSpacesStripped = false;
  if (isGmailRelay && /^[a-z0-9]{4}(?:\s+[a-z0-9]{4}){3}$/i.test(rawPass)) {
    pass = rawPass.replace(/\s+/g, '');
    appPasswordSpacesStripped = true;
  }

  const parsedPort = rawPort && /^\d+$/.test(rawPort) ? Number(rawPort) : isGmailRelay ? 465 : 587;
  const port = parsedPort > 0 && parsedPort <= 65535 ? parsedPort : 587;

  let secure: boolean;
  let tlsNormalizedFromMismatch = false;
  if (port === 465) {
    if (rawSecure === 'false') {
      tlsNormalizedFromMismatch = true;
    }
    secure = true;
  } else if (port === 587) {
    if (rawSecure === 'true') {
      tlsNormalizedFromMismatch = true;
    }
    secure = false;
  } else {
    secure = rawSecure ? rawSecure === 'true' : false;
  }
  const requireTls = !secure && (port === 587 || isGmailRelay);

  if (tlsNormalizedFromMismatch) {
    console.warn(
      `[SMTP Config Notice] Normalized TLS mode for port ${port}: secure=${secure}, requireTLS=${requireTls}`,
    );
  }

  const missingVars: string[] = [];
  if (!host) missingVars.push('SMTP_HOST');
  if (requireAuth && !user) missingVars.push('SMTP_USER');
  if (requireAuth && !pass) missingVars.push('SMTP_PASS');
  if (!toEmail || !isValidEmailAddress(toEmail)) missingVars.push('ENQUIRY_TO_EMAIL');

  // Lock From address to authenticated Gmail user on smtp.gmail.com so Gmail never rejects sender mismatch
  const customFromAddr = extractAddressFromFromHeader(rawFrom);
  const fromAddress = isGmailRelay
    ? user
    : customFromAddr || user || toEmail;
  const fromDisplayName = extractDisplayName(rawFrom);

  const ipFamily: 4 | 6 | undefined =
    rawFamily === '6' ? 6 : rawFamily === '4' || isGmailRelay ? 4 : undefined;

  const toEmailValid = isValidEmailAddress(toEmail);
  const configured = Boolean(
    host && toEmailValid && fromAddress && (!requireAuth || (user && pass)),
  );

  return {
    configured,
    missingVars,
    host,
    port,
    secure,
    requireTls,
    tlsNormalizedFromMismatch,
    user,
    pass,
    appPasswordSpacesStripped,
    requireAuth,
    isGmailRelay,
    fromDisplayName,
    fromAddress,
    toEmail,
    toEmailValid,
    ipFamily,
    rejectUnauthorized,
  };
}

export function inspectSmtpEnvironment(): SmtpEnvInspection {
  const cfg = getNormalizedSmtpConfig();
  return {
    configured: cfg.configured,
    missingVars: cfg.missingVars,
    host: cfg.host || '(unset)',
    port: cfg.port,
    secure: cfg.secure,
    requireTls: cfg.requireTls,
    tlsNormalizedFromMismatch: cfg.tlsNormalizedFromMismatch,
    userMasked: maskEmailAddress(cfg.user),
    fromAddress: cfg.fromAddress ? maskEmailAddress(cfg.fromAddress) : '(unset)',
    toEmail: cfg.toEmail,
    appPasswordSpacesStripped: cfg.appPasswordSpacesStripped,
  };
}

export function isMailerConfigured(): boolean {
  return getNormalizedSmtpConfig().configured;
}

function buildTransportForTarget(
  cfg: NormalizedSmtpConfig,
  override?: {port: number; secure: boolean; requireTls: boolean},
): Transporter {
  const targetPort = override?.port ?? cfg.port;
  const targetSecure = override?.secure ?? cfg.secure;
  const targetRequireTls = override?.requireTls ?? cfg.requireTls;

  return nodemailer.createTransport({
    host: cfg.host,
    port: targetPort,
    secure: targetSecure,
    requireTLS: targetRequireTls,
    connectionTimeout: 12_000,
    greetingTimeout: 10_000,
    socketTimeout: 18_000,
    ...(cfg.ipFamily ? {family: cfg.ipFamily} : {}),
    tls: {
      servername: cfg.host,
      minVersion: 'TLSv1.2',
      rejectUnauthorized: cfg.rejectUnauthorized,
    },
    ...(cfg.requireAuth && cfg.user
      ? {
          auth: {
            user: cfg.user,
            pass: cfg.pass,
          },
        }
      : {}),
  });
}

interface ParsedSmtpError {
  code: string;
  errorType: string;
  responseCode?: number;
  responseMessage: string;
  transient: boolean;
}

function sanitizeSmtpErrorText(raw: string, secrets: string[]): string {
  let clean = raw.replace(/[\r\n]+/g, ' ').trim();
  for (const secret of secrets) {
    if (secret && secret.length >= 4) {
      clean = clean.split(secret).join('[REDACTED]');
    }
  }
  return clean.slice(0, 320);
}

function classifySmtpError(err: unknown, secrets: string[]): ParsedSmtpError {
  const e = err as {
    code?: string;
    name?: string;
    responseCode?: number;
    response?: string;
    command?: string;
    message?: string;
  };
  const rawMessage = e?.message || 'SMTP delivery error';
  const responseCode = typeof e?.responseCode === 'number' ? e.responseCode : undefined;
  let code = (e?.code || '').toUpperCase();

  if (code === 'ESOCKET' || !code) {
    if (/ECONNREFUSED/i.test(rawMessage)) code = 'ECONNREFUSED';
    else if (/ETIMEDOUT|Greeting never received|Connection timeout/i.test(rawMessage)) code = 'ETIMEDOUT';
    else if (/ENETUNREACH/i.test(rawMessage)) code = 'ENETUNREACH';
    else if (/EHOSTUNREACH/i.test(rawMessage)) code = 'EHOSTUNREACH';
    else if (/EAI_AGAIN|ENOTFOUND/i.test(rawMessage)) code = 'EDNS';
  }
  if ((!code || code === 'SMTP_ERROR') && responseCode === 535) code = 'EAUTH';
  if (!code && responseCode && responseCode >= 400 && responseCode < 500) code = `SMTP_${responseCode}`;
  if (!code && /535|Username and Password not accepted|Invalid login|authentication failed/i.test(rawMessage)) {
    code = 'EAUTH';
  }
  if (!code) {
    code = 'SMTP_ERROR';
  }

  const transientCodes = new Set([
    'ETIMEDOUT',
    'ESOCKET',
    'ECONNREFUSED',
    'ECONNRESET',
    'ENETUNREACH',
    'EHOSTUNREACH',
    'EAI_AGAIN',
    'EDNS',
  ]);
  const transient =
    transientCodes.has(code) ||
    (typeof responseCode === 'number' && responseCode >= 400 && responseCode < 500);

  return {
    code,
    errorType: e?.name || 'Error',
    responseCode,
    responseMessage: sanitizeSmtpErrorText(
      e?.response ? `${rawMessage} (${e.response})` : rawMessage,
      secrets,
    ),
    transient,
  };
}

function logSmtpDiagnostic(params: {
  level: 'info' | 'warn' | 'error';
  stage: SmtpStage;
  referenceId: string;
  host: string;
  port: number;
  secure: boolean;
  code?: string;
  errorType?: string;
  responseCode?: number;
  responseMessage: string;
}) {
  const entry = {
    timestamp: new Date().toISOString(),
    stage: params.stage,
    referenceId: params.referenceId,
    host: params.host,
    port: params.port,
    secure: params.secure,
    code: params.code,
    errorType: params.errorType,
    responseCode: params.responseCode,
    responseMessage: params.responseMessage,
  };
  const line = `[SMTP ${params.level.toUpperCase()}] ${JSON.stringify(entry)}`;
  if (params.level === 'error') {
    console.error(line);
  } else if (params.level === 'warn') {
    console.warn(line);
  } else {
    console.info(line);
  }
}

export async function verifySmtpConnection(): Promise<SmtpDiagnosticReport> {
  const cfg = getNormalizedSmtpConfig();
  const env = inspectSmtpEnvironment();
  const timestamp = new Date().toISOString();

  let dnsResult: SmtpDiagnosticReport['dns'] = {resolved: false};
  if (cfg.host) {
    try {
      const records = await dns.lookup(cfg.host, {all: true});
      dnsResult = {
        resolved: true,
        addresses: records.map((r) => `${r.address} (IPv${r.family})`),
      };
    } catch (err) {
      dnsResult = {
        resolved: false,
        error: err instanceof Error ? err.message : 'DNS lookup failed',
      };
    }
  } else {
    dnsResult = {resolved: false, error: 'SMTP_HOST is not set'};
  }

  if (!cfg.configured) {
    return {
      timestamp,
      env,
      dns: dnsResult,
      primaryVerify: {
        ok: false,
        host: cfg.host || '(unset)',
        port: cfg.port,
        secure: cfg.secure,
        stage: 'config',
        errorCode: 'SMTP_NOT_CONFIGURED',
        message: `Missing required environment variables: ${cfg.missingVars.join(', ')}`,
        latencyMs: 0,
      },
    };
  }

  const probePort = async (target: {port: number; secure: boolean; requireTls: boolean}) => {
    const start = Date.now();
    const transporter = buildTransportForTarget(cfg, target);
    try {
      await transporter.verify();
      return {
        ok: true,
        host: cfg.host,
        port: target.port,
        secure: target.secure,
        stage: 'connect_verify' as SmtpStage,
        message: 'SMTP connection, TLS handshake, and authentication verified.',
        latencyMs: Date.now() - start,
      };
    } catch (err) {
      const parsed = classifySmtpError(err, [cfg.pass]);
      return {
        ok: false,
        host: cfg.host,
        port: target.port,
        secure: target.secure,
        stage: 'connect_verify' as SmtpStage,
        errorCode: parsed.code,
        responseCode: parsed.responseCode,
        message: parsed.responseMessage,
        latencyMs: Date.now() - start,
      };
    } finally {
      transporter.close();
    }
  };

  const primaryVerify = await probePort({
    port: cfg.port,
    secure: cfg.secure,
    requireTls: cfg.requireTls,
  });

  let alternatePortVerify: SmtpDiagnosticReport['alternatePortVerify'];
  if (!primaryVerify.ok && cfg.isGmailRelay && (cfg.port === 465 || cfg.port === 587)) {
    const alt =
      cfg.port === 465
        ? {port: 587, secure: false, requireTls: true}
        : {port: 465, secure: true, requireTls: false};
    alternatePortVerify = await probePort(alt);
  }

  return {
    timestamp,
    env,
    dns: dnsResult,
    primaryVerify,
    alternatePortVerify,
  };
}

function formatIndiaTimestamp(isoString: string): string {
  try {
    const date = new Date(isoString);
    return `${date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    })} IST (${isoString})`;
  } catch {
    return isoString;
  }
}

function resolveKindLabel(kind: EnquiryEmailPayload['kind']): string {
  switch (kind) {
    case 'callback':
      return 'Homepage Callback Request';
    case 'solar':
      return 'Solar & Renewable Energy Enquiry';
    case 'service':
      return 'Service Enquiry';
    case 'quote':
      return 'Project Quotation Request';
    case 'chat_lead':
      return 'Website Chatbox — New Visitor Lead';
    case 'chat_message':
      return 'Website Chatbox — Follow-Up Message';
    case 'contact':
    default:
      return 'Website Contact Enquiry';
  }
}

export async function sendEnquiryNotificationEmail(
  payload: EnquiryEmailPayload,
): Promise<EmailDeliveryResult> {
  const cfg = getNormalizedSmtpConfig();
  if (!cfg.configured) {
    logSmtpDiagnostic({
      level: 'error',
      stage: 'config',
      referenceId: payload.referenceId,
      host: cfg.host || '(unset)',
      port: cfg.port,
      secure: cfg.secure,
      code: 'SMTP_NOT_CONFIGURED',
      responseMessage: `Missing required environment variables: ${cfg.missingVars.join(', ')}`,
    });
    return {
      configured: false,
      delivered: false,
      transient: false,
      stage: 'config',
      errorCode: 'SMTP_NOT_CONFIGURED',
      error: `Missing SMTP environment configuration: ${cfg.missingVars.join(', ')}`,
    };
  }

  const trimmedReplyEmail = (payload.email || '').trim();
  const hasValidReplyEmail =
    Boolean(trimmedReplyEmail) &&
    isValidEmailAddress(trimmedReplyEmail) &&
    !/[\r\n<>]/.test(trimmedReplyEmail);

  if (trimmedReplyEmail && !hasValidReplyEmail) {
    return {
      configured: true,
      delivered: false,
      transient: false,
      stage: 'config',
      errorCode: 'INVALID_REPLY_TO',
      error: 'Invalid customer Reply-To email address.',
    };
  }

  const safeReplyToName = sanitizeSingleLine(payload.name.replace(/[<>"'\r\n]/g, ''), 100);
  const kindLabel = resolveKindLabel(payload.kind);
  const formattedTime = formatIndiaTimestamp(payload.submittedAtIso);
  const emailSubject = `[Klyia ${kindLabel}] ${payload.referenceId} — ${payload.name}${
    payload.service ? ` (${payload.service})` : ''
  }`;

  const detailRows: [string, string][] = [
    ['Reference ID', payload.referenceId],
    ['Submission Type', kindLabel],
    ['Submitted At', formattedTime],
    ['Full Name', payload.name],
    ['Company / Business', payload.company || 'Not specified'],
    ['Mobile Number', payload.phone],
    ['Email Address', hasValidReplyEmail ? trimmedReplyEmail : 'Not provided'],
    ['Selected Service', payload.service || 'General Enquiry'],
    ['Industry', payload.industry || 'Not specified'],
    ['City / Region', payload.city || 'Not specified'],
    ['Subject', payload.subject || 'Not specified'],
    ['Source Page', payload.sourcePage || '/'],
    ['Source Section', payload.sourceSection || 'Website Form'],
    ['Privacy Consent', payload.consentGiven ? 'Yes — visitor consented to contact' : 'Not provided'],
  ];

  const textLines = [
    `KLYIA TECHNOLOGY — ${kindLabel.toUpperCase()}`,
    '====================================================',
    ...detailRows.map(([label, val]) => `${label}: ${val}`),
    '',
    'ENQUIRY / REQUIREMENT MESSAGE:',
    '----------------------------------------------------',
    payload.message,
  ];

  if (payload.transcript && payload.transcript.length > 0) {
    textLines.push('', 'CHAT CONVERSATION TRANSCRIPT:', '----------------------------------------------------');
    for (const entry of payload.transcript) {
      const who = entry.sender === 'visitor' ? payload.name : 'Klyia Notice';
      textLines.push(`[${formatIndiaTimestamp(entry.createdAt)}] ${who}: ${entry.text}`);
    }
  }

  const htmlRows = detailRows
    .map(
      ([label, val]) => `
        <tr>
          <td style="padding:8px 12px;border:1px solid #2b2b2b;color:#969696;font-weight:600;width:190px;vertical-align:top;">${escapeHtml(
            label,
          )}</td>
          <td style="padding:8px 12px;border:1px solid #2b2b2b;color:#ffffff;vertical-align:top;">${escapeHtml(
            val,
          )}</td>
        </tr>`,
    )
    .join('');

  const transcriptHtml =
    payload.transcript && payload.transcript.length > 0
      ? `
      <h3 style="margin:24px 0 10px;color:#ffffff;font-size:15px;">Chat Conversation Transcript</h3>
      <div style="border:1px solid #2b2b2b;border-radius:8px;padding:12px;background:#111111;">
        ${payload.transcript
          .map(
            (entry) => `
          <div style="margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #222222;">
            <div style="font-size:11px;color:#969696;margin-bottom:3px;">
              <strong style="color:${entry.sender === 'visitor' ? '#D41514' : '#CDCBCA'};">${escapeHtml(
              entry.sender === 'visitor' ? payload.name : 'Klyia Team Notice',
            )}</strong> · ${escapeHtml(formatIndiaTimestamp(entry.createdAt))}
            </div>
            <div style="font-size:13px;color:#CDCBCA;white-space:pre-wrap;">${escapeHtml(entry.text)}</div>
          </div>`,
          )
          .join('')}
      </div>`
      : '';

  const htmlBody = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#080808;color:#CDCBCA;padding:24px;">
    <div style="max-width:680px;margin:0 auto;background:#141414;border:1px solid #303030;border-radius:12px;padding:24px;">
      <p style="margin:0 0 6px;color:#D41514;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
        Klyia Technology · Website Lead Notification
      </p>
      <h2 style="margin:0 0 18px;color:#ffffff;font-size:20px;">${escapeHtml(kindLabel)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;background:#111111;">
        ${htmlRows}
      </table>
      <h3 style="margin:22px 0 8px;color:#ffffff;font-size:15px;">Enquiry / Requirement Details</h3>
      <div style="padding:14px;border:1px solid #2b2b2b;border-radius:8px;background:#111111;color:#ffffff;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
        payload.message,
      )}</div>
      ${transcriptHtml}
    </div>
  </div>`;

  // Attempt primary configured transport; if Gmail relay encounters a transient port/socket failure,
  // automatically fall back once to the alternate Gmail port (465 SSL <-> 587 STARTTLS).
  const transportTargets: {port: number; secure: boolean; requireTls: boolean}[] = [
    {port: cfg.port, secure: cfg.secure, requireTls: cfg.requireTls},
  ];
  if (cfg.isGmailRelay && (cfg.port === 465 || cfg.port === 587)) {
    transportTargets.push(
      cfg.port === 465
        ? {port: 587, secure: false, requireTls: true}
        : {port: 465, secure: true, requireTls: false},
    );
  }

  let lastResult: EmailDeliveryResult = {
    configured: true,
    delivered: false,
    transient: true,
    stage: 'connect_verify',
    errorCode: 'SMTP_ERROR',
    error: 'SMTP delivery failed.',
  };

  for (let i = 0; i < transportTargets.length; i++) {
    const target = transportTargets[i];
    const transporter = buildTransportForTarget(cfg, target);
    let currentStage: SmtpStage = 'connect_verify';

    try {
      await transporter.verify();

      currentStage = 'send';
      const info = await transporter.sendMail({
        from: {name: cfg.fromDisplayName, address: cfg.fromAddress},
        envelope: {
          from: cfg.fromAddress,
          to: cfg.toEmail,
        },
        to: cfg.toEmail,
        ...(hasValidReplyEmail
          ? {replyTo: safeReplyToName ? {name: safeReplyToName, address: trimmedReplyEmail} : trimmedReplyEmail}
          : {}),
        subject: emailSubject,
        text: textLines.join('\n'),
        html: htmlBody,
      });

      currentStage = 'recipient_accept';
      const accepted = Array.isArray(info.accepted) ? info.accepted.map(String) : [];
      const rejected = Array.isArray(info.rejected) ? info.rejected.map(String) : [];

      if (rejected.length > 0 && accepted.length === 0) {
        logSmtpDiagnostic({
          level: 'error',
          stage: 'recipient_accept',
          referenceId: payload.referenceId,
          host: cfg.host,
          port: target.port,
          secure: target.secure,
          code: 'RECIPIENT_REJECTED',
          responseMessage: `Recipient rejected by SMTP server: ${rejected.join(', ')}`,
        });
        return {
          configured: true,
          delivered: false,
          transient: false,
          stage: 'recipient_accept',
          errorCode: 'INVALID_RECIPIENT',
          acceptedRecipients: accepted,
          rejectedRecipients: rejected,
          transportPort: target.port,
          transportSecure: target.secure,
          error: 'Recipient address was rejected by the SMTP server.',
        };
      }

      logSmtpDiagnostic({
        level: 'info',
        stage: 'recipient_accept',
        referenceId: payload.referenceId,
        host: cfg.host,
        port: target.port,
        secure: target.secure,
        responseMessage: `Accepted messageId=${info.messageId || 'n/a'}`,
      });

      return {
        configured: true,
        delivered: true,
        transient: false,
        stage: 'recipient_accept',
        messageId: info.messageId,
        acceptedRecipients: accepted,
        rejectedRecipients: rejected,
        transportPort: target.port,
        transportSecure: target.secure,
      };
    } catch (error) {
      const parsed = classifySmtpError(error, [cfg.pass]);
      logSmtpDiagnostic({
        level: 'error',
        stage: currentStage,
        referenceId: payload.referenceId,
        host: cfg.host,
        port: target.port,
        secure: target.secure,
        code: parsed.code,
        errorType: parsed.errorType,
        responseCode: parsed.responseCode,
        responseMessage: parsed.responseMessage,
      });

      lastResult = {
        configured: true,
        delivered: false,
        transient: parsed.transient,
        stage: currentStage,
        errorCode: parsed.code,
        responseCode: parsed.responseCode,
        transportPort: target.port,
        transportSecure: target.secure,
        error: parsed.responseMessage,
      };

      // Do not fall back to another port if authentication or send was rejected
      if (!parsed.transient || currentStage !== 'connect_verify') {
        break;
      }

      if (i + 1 < transportTargets.length) {
        logSmtpDiagnostic({
          level: 'warn',
          stage: 'connect_verify',
          referenceId: payload.referenceId,
          host: cfg.host,
          port: transportTargets[i + 1].port,
          secure: transportTargets[i + 1].secure,
          code: parsed.code,
          responseMessage: `Primary port ${target.port} failed (${parsed.code}); trying fallback port ${transportTargets[i + 1].port}.`,
        });
      }
    } finally {
      transporter.close();
    }
  }

  return lastResult;
}
