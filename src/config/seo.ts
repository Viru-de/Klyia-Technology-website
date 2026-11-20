import {
  ALL_BLOG_ARTICLES,
  ALL_INDUSTRIES,
  ALL_LOCATIONS,
  ALL_SERVICES,
  getBlogArticleBySlug,
  getIndustryBySlug,
  getLocationBySlug,
  getServiceBySlug,
} from '../data/index.ts';
import type {FaqEntry} from '../data/types.ts';
import {BRAND} from './brand.ts';
import {ROUTES, extractRouteSlug, normalizePathname} from './routes.ts';

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export interface PageSeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: 'website' | 'article';
  robots?: string;
  heroImage?: string;
  breadcrumbs: BreadcrumbEntry[];
  faqs?: FaqEntry[];
  serviceSchema?: {
    name: string;
    description: string;
    category: string;
  };
  articleSchema?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
  };
}

export const HERO_OG_IMAGE_PATH = '/src/assets/images/hero_obsidian_tech_1795006489528.jpg';

export const HOME_VISIBLE_FAQS: FaqEntry[] = [
  {
    question: 'What core services does Klyia Technology provide?',
    answer:
      'Klyia Technology provides Solar ERP and Solar EPC software, custom software development, modular Industrial ERP & CRM systems, website development, Local SEO, GEO (Generative Engine Optimization), AEO, Structured Data implementation, conversion tracking, WhatsApp Business automation, and AI integration.',
  },
  {
    question: 'Where is Klyia Technology located and which cities do you serve?',
    answer:
      'Our physical office is at First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh, India. We conduct direct on-site consultations across Bhilai, Durg, and Raipur, serve Bilaspur, Korba, Raigarh, and all of Chhattisgarh, and deliver remotely across India.',
  },
  {
    question: 'Do you build Solar ERP and custom software for Solar EPC and steel companies?',
    answer:
      'Yes. Solar EPC workflows (rooftop surveys, BOM serial tracking, DISCOM/subsidy logs, AMC schedules) and Steel & Iron ERP (dual MT/bundle units, rolling yield, weighbridge dispatch, dealer portals) are two of our core specializations.',
  },
  {
    question: 'How do SEO, Local SEO, GEO, and Structured Data work together?',
    answer:
      'Technical SEO and Structured Data (Schema.org JSON-LD) help search engines crawl and understand your business, Local SEO strengthens visibility across Bhilai and regional map searches, and GEO structures clear company facts so AI search tools recognize your services accurately.',
  },
  {
    question: 'Do your websites and ERPs include analytics and operational tracking?',
    answer:
      'Yes. Our web platforms support Google Search Console and GA4 conversion tracking alongside privacy-safe visitor tracking, while our ERP systems provide live inventory, dispatch, project milestone, and enquiry status tracking.',
  },
  {
    question: 'How does pricing work for custom websites, Solar ERP, or business software?',
    answer:
      'Because a corporate website, a Solar ERP system, and a multi-godown industrial ERP differ substantially, we scope exact workflows, modules, and integrations transparently before quoting—without deceptive one-price claims.',
  },
];

