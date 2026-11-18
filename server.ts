import 'dotenv/config';
import {randomUUID} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import express from 'express';
import type {NextFunction, Request, Response} from 'express';
import {
  closeDatabase,
  getDatabase,
  getTotalVisitors,
  hashVisitorIdentifier,
  recordUniqueVisitor,
  saveLeadRecord,
} from './server/db.ts';
import {
  checkRateLimit,
  getClientIp,
  isBotOrAutomatedRequest,
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
  location?: string;
  subject?: string;
  message?: string;
  description?: string;
  website_url?: string;
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
  // Initialize persistent SQLite database on startup
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

  // Canonical 301 Redirects for legacy / shortcut paths
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

  app.use((req: Request, res: Response, next: NextFunction) => {
    const cleanPath = req.path;
    const redirectTarget = REDIRECT_MAP[cleanPath];
    if (redirectTarget && redirectTarget !== cleanPath) {
      res.redirect(301, redirectTarget);
      return;
    }
    next();
  });

  // Healthcheck endpoint for Hostinger / container readiness (never counted as visitor)
  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({status: 'ok', service: 'klyia-technology'});
  });

  // Dynamic robots.txt
  app.get('/robots.txt', (req: Request, res: Response) => {
    const baseUrl = resolveBaseUrl(getRequestOrigin(req));
    res
      .status(200)
      .type('text/plain; charset=utf-8')
      .send(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  // Primary XML Sitemap Index
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

  // Child Sitemaps
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

  // Public Visitor Counter Read Endpoint (cached cleanly)
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

  // Privacy-Conscious Unique Visitor Tracking Endpoint
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

  // Persistent Lead & Inquiry Capture Handler
  const handleLeadSubmission = (req: Request, res: Response, defaultSource: 'contact' | 'quote') => {
    if (!checkRateLimit(req, res, 'lead-submit', 10, 60_000)) {
      return;
    }

    const body = (req.body ?? {}) as InquiryPayload;

    // Spam honeypot check
    if (typeof body.website_url === 'string' && body.website_url.trim().length > 0) {
      res.status(200).json({ok: true, referenceId: 'KLY-ACCEPTED'});
      return;
    }

    const name = sanitizeSingleLine(body.name, 120);
    const company = sanitizeSingleLine(body.company, 140);
    const email = sanitizeSingleLine(body.email, 160);
    const phone = sanitizeSingleLine(body.phone, 32);
    const city = sanitizeSingleLine(body.city || body.location, 100);
    const service = sanitizeSingleLine(body.service, 120);
    const industry = sanitizeSingleLine(body.industry, 120);
    const subject = sanitizeSingleLine(body.subject, 160);
    const message = sanitizeMultiline(body.message || body.description, 2000);

    const source =
      body.type === 'quote' || body.type === 'contact'
        ? body.type
        : defaultSource;

    if (name.length < 2) {
      res.status(400).json({ok: false, error: 'Please provide your full name.'});
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ok: false, error: 'Please provide a valid email address.'});
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      res.status(400).json({ok: false, error: 'Please provide a valid 10-digit phone number.'});
      return;
    }
    if (message.length < 10) {
      res.status(400).json({ok: false, error: 'Please include brief project or inquiry details.'});
      return;
    }

    try {
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
      });

      console.info(
        `[Lead Saved] ${saved.referenceId} | source=${source} | service=${service || 'general'} | city=${city || 'n/a'}`,
      );

      res.status(201).json({
        ok: true,
        referenceId: saved.referenceId,
        createdAt: saved.createdAt,
      });
    } catch (error) {
      console.error('[Lead Save Error]', error);
      res.status(500).json({
        ok: false,
        error: 'Unable to save your inquiry right now. Please message us on WhatsApp at +91 8296887643.',
      });
    }
  };

  app.post('/api/inquiries', (req: Request, res: Response) => {
    handleLeadSubmission(req, res, 'contact');
  });

  app.post('/api/leads', (req: Request, res: Response) => {
    handleLeadSubmission(req, res, 'quote');
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

  // SSR Catch-All Route Handler
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

  // Production-safe Error Handler
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
