import {resolveServiceBanner} from '../config/banners.ts';
import type {ServicePageData} from './types.ts';

export interface CompactServiceSeed {
  slug: string;
  name: string;
  categoryId: ServicePageData['categoryId'];
  categoryLabel: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  introFocus: string;
  whyNeeded: string[];
  challenges: string[];
  solutions: string[];
  features: {title: string; detail: string}[];
  benefits: string[];
  technologies: string[];
  industries: {label: string; slug: string; note: string}[];
  relatedServiceSlugs: string[];
  relatedBlogSlugs?: string[];
  faqs: {question: string; answer: string}[];
  complianceNote?: string;
}

export function hydrateServiceSeed(seed: CompactServiceSeed): ServicePageData {
  const banner = resolveServiceBanner(seed.slug, seed.categoryId, seed.name);
  return {
    slug: seed.slug,
    name: seed.name,
    categoryId: seed.categoryId,
    categoryLabel: seed.categoryLabel,
    seoTitle: seed.seoTitle,
    metaDescription: seed.metaDescription,
    h1: seed.name,
    canonicalPath: `/services/${seed.slug}/`,
    indexable: true,
    heroImage: banner.image,
    heroImageAlt: banner.alt,
    updatedAt: '2026-11-18',
    heroSubtitle: seed.heroSubtitle,
    introduction: [
      seed.introFocus,
      `Based in Risali, Bhilai (Chhattisgarh), Klyia Technology partners with manufacturers, industrial suppliers, solar EPC firms, traders, and growing organizations across Bhilai, Durg, Raipur, and India to deliver ${seed.name.toLowerCase()} engineered around real business outcomes.`,
    ],
    whyNeeded: seed.whyNeeded,
    challenges: seed.challenges,
    solutions: seed.solutions,
    features: seed.features,
    benefits: seed.benefits,
    technologies: seed.technologies,
    industriesBenefiting: seed.industries,
    whyChooseKlyia: [
      'Direct engineering consultation grounded in how Indian businesses actually sell, bill, and serve buyers.',
      'Clean TypeScript, crawlable server-rendered HTML, and dependable databases built for long-term maintainability.',
      'Clear scope boundaries without inflated promises, fake metrics, or generic template clutter.',
      'Dedicated technical support from our Bhilai headquarters alongside pan-India remote delivery.',
    ],
    relatedServiceSlugs: seed.relatedServiceSlugs,
    relatedBlogSlugs: seed.relatedBlogSlugs,
    faqs: seed.faqs,
    complianceNote: seed.complianceNote,
  };
}