const ROUTE_SEO_MAP: Record<string, PageSeoMetadata> = {
  [ROUTES.HOME]: {
    title: 'Klyia Technology | Software & ERP Company in Bhilai',
    description:
      'Klyia Technology provides Solar ERP, Solar EPC software, custom ERP, website development, Local SEO and GEO solutions in Bhilai, Chhattisgarh and across India.',
    canonicalPath: ROUTES.HOME,
    ogType: 'website',
    breadcrumbs: [{name: 'Home', path: ROUTES.HOME}],
    faqs: HOME_VISIBLE_FAQS,
  },
  [ROUTES.ABOUT]: {
    title: 'About Klyia Technology | Bhilai, Chhattisgarh, India',
    description:
      'Klyia Technology in Risali, Bhilai builds custom software, Solar ERP, Industrial ERP, fast websites, Local SEO, GEO, and structured data systems across India.',
    canonicalPath: ROUTES.ABOUT,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'About Us', path: ROUTES.ABOUT},
    ],
  },
  [ROUTES.SERVICES]: {
    title: 'IT Services, Software & Solar ERP | Klyia Technology',
    description: `Explore ${ALL_SERVICES.length} specialized technology & growth services across Website Development, Custom Software, Solar ERP, Local SEO, GEO, AEO, AI Automation, and Cloud Support.`,
    canonicalPath: ROUTES.SERVICES,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Services', path: ROUTES.SERVICES},
    ],
  },
  [ROUTES.INDUSTRIES]: {
    title: 'Industry Software & ERP Solutions | Klyia Technology',
    description: `Dedicated ERP, CRM, website & growth systems across ${ALL_INDUSTRIES.length} industries: Steel & Iron, Solar EPC, Manufacturing, Wholesale, Mandis & Healthcare.`,
    canonicalPath: ROUTES.INDUSTRIES,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Industries', path: ROUTES.INDUSTRIES},
    ],
  },
  [ROUTES.LOCATIONS]: {
    title: 'Locations | Bhilai, Durg, Raipur & India | Klyia Technology',
    description:
      'Based in Risali, Bhilai, Klyia Technology provides on-site consulting in Bhilai, Durg & Raipur and software, Solar ERP & SEO delivery across India.',
    canonicalPath: ROUTES.LOCATIONS,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Locations', path: ROUTES.LOCATIONS},
    ],
  },
  [ROUTES.OUR_WORK]: {
    title: 'Our Work | ERP, Web & AI Architectures | Klyia Technology',
    description:
      'Explore Klyia Technology system architectures across Industrial Steel ERP, Solar EPC platforms, Custom Web Applications, and WhatsApp/AI automation.',
    canonicalPath: ROUTES.OUR_WORK,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Our Work', path: ROUTES.OUR_WORK},
    ],
  },
  [ROUTES.INSIGHTS]: {
    title: 'Knowledge Centre | ERP & SEO Guides | Klyia Technology',
    description: `Read ${ALL_BLOG_ARTICLES.length} practical engineering and digital growth articles on website cost in India, Steel & Solar ERP, SEO vs GEO vs AEO, GBP, and WhatsApp automation.`,
    canonicalPath: ROUTES.INSIGHTS,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Knowledge Centre', path: ROUTES.INSIGHTS},
    ],
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Klyia Technology | Bhilai Office & Support',
    description:
      'Reach Klyia Technology at First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai. Call/WhatsApp +91 82968 87643 or email klyiatechnology@gmail.com.',
    canonicalPath: ROUTES.CONTACT,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Contact Us', path: ROUTES.CONTACT},
    ],
  },
  [ROUTES.GET_A_QUOTE]: {
    title: 'Get a Quote | Software, Solar ERP & SEO | Klyia Technology',
    description:
      'Share your service scope, industry workflows, and timelines for an honest engineering consultation from Klyia Technology in Bhilai, Chhattisgarh.',
    canonicalPath: ROUTES.GET_A_QUOTE,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Get a Quote', path: ROUTES.GET_A_QUOTE},
    ],
  },
  [ROUTES.PRIVACY_POLICY]: {
    title: 'Privacy Policy | Klyia Technology',
    description:
      'Understand how Klyia Technology collects, protects, and handles inquiry submissions and privacy-safe visitor statistics.',
    canonicalPath: ROUTES.PRIVACY_POLICY,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Privacy Policy', path: ROUTES.PRIVACY_POLICY},
    ],
  },
  [ROUTES.TERMS]: {
    title: 'Terms and Conditions | Klyia Technology',
    description:
      'Review the Terms and Conditions governing consultations, service scopes, and usage of the Klyia Technology corporate website.',
    canonicalPath: ROUTES.TERMS,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Terms and Conditions', path: ROUTES.TERMS},
    ],
  },
  [ROUTES.SITEMAP]: {
    title: 'HTML Website Sitemap | Klyia Technology',
    description:
      'Complete directory of every public page across Klyia Technology: all core sections, services, industries, Chhattisgarh/India locations, and knowledge articles.',
    canonicalPath: ROUTES.SITEMAP,
    ogType: 'website',
    breadcrumbs: [
      {name: 'Home', path: ROUTES.HOME},
      {name: 'Sitemap', path: ROUTES.SITEMAP},
    ],
  },
};

export const NOT_FOUND_SEO: PageSeoMetadata = {
  title: 'Page Not Found (404) | Klyia Technology',
  description:
    'The requested URL could not be found on Klyia Technology. Browse our services, industries, locations, or contact our Bhilai office.',
  canonicalPath: ROUTES.HOME,
  ogType: 'website',
  robots: 'noindex, follow',
  breadcrumbs: [
    {name: 'Home', path: ROUTES.HOME},
    {name: 'Page Not Found', path: ROUTES.HOME},
  ],
};

