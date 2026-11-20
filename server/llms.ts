import {BRAND} from '../src/config/brand.ts';
import {ROUTES} from '../src/config/routes.ts';
import {
  ALL_BLOG_ARTICLES,
  ALL_INDUSTRIES,
  ALL_LOCATIONS,
  ALL_SERVICES,
  ERP_PRODUCTS,
  SERVICE_CATEGORIES,
} from '../src/data/index.ts';

function normalizeBase(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

export function buildLlmsTxt(baseUrl: string): string {
  const origin = normalizeBase(baseUrl);

  const lines: string[] = [
    `# ${BRAND.name}`,
    '',
    `> ${BRAND.name} is an engineering-led software development, ERP, website development, Local SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and business automation company headquartered in Risali, Bhilai, Chhattisgarh, India.`,
    '',
    '## Company Overview & Verified Contact',
    `- Legal / Brand Name: ${BRAND.name}`,
    `- Official Website: ${origin}/`,
    `- Physical Office: ${BRAND.address.full}`,
    `- Phone / WhatsApp: ${BRAND.phoneDisplay}`,
    `- Email: ${BRAND.email}`,
    '- Direct On-Site Service Area: Bhilai, Durg, and Raipur (Chhattisgarh)',
    '- Regional & Pan-India Coverage: Bilaspur, Korba, Raigarh, Rajnandgaon, Chhattisgarh, and remote engineering delivery across India',
    `- Official Social Profiles: ${BRAND.socialProfiles.map((p) => `${p.label} (${p.url})`).join(', ')}`,
    '',
    '## Primary Navigation Pages',
    `- [Home](${origin}${ROUTES.HOME}): Overview of custom software, Solar ERP, Industrial ERP, website development, Local SEO, GEO, and AEO solutions.`,
    `- [About Klyia Technology](${origin}${ROUTES.ABOUT}): Company background, Risali Bhilai office, engineering methodology, and core principles.`,
    `- [Custom ERP Software Development](${origin}${ROUTES.ERP_HUB}): Custom ERP architecture, 11 industry-specific ERP systems, 16 modular ERP blocks, workflow process, and consultation.`,
    `- [All Technology & Digital Growth Services](${origin}${ROUTES.SERVICES}): Complete catalog across 6 service pillars (${ALL_SERVICES.length} dedicated services).`,
    `- [Industries Served](${origin}${ROUTES.INDUSTRIES}): Sector-specific ERP, CRM, website, and growth solutions across ${ALL_INDUSTRIES.length} industries.`,
    `- [Locations Served](${origin}${ROUTES.LOCATIONS}): Regional delivery pages across Bhilai, Durg, Raipur, Chhattisgarh, and India.`,
    `- [Our Work & Architecture Blueprints](${origin}${ROUTES.OUR_WORK}): Technical system patterns across Industrial Steel ERP, Solar EPC platforms, web apps, and automation.`,
    `- [Knowledge Centre & Engineering Guides](${origin}${ROUTES.INSIGHTS}): Practical articles on ERP software, Solar EPC workflows, website development, SEO, GEO, AEO, and WhatsApp automation.`,
    `- [Contact Klyia Technology](${origin}${ROUTES.CONTACT}): Direct Bhilai office address, Google Maps link, phone, WhatsApp, and enquiry form.`,
    `- [Get a Project Quote](${origin}${ROUTES.GET_A_QUOTE}): Requirement scoping form for custom software, Solar ERP, websites, and digital growth.`,
    '',
    '## Priority & Flagship Capabilities',
    `- [Solar ERP Software](${origin}/services/solar-erp-software/): End-to-end Solar EPC management for rooftop & C&I leads, site surveys, BOM serials, DISCOM/subsidy tracking, and AMC schedules.`,
    `- [Custom Software Development](${origin}/services/custom-software-development/): Tailored business software built around exact pricing rules, approvals, GST billing, and operational tracking.`,
    `- [ERP Software Development](${origin}/services/erp-software-development/): Modular procurement, multi-godown inventory, production yield, dispatch, and billing ERP systems.`,
    `- [Website Development Services](${origin}/services/website-development-services/): Server-rendered React & TypeScript websites with technical SEO, Structured Data, and fast mobile Core Web Vitals.`,
    `- [Local SEO Services](${origin}/services/local-seo-services/): Authentic NAP consistency, regional search visibility, and Google Business Profile optimization across Bhilai, Durg, Raipur, and India.`,
    `- [GEO — Generative Engine Optimization](${origin}/services/geo-generative-engine-optimization/): Clear factual brand entities, crawlable SSR HTML, and Schema.org Structured Data for generative AI search clarity.`,
    `- [AEO — Answer Engine Optimization](${origin}/services/aeo-answer-engine-optimization/): Question-led headings, direct factual explanations, and visible FAQ sections backed by valid Schema markup.`,
    `- [Search Engine Optimization (SEO)](${origin}/services/search-engine-optimization/): Ethical technical and on-page search engineering with Search Console and GA4 conversion tracking.`,
    `- [WhatsApp Business Automation](${origin}/services/whatsapp-business-automation/): Official WhatsApp Business API alerts for enquiry acknowledgement, dispatch updates, and AMC reminders.`,
    `- [Business AI Integration](${origin}/services/business-ai-integration/): Controlled server-side AI workflows for enquiry summarization, document parsing, and human-reviewed automation.`,
    '',
    '## Industry-Specific ERP Systems',
    ...ERP_PRODUCTS.map(
      (erp) => `- [${erp.name}](${origin}${erp.canonicalPath}): ${erp.heroSubtitle}`,
    ),
    '',
    '## Priority Industries',
    ...ALL_INDUSTRIES.map(
      (ind) => `- [${ind.name}](${origin}${ind.canonicalPath}): ${ind.heroSubtitle}`,
    ),
    '',
    '## Service Locations',
    ...ALL_LOCATIONS.map(
      (loc) =>
        `- [${loc.serviceFocus} in ${loc.city}](${origin}${loc.canonicalPath}): ${loc.heroSubtitle}`,
    ),
    '',
    '## Full Documentation & Sitemaps',
    `- [Complete Service & Article Index (llms-full.txt)](${origin}/llms-full.txt): Extended reference covering all ${ALL_SERVICES.length} services, ${ALL_INDUSTRIES.length} industries, ${ALL_LOCATIONS.length} location guides, and ${ALL_BLOG_ARTICLES.length} knowledge articles.`,
    `- [XML Sitemap Index](${origin}/sitemap.xml): Machine-readable XML sitemap index.`,
    `- [HTML Sitemap](${origin}${ROUTES.SITEMAP}): Human-readable directory of all public URLs.`,
    '',
  ];

  return lines.join('\n');
}

export function buildLlmsFullTxt(baseUrl: string): string {
  const origin = normalizeBase(baseUrl);

  const lines: string[] = [
    `# ${BRAND.name} — Complete Public Site & Service Reference`,
    '',
    `> Verified factual directory for ${BRAND.name} (${origin}/). Headquartered at ${BRAND.address.full}.`,
    '',
    '## Business Identity',
    `- Name: ${BRAND.name}`,
    `- Domain: ${origin}/`,
    `- Headquarters: ${BRAND.address.full}`,
    `- Phone / WhatsApp: ${BRAND.phoneDisplay}`,
    `- Email: ${BRAND.email}`,
    `- Google Maps: ${BRAND.googleMapsUrl}`,
    `- Social Profiles: ${BRAND.socialProfiles.map((p) => p.url).join(' | ')}`,
    '',
    '## Core Routes',
    `- ${origin}${ROUTES.HOME} — Homepage`,
    `- ${origin}${ROUTES.ABOUT} — About Us`,
    `- ${origin}${ROUTES.SERVICES} — Services Hub`,
    `- ${origin}${ROUTES.INDUSTRIES} — Industries Hub`,
    `- ${origin}${ROUTES.LOCATIONS} — Locations Hub`,
    `- ${origin}${ROUTES.OUR_WORK} — Architecture Blueprints`,
    `- ${origin}${ROUTES.INSIGHTS} — Knowledge Centre / Blog`,
    `- ${origin}${ROUTES.CONTACT} — Contact Us`,
    `- ${origin}${ROUTES.GET_A_QUOTE} — Get a Quote`,
    `- ${origin}${ROUTES.PRIVACY_POLICY} — Privacy Policy`,
    `- ${origin}${ROUTES.TERMS} — Terms and Conditions`,
    `- ${origin}${ROUTES.SITEMAP} — HTML Sitemap`,
    '',
  ];

  for (const category of SERVICE_CATEGORIES) {
    const servicesInCat = ALL_SERVICES.filter(
      (srv) => srv.categoryId === category.id && srv.indexable !== false,
    );
    lines.push(`## Service Pillar: ${category.title}`);
    lines.push(category.summary);
    lines.push('');
    for (const srv of servicesInCat) {
      lines.push(`- [${srv.name}](${origin}${srv.canonicalPath}): ${srv.metaDescription}`);
    }
    lines.push('');
  }

  lines.push('## Industry-Specific ERP Software Solutions');
  lines.push('');
  for (const erp of ERP_PRODUCTS.filter((item) => item.indexable !== false)) {
    lines.push(`- [${erp.name}](${origin}${erp.canonicalPath}): ${erp.metaDescription}`);
  }
  lines.push('');

  lines.push('## Industry Solutions');
  lines.push('');
  for (const ind of ALL_INDUSTRIES.filter((item) => item.indexable !== false)) {
    lines.push(`- [${ind.name}](${origin}${ind.canonicalPath}): ${ind.metaDescription}`);
  }
  lines.push('');

  lines.push('## Regional Service Guides');
  lines.push('');
  for (const loc of ALL_LOCATIONS.filter((item) => item.indexable !== false)) {
    lines.push(`- [${loc.h1}](${origin}${loc.canonicalPath}): ${loc.metaDescription}`);
  }
  lines.push('');

  lines.push('## Knowledge Centre Articles');
  lines.push('');
  for (const post of ALL_BLOG_ARTICLES.filter((item) => item.indexable !== false)) {
    lines.push(`- [${post.title}](${origin}${post.canonicalPath}): ${post.excerpt}`);
  }
  lines.push('');

  return lines.join('\n');
}