const WEB_SEEDS: CompactServiceSeed[] = [
  {
    slug: 'website-design-services',
    name: 'Website Design Services',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Website Design Services in Bhilai, Chhattisgarh & India | Klyia Technology',
    metaDescription:
      'Custom corporate UI, mobile-first layout architecture, and conversion-focused website design services by Klyia Technology for Indian businesses.',
    heroSubtitle:
      'Clean, authoritative website design crafted to build immediate buyer confidence across mobile and desktop devices.',
    introFocus:
      'Your website design is often the first commercial evaluation made by B2B buyers and local customers. Effective design organizes complex product lines and trust signals into a fast, legible visual structure that guides visitors naturally toward an enquiry.',
    whyNeeded: [
      'Outdated visual layouts weaken credibility even when a business delivers quality products offline.',
      'Disorganized menus hide core specifications, service areas, and enquiry options.',
      'Inconsistent mobile spacing causes high drop-offs on smartphones across India.',
    ],
    challenges: [
      'Generic theme templates failing to explain industrial or B2B engineering depth.',
      'Heavy stock graphics slowing page load on regional mobile networks.',
      'Missing enquiry prompts on product and capability pages.',
    ],
    solutions: [
      'Brand-aligned visual systems with disciplined typography, contrast, and spacing.',
      'Conversion pathways tailored around B2B RFQs, WhatsApp chat, and phone calls.',
      'Responsive component systems tested across phone, tablet, and widescreen desktops.',
    ],
    features: [
      {title: 'Bespoke Visual Hierarchy', detail: 'Intentional section spacing and clean typography without visual clutter.'},
      {title: 'Mobile-First Layouts', detail: 'Thumb-friendly navigation drawers, legible cards, and crisp buttons.'},
      {title: 'Product & Spec Cards', detail: 'Organized tables and summaries for steel grades, machinery, or service scopes.'},
      {title: 'Enquiry-Driven Flow', detail: 'Clear Request Consultation and WhatsApp options at key decision points.'},
    ],
    benefits: [
      'Projects an established corporate identity suited for commercial procurement.',
      'Helps visitors quickly locate relevant services, industries, and locations.',
      'Creates a clean foundation for high-speed frontend code and technical SEO.',
    ],
    technologies: ['Responsive Tailwind CSS', 'Semantic HTML5', 'WCAG Contrast Tokens', 'React Component Architecture'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Structured steel catalogue and grade presentation.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Machinery and plant capability showcases.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Project galleries and site-visit enquiry flows.'},
    ],
    relatedServiceSlugs: ['website-development-services', 'ui-ux-design', 'responsive-web-design', 'landing-page-design'],
    relatedBlogSlugs: ['how-to-choose-a-website-development-company-in-bhilai'],
    faqs: [
      {question: 'How is custom website design different from using a pre-built template?', answer: 'Custom website design starts with your exact products, buyer questions, and enquiry path rather than forcing content into rigid template blocks.'},
      {question: 'Do you design websites specifically for mobile visitors?', answer: 'Yes. Every layout is designed mobile-first so navigation, spec tables, and enquiry forms work smoothly on smartphones.'},
      {question: 'Can you match our existing logo and brand colours?', answer: 'Yes. We align typography and UI components cleanly around your brand guidelines.'},
      {question: 'Are product catalogue and specification tables included in design?', answer: 'Yes, formatted cleanly for industrial, B2B, and retail browsing.'},
      {question: 'Is SEO layout structure considered during design?', answer: 'Yes. Heading hierarchy, readable copy blocks, and internal links are planned directly during layout design.'},
      {question: 'Can we review page structure before full coding begins?', answer: 'Yes, we review structured page plans and visual components collaboratively.'},
      {question: 'Does design include WhatsApp and quote entry points?', answer: 'Yes, placed naturally without annoying popups.'},
      {question: 'How do we request a website design proposal?', answer: 'Share your company details and goals through Get a Quote or WhatsApp (+91 8296887643).'},
    ],
  },
  {
    slug: 'website-development-services',
    name: 'Website Development Services',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Website Development Services in Bhilai & India | Klyia Technology',
    metaDescription:
      'Fast server-rendered website development in Bhilai, Chhattisgarh and India using TypeScript, clean Structured Data, Local SEO readiness, and enquiry tracking.',
    heroSubtitle:
      'Engineered websites with server-rendered HTML, Structured Data, clean semantic hierarchy, conversion tracking, and reliable database lead capture.',
    introFocus:
      'Website development converts strategy and design into dependable production code that search crawlers index cleanly and customers navigate effortlessly. Klyia Technology builds fast TypeScript & Node.js SSR platforms engineered in Bhilai for long-term commercial reliability.',
    whyNeeded: [
      'Client-side-only scripts often serve blank initial HTML to search bots.',
      'Bloated templates suffer from plugin conflicts, security gaps, and sluggish mobile loading.',
      'Businesses need enquiry forms backed by persistent databases and conversion tracking rather than unreliable mail relays.',
    ],
    challenges: [
      'Undocumented codebases breaking when content or pages grow.',
      'Poor Core Web Vitals driven by unoptimized scripts and oversized images.',
      'Disconnected enquiry forms with no spam controls or analytics tracking.',
    ],
    solutions: [
      'Full-stack React + Express SSR outputting complete, crawlable HTML on every public URL.',
      'Canonical URLs, multi-sitemap XML indexing, Schema.org Structured Data, and GA4/Search Console tracking readiness.',
      'Database-saved enquiry workflows with validation, rate limiting, and WhatsApp handoff.',
    ],
    features: [
      {title: 'Crawlable SSR Output', detail: 'Bots receive full HTML headings, links, copy, and Structured Data immediately.'},
      {title: 'Core Web Vitals Focus', detail: 'Lazy-loaded secondary UI, clean CSS, and lean client hydration.'},
      {title: 'Persistent Lead Tracking', detail: 'Enquiries save safely with confirmation reference IDs and analytics hooks.'},
      {title: 'Deployment & SSL Readiness', detail: 'Ready for Node.js hosting, HTTPS proxies, and clean redirects.'},
    ],
    benefits: [
      'Dependable uptime and snappy navigation across Indian mobile networks.',
      'Built-in technical foundation for SEO, GEO, AEO, and paid search campaigns.',
      'Clean TypeScript architecture ready to integrate future portals or ERPs.',
    ],
    technologies: ['React 19 & TypeScript', 'Node.js & Express SSR', 'SQLite / PostgreSQL', 'Schema.org JSON-LD'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Technical portals and vendor capability hubs.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'EPC portals with subsidy & rooftop enquiry flows.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Department directories and patient booking requests.'},
    ],
    relatedServiceSlugs: ['business-website-development', 'corporate-website-development', 'react-website-development', 'technical-seo'],
    relatedBlogSlugs: ['why-fast-website-speed-matters-for-seo-and-conversions', 'how-to-choose-a-website-development-company-in-bhilai'],
    faqs: [
      {question: 'Why does server-side rendering (SSR) help my website?', answer: 'SSR delivers complete HTML on initial request so Googlebot, Bingbot, and AI engines read every page without client-side rendering delays.'},
      {question: 'Do you assist with domain, hosting, and SSL setup?', answer: 'Yes, including DNS guidance, HTTPS setup, and sitemap submission prep.'},
      {question: 'Can enquiry forms connect with WhatsApp?', answer: 'Yes. Submitted enquiries save safely on the server and provide prefilled WhatsApp handoff.'},
      {question: 'Will our site work well on older mobile phones?', answer: 'Yes, lightweight bundles keep pages responsive across standard smartphones.'},
      {question: 'Can we expand the website with new service or location pages later?', answer: 'Yes, our structured TypeScript content model supports clean expansion.'},
      {question: 'How do you protect forms from spam bots?', answer: 'Using field validation, hidden honeypot fields, and server-side rate limiting.'},
      {question: 'Can you upgrade our old website without losing search URLs?', answer: 'Yes, via careful URL mapping and 301 redirects.'},
      {question: 'How do we start a project?', answer: 'Use Get a Quote or WhatsApp (+91 8296887643) to share your goals.'},
    ],
  },
  {
    slug: 'business-website-development',
    name: 'Business Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Business Website Development for SMEs & Traders | Klyia Technology',
    metaDescription:
      'Practical, lead-focused business website development for SMEs, traders, suppliers, and service companies in Bhilai, Chhattisgarh and India.',
    heroSubtitle:
      'Trustworthy websites built for SMEs, traders, and service providers ready to convert regional and pan-India searches into enquiries.',
    introFocus:
      'Growing SMEs need websites that clearly communicate their products, service areas, and contact channels without bloated subscription fees or unnecessary technical jargon.',
    whyNeeded: [
      'Relying only on social pages or directories limits ownership and B2B trust.',
      'Buyers routinely verify vendor websites in Bhilai, Durg, and Raipur before calling.',
      'A clear domain and website strengthen bank, GST, and enterprise onboarding checks.',
    ],
    challenges: [
      'One-time brochure builds that break when phone numbers or products update.',
      'No local search signals for city or industrial hub discovery.',
      'Buried contact details on smartphones.',
    ],
    solutions: [
      'Clean multipage layout covering Home, About, Products/Services, Industries, and Contact.',
      'Aligned LocalBusiness Schema and accurate Bhilai/regional NAP consistency.',
      'Instant click-to-call, WhatsApp chat, and validated quote forms.',
    ],
    features: [
      {title: 'Dedicated Service Breakdown', detail: 'Clear pages explaining exactly what you supply or deliver.'},
      {title: 'Local Trust Signals', detail: 'Consistent address, phone, and WhatsApp alignment.'},
      {title: 'Lean Mobile Performance', detail: 'Built for quick loading across standard data connections.'},
      {title: 'Lead & WhatsApp Funnel', detail: 'Friction-free enquiry paths suited for Indian SME buyers.'},
    ],
    benefits: [
      'Establishes permanent digital ownership independent of third-party marketplaces.',
      'Makes it effortless for buyers across Chhattisgarh and India to verify your business.',
      'Provides a clean base for SEO or custom portal expansion.',
    ],
    technologies: ['React SSR', 'Structured SEO Metadata', 'WhatsApp Click-to-Chat', 'Express Lead Backend'],
    industries: [
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Product catalogs and quick RFQ inquiries.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Territory coverage and dealer enquiry pages.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Credible advisory overview and appointment booking.'},
    ],
    relatedServiceSlugs: ['website-design-services', 'local-seo-services', 'google-business-profile-optimization', 'whatsapp-business-automation'],
    relatedBlogSlugs: ['website-development-cost-in-india-what-affects-pricing'],
    faqs: [
      {question: 'How many pages should an SME business website include?', answer: 'Typically 6 to 15 focused pages covering Home, About, individual core services/products, industries, and Contact/Quote.'},
      {question: 'Can we start lean and add more pages later?', answer: 'Yes, the content structure expands smoothly as your catalog grows.'},
      {question: 'Is WhatsApp chat included cleanly?', answer: 'Yes, alongside phone and validated web forms.'},
      {question: 'Will our Google Business Profile link cleanly to the site?', answer: 'Yes, with consistent business details and Schema markup.'},
      {question: 'Do you help organize product descriptions?', answer: 'Yes, grounded strictly in verified details provided by your team.'},
      {question: 'Are fake counters or generic stock testimonials added?', answer: 'Never—we keep business profiles strictly factual and transparent.'},
      {question: 'Can we track genuine website visitors cleanly?', answer: 'Yes, via privacy-safe visitor tracking and GA4 readiness.'},
      {question: 'How do we get started?', answer: 'Book a quick scoping call via Contact Us.'},
    ],
  },
  {
    slug: 'corporate-website-development',
    name: 'Corporate Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Corporate Website Development | Enterprise Platforms | Klyia Technology',
    metaDescription:
      'Structured corporate website development with multi-division mega-menus, governance pages, SSR crawlability, and enterprise B2B lead capture.',
    heroSubtitle:
      'Multi-division corporate web architecture presenting capabilities, compliance transparency, and industrial expertise with authority.',
    introFocus:
      'Established groups and industrial enterprises serve procurement teams, partners, dealers, and institutional buyers who expect clean organization, fast SSR crawlability, and structured documentation across every division.',
    whyNeeded: [
      'Multi-division firms outgrow simple brochure pages when expanding product lines and regional reach.',
      'Mega-menus help procurement visitors find exact technical pages in two clicks.',
      'Consistent governance, privacy, and technical authority strengthen enterprise vendor evaluations.',
    ],
    challenges: [
      'Fragmented microsites splitting brand authority and SEO strength.',
      'Heavy corporate templates stalling on mobile networks.',
      'Unclear routing between general enquiries and division quotes.',
    ],
    solutions: [
      'Cohesive multi-tier architecture with Mega Menus, industry hubs, and knowledge libraries.',
      'Organization, LocalBusiness, WebSite, Service, and BreadcrumbList Schema graphs.',
      'Structured enquiry capture with division/service tagging.',
    ],
    features: [
      {title: 'Mega-Menu Navigation', detail: 'Logical categorization across Web, Software, Growth, AI, and Industries.'},
      {title: 'Multi-Sitemap XML Setup', detail: 'Clean XML sitemap index partitioning services, industries, locations, and blog.'},
      {title: 'Governance & Legal Pages', detail: 'Dedicated Privacy Policy, Terms, and HTML Sitemap pages.'},
      {title: 'Accessible Corporate UI', detail: 'Keyboard support, clear contrast, and structured landmarks.'},
    ],
    benefits: [
      'Consolidates divisions under one authoritative corporate domain.',
      'Supports technical SEO, GEO, and AEO clarity across search engines.',
      'Scales smoothly as divisions, blueprints, and insights grow.',
    ],
    technologies: ['React SSR & Express', 'Enterprise Schema Graphs', 'XML Sitemap Index', 'TypeScript Content Hub'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Division showcases, specs, and dealer inquiry flows.'},
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Plant infrastructure, QA, and machinery pages.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Network hubs and contract logistics RFQs.'},
    ],
    relatedServiceSlugs: ['website-development-services', 'technical-seo', 'brand-identity', 'custom-web-application-development'],
    faqs: [
      {question: 'Can a corporate website house separate divisions cleanly?', answer: 'Yes, via dedicated category hubs, industry pages, and service detail routes.'},
      {question: 'Does it include XML sitemap indexes for search engines?', answer: 'Yes—index + child sitemaps cleanly organized by section.'},
      {question: 'Can we publish technical articles and engineering notes?', answer: 'Yes, via an integrated Blog & Knowledge Centre.'},
      {question: 'How is visual consistency maintained across 50+ pages?', answer: 'Shared layout components, reusable templates, and centralized design tokens.'},
      {question: 'Are privacy and legal notices included?', answer: 'Yes.'},
      {question: 'Can old corporate URLs be migrated safely?', answer: 'Yes, using structured 301 redirect rules.'},
      {question: 'Can dealer or employee login portals connect alongside the site?', answer: 'Yes, via custom web application modules.'},
      {question: 'How do we discuss a corporate revamp?', answer: 'Contact our team via Get a Quote.'},
    ],
  },
  {
    slug: 'ecommerce-website-development',
    name: 'E-commerce Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'E-commerce Website Development | B2B & Retail Stores | Klyia Technology',
    metaDescription:
      'Custom B2B and retail e-commerce development featuring catalog filtering, checkout workflows, inventory synchronization, and e-commerce SEO.',
    heroSubtitle:
      'Fast, searchable online stores and B2B dealer ordering portals engineered for stock accuracy and smooth mobile checkout.',
    introFocus:
      'Online commerce succeeds when shoppers find exact SKUs rapidly, see trustworthy specifications, and complete checkout or bulk RFQ steps cleanly on smartphones—backed by reliable warehouse stock counts.',
    whyNeeded: [
      'Direct stores retain margin and direct buyer relationships outside third-party marketplaces.',
      'B2B dealers appreciate online self-service repeat ordering.',
      'Search-indexed product categories attract organic product demand nationwide.',
    ],
    challenges: [
      'Frustrating category filters failing to narrow sizes, specs, or grades.',
      'Overselling out-of-stock SKUs when online stores disconnect from godown software.',
      'Slow checkout screens causing mobile cart abandonment.',
    ],
    solutions: [
      'Clean attribute filtering, crisp variant selectors, and transparent checkout or RFQ flows.',
      'Payment gateway integration and optional ERP/Inventory database sync.',
      'Automated WhatsApp order confirmation notifications.',
    ],
    features: [
      {title: 'Attribute Catalog Filtering', detail: 'Filter rapidly by brand, size, capacity, price band, or grade.'},
      {title: 'Checkout & B2B RFQ Modes', detail: 'Supports direct online checkout as well as dealer credit/quote orders.'},
      {title: 'Stock & Billing Sync', detail: 'Custom API connections to Inventory Management and GST invoicing.'},
      {title: 'E-commerce SEO Markup', detail: 'Clean product URLs, alt text, and structured product data.'},
    ],
    benefits: [
      'Builds direct brand equity and repeat digital orders.',
      'Cuts manual phone clarifications on standard product specifications.',
      'Scales smoothly as catalog size expands.',
    ],
    technologies: ['React & Node.js', 'Payment Gateway APIs', 'SQL Order & Stock DB', 'WhatsApp Order Alerts'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Direct consumer storefronts optimized for smartphone buyers.'},
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Dealer login tiers and bulk carton ordering.'},
      {label: 'Industrial Suppliers & Traders', slug: 'industrial-suppliers-traders', note: 'Technical SKU catalogs with instant RFQ.'},
    ],
    relatedServiceSlugs: ['ecommerce-seo', 'inventory-management-software', 'website-speed-optimization', 'whatsapp-business-automation'],
    faqs: [
      {question: 'Do you build both retail consumer stores and B2B wholesale ordering portals?', answer: 'Yes, tailored cleanly around direct checkout or B2B tiered ordering.'},
      {question: 'Can store stock sync with our warehouse ERP?', answer: 'Yes, custom API bridges keep inventory accurate.'},
      {question: 'Are Indian payment gateways supported?', answer: 'Yes, integrated via official merchant APIs.'},
      {question: 'Can orders trigger WhatsApp confirmation updates?', answer: 'Yes, via WhatsApp Business automation.'},
      {question: 'Are category and product pages SEO-friendly?', answer: 'Yes, featuring clean slugs, canonical controls, and structured metadata.'},
      {question: 'Can GST invoices generate automatically on orders?', answer: 'Yes, GST calculation and PDF invoice workflows can be built cleanly.'},
      {question: 'Is mobile browsing fast?', answer: 'Yes, lazy-loaded assets keep catalog pages responsive.'},
      {question: 'How do we scope an e-commerce project?', answer: 'Share your catalog count and workflow via Get a Quote.'},
    ],
  },
  {
    slug: 'wordpress-website-development',
    name: 'WordPress Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'WordPress Website Development | Lean, Fast & Secure | Klyia Technology',
    metaDescription:
      'Custom WordPress website development with lean themes, speed optimization, security hardening, and clean editorial publishing.',
    heroSubtitle:
      'Lean, clean WordPress websites built without heavy visual-builder bloat so your team edits effortlessly while pages load quickly.',
    introFocus:
      'WordPress serves marketing and editorial teams well when built with clean custom templates and minimal vetted plugins rather than sluggish all-in-one theme bundles.',
    whyNeeded: [
      'Non-technical teams need simple publishing tools for announcements, articles, and brochures.',
      'Bloated pre-bought WordPress themes harm mobile speed and Core Web Vitals.',
      'Neglected plugin updates create site downtime and security risks.',
    ],
    challenges: [
      'Slow admin dashboards and messy visual builders.',
      'Conflicting plugins breaking enquiry forms after updates.',
      'Duplicate category/tag pages cluttering search indexing.',
    ],
    solutions: [
      'Lightweight custom themes aligned strictly to your brand architecture.',
      'Minimal plugin footprint paired with clean caching and image compression.',
      'Hardened role permissions, backup schedules, and SEO hygiene.',
    ],
    features: [
      {title: 'Custom Block Layouts', detail: 'Clean, reusable sections easy for staff to update safely.'},
      {title: 'Lean Plugin Hygiene', detail: 'Only vetted essentials—zero bloated multipurpose builders.'},
      {title: 'Editorial SEO Control', detail: 'Clean titles, meta descriptions, alt fields, and sitemaps.'},
      {title: 'Security & Backup Setup', detail: 'Hardened logins and scheduled backup workflows.'},
    ],
    benefits: [
      'Empowers marketing staff to publish articles independently.',
      'Keeps WordPress sites noticeably faster and easier to maintain.',
      'Avoids recurring plugin compatibility headaches.',
    ],
    technologies: ['WordPress Block Editor', 'Custom PHP & CSS', 'Caching & Compression', 'SEO Schema Configuration'],
    industries: [
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Frequent course notices and admissions calendars.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Doctor directories and patient education posts.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Advisory publications and insight libraries.'},
    ],
    relatedServiceSlugs: ['website-maintenance-support', 'website-speed-optimization', 'content-marketing', 'on-page-seo'],
    faqs: [
      {question: 'Should we choose WordPress or custom React SSR?', answer: 'WordPress fits teams prioritizing frequent visual content publishing; React SSR is ideal for bespoke portals, high-speed corporate architectures, and web applications.'},
      {question: 'Can you clean up and speed up an existing slow WordPress site?', answer: 'Yes, by trimming heavy plugins, optimizing assets, and tuning caching.'},
      {question: 'Will our team easily edit pages and blogs?', answer: 'Yes, with clear custom editorial blocks and training.'},
      {question: 'How do you keep WordPress secure?', answer: 'Minimal plugins, hardened admin access, regular patching, and backups.'},
      {question: 'Can WordPress connect with WhatsApp or CRM webhooks?', answer: 'Yes.'},
      {question: 'Are XML sitemaps and canonical tags configured?', answer: 'Yes, cleanly configured and verified.'},
      {question: 'Can you redesign a slow Elementor/Divi site cleanly?', answer: 'Yes, rebuilding cleanly for faster Core Web Vitals.'},
      {question: 'Do you offer ongoing WordPress maintenance?', answer: 'Yes.'},
    ],
  },
  {
    slug: 'react-website-development',
    name: 'React Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'React Website Development & TypeScript SSR | Klyia Technology',
    metaDescription:
      'High-speed React and TypeScript website development with full Server-Side Rendering (SSR) for crawlable SEO and rich interactive UI.',
    heroSubtitle:
      'Interactive React & TypeScript platforms engineered with full SSR HTML output so browsers enjoy fluidity and crawlers index every word.',
    introFocus:
      'React enables snappy interactive filtering, dashboards, and dynamic interfaces. Pairing React with TypeScript and Express Server-Side Rendering (SSR) ensures instant HTML crawlability alongside seamless client navigation.',
    whyNeeded: [
      'Traditional template websites feel sluggish when filtering specifications or interacting with assistants.',
      'Standard client-only React apps ship blank HTML shells that hurt search visibility.',
      'Modular TypeScript components unify websites and customer portals cleanly.',
    ],
    challenges: [
      'Empty initial HTML breaking SEO and social link previews.',
      'Oversized JS bundles delaying mobile interactivity.',
      'Hydration warnings and fragile untyped state.',
    ],
    solutions: [
      'Express + Vite SSR pipeline generating full HTML, canonical URLs, OpenGraph, and JSON-LD per route.',
      'TypeScript component libraries with clean state and lazy loading.',
      'Code-split interactive drawers protecting initial load speed.',
    ],
    features: [
      {title: 'Server-Rendered SEO HTML', detail: 'Every route renders complete content cleanly with JS disabled too.'},
      {title: 'Strict TypeScript Safety', detail: 'Predictable routing, forms, and API contracts.'},
      {title: 'Lazy-Loaded Interactive Modules', detail: 'Heavy widgets load only when triggered by visitors.'},
      {title: 'Direct API & AI Integration', detail: 'Seamless connection to Node backends, SQLite/Postgres, and Gemini APIs.'},
    ],
    benefits: [
      'Combines fast interactive UX with search-engine compliance.',
      'Built on modern stacks supported cleanly across Hostinger Node.js and cloud hosts.',
      'Scales smoothly into portals and SaaS tools.',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite 8 SSR', 'Express 4', 'Tailwind CSS'],
    industries: [
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Fast catalogue portals and dealer RFQ workflows.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Interactive Solar EPC platforms and dashboards.'},
      {label: 'Professional Services', slug: 'professional-services', note: 'Fast knowledge portals and interactive consultation tools.'},
    ],
    relatedServiceSlugs: ['custom-web-application-development', 'website-development-services', 'technical-seo', 'saas-application-development'],
    faqs: [
      {question: 'Are React websites crawlable by Google and Bing?', answer: 'Yes—because we build with Server-Side Rendering (SSR) so full HTML renders directly from the server on every request.'},
      {question: 'Why combine React with TypeScript?', answer: 'TypeScript eliminates entire categories of runtime bugs and keeps multi-page projects easy to extend.'},
      {question: 'Can React SSR run on Hostinger Node.js hosting?', answer: 'Yes. We structure clean Node 22 Express SSR builds specifically compatible with Hostinger Node.js hosting.'},
      {question: 'How fast do React SSR sites load?', answer: 'Initial HTML arrives immediately, with lean hydrated bundles and lazy-loaded secondary panels.'},
      {question: 'Can existing WordPress or static sites migrate to React SSR?', answer: 'Yes, preserving URLs and SEO metadata cleanly.'},
      {question: 'Does React support interactive AI chat assistants smoothly?', answer: 'Yes, using lazy loading so initial page speed stays unaffected.'},
      {question: 'Can we share components between our public site and internal ERP?', answer: 'Yes, via a unified design system.'},
      {question: 'How do we plan a React build?', answer: 'Share your site scope through Get a Quote.'},
    ],
  },
  {
    slug: 'custom-web-application-development',
    name: 'Custom Web Application Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Custom Web Application Development | Portals & Dashboards | Klyia Technology',
    metaDescription:
      'Bespoke browser-based web applications, dealer portals, customer dashboards, and internal workflow tools engineered by Klyia Technology.',
    heroSubtitle:
      'Secure, role-based web applications accessible from any browser—built around your exact team approvals, portals, and data models.',
    introFocus:
      'Custom web applications turn browser logins into secure company workspaces—from dealer ordering portals and field inspection logs to customer document tracking and management approvals.',
    whyNeeded: [
      'Staff working across plants, offices, and field territories need live shared records.',
      'Emailing spreadsheets creates conflicting versions and missed approvals.',
      'Dealers and institutional clients expect digital self-service portals.',
    ],
    challenges: [
      'Per-seat SaaS charges multiplying costs as teams scale.',
      'Missing regional tax, unit conversion, or multi-level sign-off rules.',
      'Insecure data circulating over personal messaging apps.',
    ],
    solutions: [
      'Tailored browser portals engineered with strict role permissions and SQL persistence.',
      'Custom dashboards, filterable ledgers, and clean PDF/CSV reports.',
      'Optional WhatsApp/email notification triggers on key approvals.',
    ],
    features: [
      {title: 'Role-Based Security', detail: 'Scoped permissions for directors, managers, field staff, dealers, and clients.'},
      {title: 'Custom Data Workflows', detail: 'Forms and rules built around your exact commercial logic.'},
      {title: 'Real-Time Search & Filters', detail: 'Fast lookups across thousands of orders, bills, or projects.'},
      {title: 'API & Notification Bridges', detail: 'Connect cleanly to ERPs, payment gateways, or WhatsApp.'},
    ],
    benefits: [
      'Replaces error-prone spreadsheet juggling.',
      'Works across desktops, tablets, and phones without software installs.',
      'Scales without per-user license bloat.',
    ],
    technologies: ['React & TypeScript', 'Node.js & Express', 'SQLite / PostgreSQL', 'Role Auth & Audit Logs'],
    industries: [
      {label: 'Wholesale & Distribution', slug: 'wholesale-distribution', note: 'Dealer order booking and ledger portals.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Survey uploads and EPC milestone trackers.'},
      {label: 'Logistics & Transportation', slug: 'logistics-transportation', note: 'Trip booking and POD document tracking.'},
    ],
    relatedServiceSlugs: ['custom-software-development', 'erp-software-development', 'database-api-integration', 'ui-ux-design'],
    relatedBlogSlugs: ['custom-software-vs-ready-made-software'],
    faqs: [
      {question: 'How does a web application differ from a standard website?', answer: 'Web apps handle authenticated operational workflows—such as portals, ERP entries, approvals, and dashboards—rather than public marketing alone.'},
      {question: 'Can field staff use custom web apps on mobile browsers?', answer: 'Yes, responsive screens adapt cleanly to phones and tablets.'},
      {question: 'Can existing Excel records be imported into the new portal?', answer: 'Yes, via structured migration scripts.'},
      {question: 'Do we control user permissions internally?', answer: 'Yes, administrators manage roles and access levels cleanly.'},
      {question: 'Are PDF exports and print formats supported?', answer: 'Yes, tailored to your invoices, challans, or reports.'},
      {question: 'Can webhooks send WhatsApp alerts when approvals happen?', answer: 'Yes.'},
      {question: 'Can we start with one workflow module first?', answer: 'Yes, phased delivery lowers risk and speeds adoption.'},
      {question: 'How do we begin scoping?', answer: 'Describe your workflow via Get a Quote.'},
    ],
  },
  {
    slug: 'website-redesign-revamp',
    name: 'Website Redesign & Revamp',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Website Redesign & Revamp Services | Klyia Technology',
    metaDescription:
      'Modernize aging websites for speed, mobile responsiveness, visual authority, and SEO/GEO/AEO readiness without dropping search equity.',
    heroSubtitle:
      'Upgrade slow, dated sites into modern, mobile-ready platforms while carefully safeguarding existing search URLs and domain equity.',
    introFocus:
      'Websites built years ago frequently fail mobile usability, lack SSL consistency, load slowly, and undersell how far a business has grown. Our revamp process modernizes visual craft and underlying code while protecting hard-earned domain trust.',
    whyNeeded: [
      'Outdated visual design undermines first impressions with modern procurement teams.',
      'Old websites often miss mobile responsiveness and Schema.org markup.',
      'Service lines evolve—leaving old site copy inaccurate.',
    ],
    challenges: [
      'Losing search rankings when redesigns change URLs without 301 redirects.',
      'Re-skinning old templates without fixing underlying speed or form issues.',
      'Broken internal links and duplicate titles post-launch.',
    ],
    solutions: [
      'Pre-revamp audit indexing every current page and mapping 301 redirects.',
      'Clean UI/UX modernization paired with crawlable SSR architecture.',
      'Upgraded content depth, FAQs, and technical Schema metadata.',
    ],
    features: [
      {title: 'Search Equity Preservation', detail: 'Careful URL inventory and 301 redirect mapping before launch.'},
      {title: 'Modern Brand Presentation', detail: 'Crisp typography, dark or light precision palettes, and structured navigation.'},
      {title: 'Mobile & Speed Overhaul', detail: 'Eliminating legacy bloat and fixing narrow-screen usability.'},
      {title: 'AEO & GEO Upgrade', detail: 'Adding clear Q&As, semantic headings, and Schema graphs.'},
    ],
    benefits: [
      'Retains historical domain trust while lifting speed and enquiry conversions.',
      'Accurately presents current products, divisions, and locations.',
      'Eliminates maintenance frustration from fragile legacy code.',
    ],
    technologies: ['301 Redirect Mapping', 'React SSR Upgrade', 'Core Web Vitals Tuning', 'Schema.org Modernization'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Upgrading dated industrial sites into modern portals.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Modernizing steel catalogues and mobile RFQ forms.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Making course and admissions portals mobile-ready.'},
    ],
    relatedServiceSlugs: ['website-speed-optimization', 'website-design-services', 'technical-seo', 'responsive-web-design'],
    faqs: [
      {question: 'Will a redesign hurt our Google rankings?', answer: 'Careful URL preservation and proper 301 redirects protect existing search equity while faster SSR speed and clearer copy strengthen crawlability.'},
      {question: 'Do we keep our domain and business emails?', answer: 'Yes, email and domain DNS records remain uninterrupted.'},
      {question: 'Can you modernize our service copy during the revamp?', answer: 'Yes, organizing clear explanations and FAQs from verified details.'},
      {question: 'Can old broken links be cleaned up cleanly?', answer: 'Yes, mapped cleanly to updated equivalent pages or returning accurate 404 status.'},
      {question: 'Can we switch from bloated WordPress builders to fast React SSR?', answer: 'Yes.'},
      {question: 'How soon do speed improvements show?', answer: 'Immediately upon launch across Core Web Vitals checks.'},
      {question: 'Can we add WhatsApp and AI guidance during the revamp?', answer: 'Yes.'},
      {question: 'How do we start a revamp audit?', answer: 'Send your current domain via Contact Us.'},
    ],
  },
  {
    slug: 'landing-page-design',
    name: 'Landing Page Design',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Conversion-Focused Landing Page Design | Klyia Technology',
    metaDescription:
      'Fast-loading, intent-matched landing pages designed for Google Ads, product launches, and B2B lead generation.',
    heroSubtitle:
      'Focused single-objective pages designed to convert paid clicks and targeted searches into phone calls, WhatsApp chats, and enquiries.',
    introFocus:
      'Paid campaigns and focused regional promotions perform best when visitors arrive on a page tailored strictly to what they clicked—free from distracting header sprawl and slow scripts.',
    whyNeeded: [
      'Sending ad traffic to broad homepages dilutes buyer attention.',
      'City or product campaigns require tailored headlines and specific qualification forms.',
      'Sub-second mobile rendering directly improves ad campaign efficiency.',
    ],
    challenges: [
      'Weak above-the-fold clarity forcing visitors to hunt for the offer.',
      'Heavy page builders costing clicks due to slow loading.',
      'Missing conversion event setup.',
    ],
    solutions: [
      'Sharp value propositions, concise proof, FAQs, and immediate enquiry paths.',
      'Minimal asset footprint for instant mobile presentation.',
      'GA4 conversion hooks and WhatsApp click-to-chat options.',
    ],
    features: [
      {title: 'Ad-Message Alignment', detail: 'Cohesive headlines matching campaign keywords cleanly.'},
      {title: 'Lean Fast Delivery', detail: 'Zero unnecessary script clutter slowing mobile renders.'},
      {title: 'Focused Lead Capture', detail: 'Short validated forms paired with direct WhatsApp fallback.'},
      {title: 'Analytics Readiness', detail: 'Clean conversion event triggers for Google Ads and GA4.'},
    ],
    benefits: [
      'Reduces wasted ad spend by keeping visitors engaged with one clear step.',
      'Quick to deploy for seasonal offers, new product lines, or regional drives.',
      'Reusable modular layout across multiple campaigns.',
    ],
    technologies: ['Lightweight React / HTML', 'GA4 Conversion Hooks', 'Tailwind UI', 'Express Lead Capture'],
    industries: [
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Project launch & site-visit booking pages.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Regional rooftop solar enquiry landing pages.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Intake batch registration pages.'},
    ],
    relatedServiceSlugs: ['google-ads-management', 'professional-landing-pages', 'website-design-services', 'ui-ux-design'],
    faqs: [
      {question: 'When should we use a dedicated landing page instead of our main service page?', answer: 'Use dedicated landing pages for paid search/social ads or tightly targeted regional campaigns where minimizing distraction maximizes form completions.'},
      {question: 'Can we run A/B copy variations over time?', answer: 'Yes, modular structure makes headline or CTA testing straightforward.'},
      {question: 'Do landing pages include WhatsApp buttons?', answer: 'Yes, alongside validated short enquiry forms.'},
      {question: 'Are landing pages optimized for smartphones?', answer: 'Yes, built mobile-first for ad traffic.'},
      {question: 'Can conversion tracking integrate with Google Ads?', answer: 'Yes, when your GA4 or Ads tag IDs are configured.'},
      {question: 'Can landing pages sit under clean URLs on our main domain?', answer: 'Yes.'},
      {question: 'Do you write the campaign copy too?', answer: 'Yes, clear factual copy based on your approved offer details.'},
      {question: 'How do we request a campaign landing page?', answer: 'Share your campaign goal via Get a Quote.'},
    ],
  },
  {
    slug: 'responsive-web-design',
    name: 'Responsive Web Design',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Responsive Web Design | Mobile, Tablet & Desktop | Klyia Technology',
    metaDescription:
      'Fluid responsive web design ensuring zero horizontal scrolling, crisp readability, and smooth touch navigation across all viewports.',
    heroSubtitle:
      'Cohesive adaptive interfaces engineered so menus, spec tables, and enquiry forms operate naturally from 375px phones to widescreen monitors.',
    introFocus:
      'Industrial buyers and consumers switch constantly between smartphones on-site and office desktops. Responsive engineering ensures your website never clips buttons, shrinks text unreadably, or breaks navigation on any screen.',
    whyNeeded: [
      'Pinch-to-zoom desktop pages lose smartphone visitors immediately.',
      'Google evaluates mobile layout and usability for primary indexing.',
      'Dense B2B comparison tables and menus fail unless designed adaptively.',
    ],
    challenges: [
      'Horizontal page overflow pushing screens sideways on phones.',
      'Cramped tap targets causing misclicks.',
      'Oversized desktop assets consuming mobile data.',
    ],
    solutions: [
      'Fluid CSS grid breakpoints with strict overflow discipline.',
      'Adaptive slide-out mobile drawers replacing desktop mega-menus.',
      'Accessible 44px+ touch controls and readable type scales.',
    ],
    features: [
      {title: 'Zero Horizontal Overflow', detail: 'Clean layout framing across 375px mobile, tablet, and desktop screens.'},
      {title: 'Mobile Accordion Navigation', detail: 'Smooth category access on touch devices without crowding headers.'},
      {title: 'Responsive Data Tables', detail: 'Comparison and product spec tables remain scannable everywhere.'},
      {title: 'Touch-Ergonomic Forms', detail: 'Proper mobile keyboards (`tel`, `email`) and spacious inputs.'},
    ],
    benefits: [
      'One unified codebase serving every device seamlessly.',
      'Protects mobile search rankings and usability metrics.',
      'Boosts form submission completion from smartphone users.',
    ],
    technologies: ['Tailwind Responsive Grid', 'Fluid CSS Clamp Typography', 'Mobile Touch Landmarks', 'Breakpoint Verification'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Smooth smartphone catalog filtering and checkout.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Quick doctor & phone lookups during patient searches.'},
      {label: 'Agriculture & Agribusiness', slug: 'agriculture-agribusiness', note: 'Clean readability on everyday regional smartphones.'},
    ],
    relatedServiceSlugs: ['website-design-services', 'ui-ux-design', 'website-redesign-revamp', 'website-speed-optimization'],
    faqs: [
      {question: 'Does responsive design require managing separate mobile and desktop sites?', answer: 'No. One unified website adapts smoothly to all screen widths.'},
      {question: 'How do large specification tables behave on mobile phones?', answer: 'They adapt into clean mobile cards or safely contained scrollable containers without breaking page width.'},
      {question: 'Does responsive design help Google rankings?', answer: 'Yes—Google primarily evaluates mobile rendering during indexing.'},
      {question: 'Can you fix mobile layout glitches on an existing website?', answer: 'Yes, via targeted responsive updates or full redesign.'},
      {question: 'Do floating buttons interfere with mobile reading?', answer: 'We follow strict compact sizing so sticky controls stay minimal and unobstructed.'},
      {question: 'Are forms tested with mobile keyboards?', answer: 'Yes, using semantic `tel` and `email` input types.'},
      {question: 'Is tablet layout tested too?', answer: 'Yes, mid-tier breakpoints adjust cleanly without awkward stretching.'},
      {question: 'How do we get a mobile usability review?', answer: 'Send your site URL via Contact Us.'},
    ],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'UI/UX Design for Websites, Portals & ERP Systems | Klyia Technology',
    metaDescription:
      'Human-centered UI/UX design for enterprise web apps, ERP dashboards, customer portals, and business websites.',
    heroSubtitle:
      'Clarity-first interfaces designed so busy factory staff, sales teams, and buyers complete tasks smoothly with minimal friction.',
    introFocus:
      'Whether navigating a corporate service hub or entering daily production dispatches inside an ERP, great UX reduces clicks, prevents mistakes, and respects the user’s visual attention.',
    whyNeeded: [
      'Powerful software sits unused when screens feel cluttered or confusing.',
      'Unclear buyer journeys cost website enquiries before visitors find contact options.',
      'Low contrast and tiny labels strain operators during full-day workflows.',
    ],
    challenges: [
      'Enterprise screens crammed with disorganized fields.',
      'Missing loading, empty, or clear validation error states.',
      'Inconsistent navigation across sub-pages.',
    ],
    solutions: [
      'Task-flow mapping streamlining multi-step billing, onboarding, or browsing paths.',
      'Disciplined typography, WCAG AA contrast, and clear component libraries.',
      'Accessible keyboard support and helpful feedback states.',
    ],
    features: [
      {title: 'Workflow Information Architecture', detail: 'Logical screen grouping matching real operational sequences.'},
      {title: 'Consistent Design Systems', detail: 'Unified buttons, form fields, tables, and visual tokens.'},
      {title: 'Accessibility & Focus Hygiene', detail: 'Readable contrast, semantic buttons, and keyboard navigation.'},
      {title: 'Enterprise Dashboard Clarity', detail: 'Tabular figures and calm whitespace around metrics.'},
    ],
    benefits: [
      'Shortens employee training time on custom software and ERPs.',
      'Lowers daily data-entry mistakes.',
      'Elevates digital brand perception across all platforms.',
    ],
    technologies: ['Design Systems', 'WCAG AA Accessibility', 'Tailwind Design Tokens', 'React Interactive Components'],
    industries: [
      {label: 'Manufacturing & Engineering', slug: 'manufacturing-engineering', note: 'Shop-floor and supervisor screens built for clarity.'},
      {label: 'Solar & Renewable Energy', slug: 'solar-renewable-energy', note: 'Field survey and milestone UX for solar teams.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Low-friction patient appointment and portal UX.'},
    ],
    relatedServiceSlugs: ['website-design-services', 'custom-web-application-development', 'saas-application-development', 'brand-identity'],
    faqs: [
      {question: 'What distinguishes UI from UX design?', answer: 'UX focuses on information structure, task efficiency, and ease of use; UI covers visual layout, typography, spacing, and interactive polish.'},
      {question: 'Do you design UI/UX for ERP and internal software as well as public websites?', answer: 'Yes—enterprise dashboards and operational workflows are a core focus.'},
      {question: 'Can you overhaul the interface of an outdated internal app?', answer: 'Yes, streamlining operator workflows without disrupting underlying data.'},
      {question: 'How is accessibility prioritized?', answer: 'Through strong color contrast, readable font scales, semantic labels, and keyboard focus indicators.'},
      {question: 'Does Klyia build the frontend code too?', answer: 'Yes, directly in React and TypeScript.'},
      {question: 'Are error and empty states designed explicitly?', answer: 'Yes, every form and data view handles empty, loading, error, and success states cleanly.'},
      {question: 'Do you support both obsidian dark and crisp light aesthetics?', answer: 'Yes, tailored to brand identity and operator viewing environments.'},
      {question: 'How do we discuss a UI/UX engagement?', answer: 'Share your application or site goals via Get a Quote.'},
    ],
  },
  {
    slug: 'website-maintenance-support',
    name: 'Website Maintenance & Support',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Website Maintenance & Technical Support | Klyia Technology',
    metaDescription:
      'Dependable website maintenance, security patching, content updates, uptime monitoring, and backup support for Indian businesses.',
    heroSubtitle:
      'Keep pages accurate, dependencies patched, backups verified, and enquiry forms working reliably month after month.',
    introFocus:
      'Businesses evolve continually—products launch, phone numbers change, new guides publish, and software packages require security maintenance. Dedicated support prevents silent technical decay after launch.',
    whyNeeded: [
      'Neglected sites accumulate expired SSL certs, broken links, and outdated contact details.',
      'Security updates protect runtime dependencies and CMS setups.',
      'Busy owners need a responsive technical team for ongoing additions.',
    ],
    challenges: [
      'Previous developers unreachable when urgent updates arise.',
      'Forms silently failing without alert logging.',
      'Risky manual edits made directly on live servers without backups.',
    ],
    solutions: [
      'Routine updates covering copy/media edits, runtime patches, and health checks.',
      'Scheduled database & file backups prior to structural changes.',
      'Direct communication via phone, WhatsApp, and email.',
    ],
    features: [
      {title: 'Timely Content & Media Edits', detail: 'Updating catalogs, team notes, notices, and seasonal offers cleanly.'},
      {title: 'Form & Route Verification', detail: 'Testing enquiry endpoints, redirects, and WhatsApp links.'},
      {title: 'Runtime & Package Patching', detail: 'Safe updates for Node dependencies or CMS cores.'},
      {title: 'Backup & SSL Oversight', detail: 'Ensuring HTTPS validity and recoverable backups.'},
    ],
    benefits: [
      'Protects brand uptime and search engine credibility.',
      'Saves management time during updates or troubleshooting.',
      'Keeps technical debt low over years.',
    ],
    technologies: ['Node.js & Express Support', 'Backup Automation', 'SSL & DNS Checks', 'Link & Sitemap Audits'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Ongoing catalog updates and checkout verification.'},
      {label: 'Education & Training Institutes', slug: 'education-training-institutes', note: 'Admissions schedules, circulars, and course updates.'},
      {label: 'Healthcare & Clinics', slug: 'healthcare-clinics', note: 'Up-to-date doctor rosters and clinic timings.'},
    ],
    relatedServiceSlugs: ['website-speed-optimization', 'security-backup-support', 'website-hosting-support', 'website-development-services'],
    faqs: [
      {question: 'Can you maintain a website built previously by someone else?', answer: 'Yes, following an initial technical review of codebase and server access.'},
      {question: 'What work is covered under maintenance?', answer: 'Content/image updates, dependency security patching, backup verification, form health checks, and bug fixes.'},
      {question: 'Do we keep full access to our domain and hosting accounts?', answer: 'Always.'},
      {question: 'Are enquiry forms checked periodically?', answer: 'Yes, verifying end-to-end delivery.'},
      {question: 'Is SSL certificate monitoring included?', answer: 'Yes, verifying active HTTPS status.'},
      {question: 'Can maintenance include adding new blog posts or service pages?', answer: 'Yes, aligned within monthly support hours or scoped requests.'},
      {question: 'What stacks do you support?', answer: 'React/Node.js SSR sites, standard HTML/CSS, and clean WordPress setups.'},
      {question: 'How do we arrange support?', answer: 'Reach out via Contact Us with your website URL.'},
    ],
  },
  {
    slug: 'website-speed-optimization',
    name: 'Website Speed Optimization',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    seoTitle: 'Website Speed Optimization & Core Web Vitals | Klyia Technology',
    metaDescription:
      'Diagnose and resolve slow load times, Core Web Vitals bottlenecks (LCP, INP, CLS), oversized images, and render-blocking scripts.',
    heroSubtitle:
      'Accelerate mobile and desktop load times by eliminating bloated scripts, tuning caching, and optimizing Core Web Vitals.',
    introFocus:
      'Slow websites lose mobile buyers before page copy even paints and weaken search performance. Speed optimization pinpoints asset, bundle, caching, and server bottlenecks systematically.',
    whyNeeded: [
      'Visitors on regional mobile networks leave quickly when pages stall past a few seconds.',
      'Core Web Vitals (LCP, INP, CLS) influence technical SEO quality.',
      'Large uncompressed images and heavy scripts waste bandwidth.',
    ],
    challenges: [
      'Oversized hero graphics stalling initial viewport paint.',
      'Unused CSS/JS plugins blocking interactive taps.',
      'Jarring layout shifts caused by missing image dimensions.',
    ],
    solutions: [
      'Code splitting and lazy loading secondary drawers/widgets.',
      'Proper aspect containers, image compression, and font-display tuning.',
      'Immutable static asset caching and SSR payload optimization.',
    ],
    features: [
      {title: 'Core Web Vitals Diagnostics', detail: 'Targeted optimization across LCP, INP, CLS, and server response times.'},
      {title: 'Bundle & Script Trimming', detail: 'Deferring non-critical JS and removing redundant libraries.'},
      {title: 'Media & Font Tuning', detail: 'Right-sized dimensions and smooth webfont loading.'},
      {title: 'Caching Strategy', detail: 'Proper Cache-Control headers for static bundles and APIs.'},
    ],
    benefits: [
      'Faster loading across mobile and desktop connections.',
      'Lower bounce rates from organic search and paid ad visitors.',
      'Cleaner technical foundation for SEO and GEO.',
    ],
    technologies: ['Core Web Vitals Profiling', 'Vite Bundle Splitting', 'Cache-Control Headers', 'Asset Optimization'],
    industries: [
      {label: 'Retail & E-commerce', slug: 'retail-ecommerce', note: 'Fast browsing across image-rich product catalogs.'},
      {label: 'Real Estate & Construction', slug: 'real-estate-construction', note: 'Responsive architectural galleries on mobile data.'},
      {label: 'Steel & Iron Industry', slug: 'steel-iron-industry', note: 'Instant catalog & spec lookups during procurement calls.'},
    ],
    relatedServiceSlugs: ['website-performance-optimization', 'technical-seo', 'website-redesign-revamp', 'website-maintenance-support'],
    relatedBlogSlugs: ['why-fast-website-speed-matters-for-seo-and-conversions'],
    faqs: [
      {question: 'Does faster website speed improve SEO?', answer: 'Yes. Speed and Core Web Vitals are measurable technical signals search engines consider alongside relevance.'},
      {question: 'Can an existing site be sped up without a full rebuild?', answer: 'Often yes, through caching, media optimization, and script cleanups; if legacy theme bloat prevents improvement, we explain transparently.'},
      {question: 'Do you guarantee 100/100 scores on every external tool?', answer: 'We focus on genuine real-world speed and verified Core Web Vitals gains rather than artificial score manipulation.'},
      {question: 'What is LCP?', answer: 'Largest Contentful Paint measures how fast the main headline or visual finishes rendering.'},
      {question: 'What causes layout shift (CLS)?', answer: 'Missing image width/height rules or late-injecting banners pushing text downward while reading.'},
      {question: 'Does lazy-loading non-critical panels help?', answer: 'Yes, loading secondary panels on demand keeps initial payloads lean.'},
      {question: 'Do server response times matter?', answer: 'Yes—lean SSR routing and proper database indexing keep Time to First Byte fast.'},
      {question: 'How do we request a speed diagnostic?', answer: 'Share your domain via Get a Quote.'},
    ],
  },
];

export const WEB_SOLUTION_SERVICES: ServicePageData[] = WEB_SEEDS.map(hydrateServiceSeed);