export function resolvePageSeo(pathname: string): {seo: PageSeoMetadata; isNotFound: boolean} {
  const normalized = normalizePathname(pathname);

  const coreMatched = ROUTE_SEO_MAP[normalized];
  if (coreMatched) {
    return {seo: coreMatched, isNotFound: false};
  }

  const serviceSlug = extractRouteSlug(normalized, ROUTES.SERVICES);
  if (serviceSlug) {
    const service = getServiceBySlug(serviceSlug);
    if (service) {
      return {
        isNotFound: false,
        seo: {
          title: service.seoTitle,
          description: service.metaDescription,
          canonicalPath: service.canonicalPath,
          ogType: 'website',
          robots: service.indexable === false ? 'noindex, follow' : 'index, follow',
          heroImage: service.heroImage,
          breadcrumbs: [
            {name: 'Home', path: ROUTES.HOME},
            {name: 'Services', path: ROUTES.SERVICES},
            {name: service.name, path: service.canonicalPath},
          ],
          faqs: service.faqs,
          serviceSchema: {
            name: service.name,
            description: service.metaDescription,
            category: service.categoryLabel,
          },
        },
      };
    }
  }

  const industrySlug = extractRouteSlug(normalized, ROUTES.INDUSTRIES);
  if (industrySlug) {
    const industry = getIndustryBySlug(industrySlug);
    if (industry) {
      return {
        isNotFound: false,
        seo: {
          title: industry.seoTitle,
          description: industry.metaDescription,
          canonicalPath: industry.canonicalPath,
          ogType: 'website',
          robots: industry.indexable === false ? 'noindex, follow' : 'index, follow',
          heroImage: industry.heroImage,
          breadcrumbs: [
            {name: 'Home', path: ROUTES.HOME},
            {name: 'Industries', path: ROUTES.INDUSTRIES},
            {name: industry.name, path: industry.canonicalPath},
          ],
          faqs: industry.faqs,
          serviceSchema: {
            name: `Digital & Software Solutions for ${industry.name}`,
            description: industry.metaDescription,
            category: `${industry.name} Technology Solutions`,
          },
        },
      };
    }
  }

  const locationSlug = extractRouteSlug(normalized, ROUTES.LOCATIONS);
  if (locationSlug) {
    const location = getLocationBySlug(locationSlug);
    if (location) {
      return {
        isNotFound: false,
        seo: {
          title: location.seoTitle,
          description: location.metaDescription,
          canonicalPath: location.canonicalPath,
          ogType: 'website',
          robots: location.indexable === false ? 'noindex, follow' : 'index, follow',
          heroImage: location.heroImage,
          breadcrumbs: [
            {name: 'Home', path: ROUTES.HOME},
            {name: 'Locations', path: ROUTES.LOCATIONS},
            {name: `${location.serviceFocus} in ${location.city}`, path: location.canonicalPath},
          ],
          faqs: location.faqs,
          serviceSchema: {
            name: `${location.serviceFocus} in ${location.city}`,
            description: location.metaDescription,
            category: location.serviceFocus,
          },
        },
      };
    }
  }

  const blogSlug = extractRouteSlug(normalized, ROUTES.INSIGHTS);
  if (blogSlug) {
    const article = getBlogArticleBySlug(blogSlug);
    if (article) {
      return {
        isNotFound: false,
        seo: {
          title: article.seoTitle,
          description: article.metaDescription,
          canonicalPath: article.canonicalPath,
          ogType: 'article',
          robots: article.indexable === false ? 'noindex, follow' : 'index, follow',
          heroImage: article.heroImage,
          breadcrumbs: [
            {name: 'Home', path: ROUTES.HOME},
            {name: 'Knowledge Centre', path: ROUTES.INSIGHTS},
            {name: article.title, path: article.canonicalPath},
          ],
          faqs: article.faqs,
          articleSchema: {
            headline: article.h1,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            authorName: article.authorName,
          },
        },
      };
    }
  }

  return {seo: NOT_FOUND_SEO, isNotFound: true};
}

export function resolveBaseUrl(_requestOrigin?: string): string {
  const configuredSiteUrl =
    typeof process !== 'undefined' && process.env ? process.env.SITE_URL : undefined;

  const rawBase =
    configuredSiteUrl &&
    configuredSiteUrl !== 'MY_APP_URL' &&
    configuredSiteUrl.trim().length > 0
      ? configuredSiteUrl.trim()
      : BRAND.domain;

  return rawBase
    .replace(/^http:\/\/(www\.)?klyiatechnology\.com/i, BRAND.domain)
    .replace(/^https:\/\/www\.klyiatechnology\.com/i, BRAND.domain)
    .replace(/\/+$/, '');
}

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function readRealEnvValue(key: string): string | null {
  if (typeof process === 'undefined' || !process.env) {
    return null;
  }
  const value = (process.env[key] || '').trim();
  if (
    !value ||
    value.startsWith('MY_') ||
    value.includes('XXXX') ||
    value.startsWith('replace-with')
  ) {
    return null;
  }
  return value;
}

