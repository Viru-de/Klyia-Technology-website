import type {Request, Response} from 'express';

interface RateLimitBucket {
  count: number;
  resetAt: number;
}

const rateBuckets = new Map<string, RateLimitBucket>();

const BOT_USER_AGENT_REGEX =
  /\b(bot|crawler|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|whatsapp|telegrambot|curl|wget|python-requests|go-http-client|headlesschrome|phantomjs|lighthouse|uptime|monitor|pingdom|ahrefs|semrush|mj12bot|yandex|baiduspider|duckduckbot)\b/i;

export function isBotOrAutomatedRequest(req: Request): boolean {
  const userAgent = req.get('user-agent') || '';
  if (!userAgent.trim()) {
    return true;
  }
  if (BOT_USER_AGENT_REGEX.test(userAgent)) {
    return true;
  }
  const purpose = (req.get('purpose') || req.get('sec-purpose') || '').toLowerCase();
  if (purpose.includes('prefetch')) {
    return true;
  }
  return false;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket?.remoteAddress || 'unknown';
}

export function checkRateLimit(
  req: Request,
  res: Response,
  scope: string,
  maxRequests: number,
  windowMs: number,
): boolean {
  const ip = getClientIp(req);
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const existing = rateBuckets.get(key);

  if (!existing || now > existing.resetAt) {
    rateBuckets.set(key, {count: 1, resetAt: now + windowMs});
    if (rateBuckets.size > 5000) {
      for (const [entryKey, bucket] of rateBuckets.entries()) {
        if (now > bucket.resetAt) {
          rateBuckets.delete(entryKey);
        }
      }
    }
    return true;
  }

  if (existing.count >= maxRequests) {
    const retryAfterSec = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    res.setHeader('Retry-After', String(retryAfterSec));
    res.status(429).json({
      ok: false,
      error: 'Too many requests. Please wait a moment before trying again.',
    });
    return false;
  }

  existing.count += 1;
  return true;
}

export function parseCookieValue(cookieHeader: string | undefined, name: string): string | null {
  if (!cookieHeader) {
    return null;
  }
  const parts = cookieHeader.split(';');
  for (const part of parts) {
    const [rawKey, ...rawVal] = part.trim().split('=');
    if (rawKey === name) {
      return decodeURIComponent(rawVal.join('='));
    }
  }
  return null;
}

export function sanitizeSingleLine(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') {
    return '';
  }
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen);
}

export function sanitizeMultiline(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim().slice(0, maxLen);
}

export function isValidEmailAddress(email: string): boolean {
  if (!email || email.length > 160) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) {
    return false;
  }
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return true;
}

export function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
