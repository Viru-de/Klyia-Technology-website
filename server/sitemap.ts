import {BRAND} from '../src/config/brand.ts';
import {CORE_INDEXABLE_ROUTES, ROUTES, normalizePathname} from '../src/config/routes.ts';
import {resolveBaseUrl, resolvePageSeo} from '../src/config/seo.ts';
import {
  ALL_BLOG_ARTICLES,
  ALL_INDUSTRIES,
  ALL_LOCATIONS,
  ALL_SERVICES,
  ERP_PRODUCTS,
} from '../src/data/index.ts';

export const SITEMAP_MAX_URLS = 50_000;
export const SITEMAP_MAX_BYTES = 45 * 1024 * 1024;

export interface SitemapEntry {
  path: string;
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
  category: 'core' | 'erp' | 'service' | 'industry' | 'location' | 'blog';
}

export interface ExcludedUrlRecord {
  path: string;
  reason: string;
}

export interface SitemapDiscoveryResult {
  baseUrl: string;
  entries: SitemapEntry[];
  excluded: ExcludedUrlRecord[];
}

export const LEGACY_SITEMAP_CHILD_PATHS = [
  '/sitemap-pages.xml',
  '/sitemap-erp.xml',
  '/sitemap-services.xml',
  '/sitemap-industries.xml',
  '/sitemap-locations.xml',
  '/sitemap-blog.xml',
] as const;

export function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function normalizeCanonicalSitemapBaseUrl(requestOrigin?: string): string {
  const resolved = resolveBaseUrl(requestOrigin);
  return resolved
    .replace(/^http:\/\/(www\.)?klyiatechnology\.com/i, BRAND.domain)
    .replace(/^https:\/\/www\.klyiatechnology\.com/i, BRAND.domain)
    .replace(/\/+$/, '');
}

export function normalizeValidLastmod(rawDate?: string): string | undefined {
  if (!rawDate) {
    return undefined;
  }
  const trimmed = rawDate.trim();
  if (!/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(trimmed)) {
    return undefined;
  }
  const parsedMs = Date.parse(trimmed);
  if (!Number.isFinite(parsedMs)) {
    return undefined;
  }
  return trimmed;
}

function isDisallowedPath(normalizedPath: string): string | null {
  if (normalizedPath.startsWith('/api/')) {
    return 'Internal API route';
  }
  if (normalizedPath.startsWith('/admin/')) {
    return 'Private admin route';
  }
  if (normalizedPath.startsWith('/login/')) {
    return 'Authentication/login route';
  }
  if (normalizedPath.startsWith('/search/')) {
    return 'Internal search results route';
  }
  if (normalizedPath.startsWith('/assets/') || normalizedPath.startsWith('/src/')) {
    return 'Static asset directory';
  }
  return null;
}

interface CandidateRouteInput {
  rawPath: string;
  category: SitemapEntry['category'];
  priority: string;
  changefreq: SitemapEntry['changefreq'];
  lastmod?: string;
  indexable?: boolean;
  published?: boolean;
  status?: string;
}