export function buildStructuredDataJson(seo: PageSeoMetadata, baseUrl: string): string {
  const canonicalUrl = `${baseUrl}${seo.canonicalPath}`;

  const organizationSchema = {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${baseUrl}/#organization`,
    name: BRAND.name,
    url: baseUrl,
    image: `${baseUrl}${HERO_OG_IMAGE_PATH}`,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/favicon.svg`,
    },
    email: BRAND.email,
    telephone: BRAND.phoneDisplay,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phoneDisplay,
      email: BRAND.email,
      contactType: 'customer service',
      areaServed: 'IN',
    },
    description: BRAND.footerSummary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'First Floor, Bajrang Hardware, Krishna Talkies Road, Risali',
      addressLocality: 'Bhilai',
      addressRegion: 'Chhattisgarh',
      addressCountry: 'IN',
    },
    hasMap: BRAND.googleMapsUrl,
    areaServed: ['Bhilai', 'Durg', 'Raipur', 'Chhattisgarh', 'India'],
    sameAs: BRAND.socialProfiles.map((profile) => profile.url),
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: BRAND.name,
    publisher: {'@id': `${baseUrl}/#organization`},
  };

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: {'@id': `${baseUrl}/#website`},
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: seo.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.path}`,
    })),
  };

  const graph: Record<string, unknown>[] = [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    breadcrumbSchema,
  ];

  if (seo.serviceSchema) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: seo.serviceSchema.name,
      description: seo.serviceSchema.description,
      serviceType: seo.serviceSchema.category,
      provider: {'@id': `${baseUrl}/#organization`},
      areaServed: ['Bhilai', 'Durg', 'Raipur', 'Chhattisgarh', 'India'],
      url: canonicalUrl,
    });
  }

  if (seo.articleSchema) {
    graph.push({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: seo.articleSchema.headline,
      description: seo.description,
      image: [`${baseUrl}${seo.heroImage || HERO_OG_IMAGE_PATH}`],
      datePublished: seo.articleSchema.datePublished,
      dateModified: seo.articleSchema.dateModified,
      author: {
        '@type': 'Organization',
        name: seo.articleSchema.authorName,
        url: baseUrl,
      },
      publisher: {'@id': `${baseUrl}/#organization`},
      mainEntityOfPage: canonicalUrl,
    });
  }

  if (seo.faqs && seo.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: seo.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

export function renderServerHeadTags(seo: PageSeoMetadata, baseUrl: string): string {
  const canonicalUrl = `${baseUrl}${seo.canonicalPath}`;
  const ogImageUrl = `${baseUrl}${seo.heroImage || HERO_OG_IMAGE_PATH}`;
  const robotsContent = seo.robots ?? 'index, follow';
  const jsonLd = buildStructuredDataJson(seo, baseUrl).replace(/</g, '\\u003c');

  const tags: string[] = [
    `<title>${escapeHtmlAttr(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtmlAttr(robotsContent)}" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:type" content="${seo.ogType}" />`,
    `<meta property="og:site_name" content="${escapeHtmlAttr(BRAND.name)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(ogImageUrl)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(ogImageUrl)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ];

  const googleVerification = readRealEnvValue('GOOGLE_SITE_VERIFICATION');
  if (googleVerification) {
    tags.push(`<meta name="google-site-verification" content="${escapeHtmlAttr(googleVerification)}" />`);
  }

  const bingVerification = readRealEnvValue('BING_SITE_VERIFICATION');
  if (bingVerification) {
    tags.push(`<meta name="msvalidate.01" content="${escapeHtmlAttr(bingVerification)}" />`);
  }

  const ga4Id = readRealEnvValue('GA4_MEASUREMENT_ID');
  if (ga4Id && /^G-[A-Z0-9]+$/i.test(ga4Id)) {
    const safeGa4 = escapeHtmlAttr(ga4Id);
    tags.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${safeGa4}"></script>`,
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${safeGa4}');</script>`,
    );
  }

  const clarityId = readRealEnvValue('CLARITY_PROJECT_ID');
  if (clarityId && /^[a-z0-9]+$/i.test(clarityId)) {
    const safeClarity = escapeHtmlAttr(clarityId);
    tags.push(
      `<script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${safeClarity}");</script>`,
    );
  }

  return tags.join('\n    ');
}
