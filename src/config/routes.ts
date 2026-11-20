export const ROUTES = {
  HOME: '/',
  ABOUT: '/about-us/',
  SERVICES: '/services/',
  ERP_HUB: '/erp-software-development/',
  ERP_PRODUCTS: '/erp/',
  INDUSTRIES: '/industries/',
  LOCATIONS: '/locations/',
  OUR_WORK: '/our-work/',
  INSIGHTS: '/blog/',
  CONTACT: '/contact-us/',
  GET_A_QUOTE: '/get-a-quote/',
  PRIVACY_POLICY: '/privacy-policy/',
  TERMS: '/terms-and-conditions/',
  SITEMAP: '/sitemap/',
} as const;

export type AppRoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const CORE_INDEXABLE_ROUTES: AppRoutePath[] = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.SERVICES,
  ROUTES.ERP_HUB,
  ROUTES.INDUSTRIES,
  ROUTES.LOCATIONS,
  ROUTES.OUR_WORK,
  ROUTES.INSIGHTS,
  ROUTES.CONTACT,
  ROUTES.GET_A_QUOTE,
  ROUTES.PRIVACY_POLICY,
  ROUTES.TERMS,
  ROUTES.SITEMAP,
];

export const PUBLIC_INDEXABLE_ROUTES: string[] = [...CORE_INDEXABLE_ROUTES];

export function normalizePathname(rawPath: string): string {
  const withoutHash = rawPath.split('#')[0] ?? '/';
  const withoutQuery = withoutHash.split('?')[0] ?? '/';
  if (!withoutQuery || withoutQuery === '/') {
    return '/';
  }
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return `${trimmed.startsWith('/') ? '' : '/'}${trimmed}/`;
}

export function extractRouteSlug(pathname: string, prefix: string): string | null {
  const normalized = normalizePathname(pathname);
  if (!normalized.startsWith(prefix) || normalized === prefix) {
    return null;
  }
  const rest = normalized.slice(prefix.length).replace(/\/+$/, '');
  if (!rest || rest.includes('/')) {
    return null;
  }
  return rest;
}