export function discoverSitemapEntries(options?: {
  requestOrigin?: string;
  redirectMap?: Record<string, string>;
}): SitemapDiscoveryResult {
  const baseUrl = normalizeCanonicalSitemapBaseUrl(options?.requestOrigin);
  const redirectMap = options?.redirectMap ?? {};

  const candidates: CandidateRouteInput[] = [];

  for (const routePath of CORE_INDEXABLE_ROUTES) {
    let priority = '0.8';
    let changefreq: SitemapEntry['changefreq'] = 'monthly';
    if (routePath === ROUTES.HOME) {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (routePath === ROUTES.ERP_HUB) {
      priority = '0.95';
      changefreq = 'weekly';
    } else if (routePath === ROUTES.SERVICES || routePath === ROUTES.INDUSTRIES) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (routePath === ROUTES.INSIGHTS || routePath === ROUTES.LOCATIONS) {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (
      routePath === ROUTES.PRIVACY_POLICY ||
      routePath === ROUTES.TERMS ||
      routePath === ROUTES.SITEMAP
    ) {
      priority = '0.4';
      changefreq = 'yearly';
    }

    candidates.push({
      rawPath: routePath,
      category: routePath === ROUTES.ERP_HUB ? 'erp' : 'core',
      priority,
      changefreq,
    });
  }

  for (const erp of ERP_PRODUCTS) {
    const meta = erp as unknown as {published?: boolean; status?: string};
    candidates.push({
      rawPath: erp.canonicalPath,
      category: 'erp',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: erp.updatedAt,
      indexable: erp.indexable,
      published: meta.published,
      status: meta.status,
    });
  }

  for (const service of ALL_SERVICES) {
    const meta = service as unknown as {published?: boolean; status?: string};
    candidates.push({
      rawPath: service.canonicalPath,
      category: 'service',
      priority: '0.85',
      changefreq: 'monthly',
      lastmod: service.updatedAt,
      indexable: service.indexable,
      published: meta.published,
      status: meta.status,
    });
  }

  for (const industry of ALL_INDUSTRIES) {
    const meta = industry as unknown as {published?: boolean; status?: string};
    candidates.push({
      rawPath: industry.canonicalPath,
      category: 'industry',
      priority: industry.priorityBadge ? '0.9' : '0.8',
      changefreq: 'monthly',
      lastmod: industry.updatedAt,
      indexable: industry.indexable,
      published: meta.published,
      status: meta.status,
    });
  }

  for (const location of ALL_LOCATIONS) {
    const meta = location as unknown as {published?: boolean; status?: string};
    candidates.push({
      rawPath: location.canonicalPath,
      category: 'location',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: location.updatedAt,
      indexable: location.indexable,
      published: meta.published,
      status: meta.status,
    });
  }

  for (const article of ALL_BLOG_ARTICLES) {
    const meta = article as unknown as {published?: boolean; status?: string};
    candidates.push({
      rawPath: article.canonicalPath,
      category: 'blog',
      priority: '0.75',
      changefreq: 'monthly',
      lastmod: article.updatedAt || article.publishedAt,
      indexable: article.indexable,
      published: meta.published,
      status: meta.status,
    });
  }

  const dedupedByPath = new Map<string, SitemapEntry>();
  const excluded: ExcludedUrlRecord[] = [];

  for (const candidate of candidates) {
    if (candidate.rawPath.includes('?') || candidate.rawPath.includes('#')) {
      excluded.push({path: candidate.rawPath, reason: 'Contains query parameters or hash fragment'});
      continue;
    }

    const normalizedPath = normalizePathname(candidate.rawPath);

    const disallowedReason = isDisallowedPath(normalizedPath);
    if (disallowedReason) {
      excluded.push({path: normalizedPath, reason: disallowedReason});
      continue;
    }

    const redirectTarget = redirectMap[normalizedPath] || redirectMap[candidate.rawPath];
    if (redirectTarget && normalizePathname(redirectTarget) !== normalizedPath) {
      excluded.push({
        path: normalizedPath,
        reason: `Redirects to ${normalizePathname(redirectTarget)}`,
      });
      continue;
    }

    if (candidate.published === false || candidate.status === 'draft' || candidate.status === 'unpublished') {
      excluded.push({path: normalizedPath, reason: 'Unpublished or draft content'});
      continue;
    }

    if (candidate.indexable === false) {
      excluded.push({path: normalizedPath, reason: 'Marked non-indexable in content config'});
      continue;
    }

    const {seo, isNotFound} = resolvePageSeo(normalizedPath);
    if (isNotFound) {
      excluded.push({path: normalizedPath, reason: 'Resolves to 404 Not Found'});
      continue;
    }

    if ((seo.robots || '').toLowerCase().includes('noindex')) {
      excluded.push({path: normalizedPath, reason: `Robots meta directive is "${seo.robots}"`});
      continue;
    }

    const seoCanonical = normalizePathname(seo.canonicalPath);
    if (seoCanonical !== normalizedPath) {
      excluded.push({
        path: normalizedPath,
        reason: `Non-canonical path (canonical points to ${seoCanonical})`,
      });
      continue;
    }

    if (dedupedByPath.has(normalizedPath)) {
      excluded.push({path: normalizedPath, reason: 'Duplicate URL deduplicated'});
      continue;
    }

    const loc = `${baseUrl}${seoCanonical}`;
    const validLastmod = normalizeValidLastmod(candidate.lastmod);

    dedupedByPath.set(normalizedPath, {
      path: seoCanonical,
      loc,
      ...(validLastmod ? {lastmod: validLastmod} : {}),
      changefreq: candidate.changefreq,
      priority: candidate.priority,
      category: candidate.category,
    });
  }

  return {
    baseUrl,
    entries: Array.from(dedupedByPath.values()),
    excluded,
  };
}

export function renderUrlSetXml(entries: SitemapEntry[]): string {
  const rows = entries
    .map((entry) => {
      const tags = [`    <loc>${escapeXml(entry.loc)}</loc>`];
      if (entry.lastmod) {
        tags.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`);
      }
      if (entry.changefreq) {
        tags.push(`    <changefreq>${escapeXml(entry.changefreq)}</changefreq>`);
      }
      if (entry.priority) {
        tags.push(`    <priority>${escapeXml(entry.priority)}</priority>`);
      }
      return `  <url>\n${tags.join('\n')}\n  </url>`;
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    rows,
    '</urlset>',
  ].join('\n');
}

export function chunkSitemapEntries(entries: SitemapEntry[]): SitemapEntry[][] {
  if (entries.length === 0) {
    return [[]];
  }

  const singleXml = renderUrlSetXml(entries);
  if (entries.length <= SITEMAP_MAX_URLS && Buffer.byteLength(singleXml, 'utf8') <= SITEMAP_MAX_BYTES) {
    return [entries];
  }

  const chunks: SitemapEntry[][] = [];
  let current: SitemapEntry[] = [];

  for (const entry of entries) {
    if (current.length >= SITEMAP_MAX_URLS) {
      chunks.push(current);
      current = [];
    }
    current.push(entry);
    if (current.length % 500 === 0 && Buffer.byteLength(renderUrlSetXml(current), 'utf8') > SITEMAP_MAX_BYTES) {
      const overflow = current.pop()!;
      chunks.push(current);
      current = [overflow];
    }
  }

  if (current.length > 0) {
    chunks.push(current);
  }

  return chunks;
}

export function renderSitemapIndexXml(baseUrl: string, chunks: SitemapEntry[][]): string {
  const rows = chunks
    .map((chunk, index) => {
      const dates = chunk
        .map((entry) => entry.lastmod)
        .filter((d): d is string => Boolean(d))
        .sort();
      const latestLastmod = dates.length > 0 ? dates[dates.length - 1] : undefined;
      const tags = [`    <loc>${escapeXml(`${baseUrl}/sitemap-${index + 1}.xml`)}</loc>`];
      if (latestLastmod) {
        tags.push(`    <lastmod>${escapeXml(latestLastmod)}</lastmod>`);
      }
      return `  <sitemap>\n${tags.join('\n')}\n  </sitemap>`;
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    rows,
    '</sitemapindex>',
  ].join('\n');
}

export function buildPrimarySitemapXml(options?: {
  requestOrigin?: string;
  redirectMap?: Record<string, string>;
}): {
  isIndex: boolean;
  xml: string;
  chunks: SitemapEntry[][];
  discovery: SitemapDiscoveryResult;
} {
  const discovery = discoverSitemapEntries(options);
  const chunks = chunkSitemapEntries(discovery.entries);
  const isIndex = chunks.length > 1;
  const xml = isIndex
    ? renderSitemapIndexXml(discovery.baseUrl, chunks)
    : renderUrlSetXml(chunks[0] ?? []);

  return {
    isIndex,
    xml,
    chunks,
    discovery,
  };
}
