import nodemailer from 'nodemailer';
import type {Transporter} from 'nodemailer';
import {escapeHtml} from './security.ts';

export interface EnquiryEmailPayload {
  kind: 'contact' | 'quote' | 'service' | 'solar' | 'chat_lead' | 'chat_message';
  referenceId: string;
  name: string;
  company?: string;
  email: string;
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

export interface EmailDeliveryResult {
  configured: boolean;
  delivered: boolean;
  messageId?: string;
  error?: string;
}

function getSmtpConfig() {
  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').trim();
  const explicitHost = (process.env.SMTP_HOST || '').trim();
  const rawPort = (process.env.SMTP_PORT || '').trim();
  const rawSecure = (process.env.SMTP_SECURE || '').trim().toLowerCase();
  const toEmail = (process.env.ENQUIRY_TO_EMAIL || 'klyiatechnology@gmail.com').trim();
  const fromEmail = (process.env.SMTP_FROM || (user ? `"Klyia Technology Website" <${user}>` : '')).trim();
  const requireAuth = (process.env.SMTP_REQUIRE_AUTH || 'true').trim().toLowerCase() !== 'false';

  const isGmailUser = user.toLowerCase().endsWith('@gmail.com');
  const host = explicitHost || (isGmailUser ? 'smtp.gmail.com' : '');
  const port = rawPort && /^\d+$/.test(rawPort) ? Number(rawPort) : host === 'smtp.gmail.com' ? 465 : 587;
  const secure = rawSecure ? rawSecure === 'true' : port === 465;

  const configured = Boolean(host && toEmail && (!requireAuth || (user && pass)));

  return {
    configured,
    host,
    port,
    secure,
    user,
    pass,
    requireAuth,
    fromEmail: fromEmail || `"Klyia Technology Website" <${toEmail}>`,
    toEmail,
  };
}

export function isMailerConfigured(): boolean {
  return getSmtpConfig().configured;
}

function createTransporter(): Transporter | null {
  const cfg = getSmtpConfig();
  if (!cfg.configured) {
    return null;
  }

  return nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
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
  const cfg = getSmtpConfig();
  if (!cfg.configured) {
    return {
      configured: false,
      delivered: false,
      error: 'SMTP credentials (SMTP_USER / SMTP_PASS) are not configured on the server.',
    };
  }

  const transporter = createTransporter();
  if (!transporter) {
    return {
      configured: false,
      delivered: false,
      error: 'Unable to initialize SMTP transporter.',
    };
  }

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
    ['Email Address', payload.email],
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
              entry.sender === 'visitor' ? payload.name : 'Klyia Team Auto-Acknowledgement',
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

  try {
    const info = await transporter.sendMail({
      from: cfg.fromEmail,
      to: cfg.toEmail,
      replyTo: `${payload.name} <${payload.email}>`,
      subject: emailSubject,
      text: textLines.join('\n'),
      html: htmlBody,
    });

    return {
      configured: true,
      delivered: true,
      messageId: info.messageId,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'SMTP delivery failed.';
    console.error('[SMTP Delivery Error]', message);
    return {
      configured: true,
      delivered: false,
      error: message,
    };
  }
}
