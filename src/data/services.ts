import {resolveServiceBanner} from '../config/banners.ts';
import type {
  ServiceCategoryId,
  ServiceCategoryMeta,
  ServicePageData,
  WorkProcessStep,
} from './types.ts';

const UPDATED_DATE = '2026-11-18';

export const STANDARD_WORK_PROCESS: WorkProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Audit current workflows, operational bottlenecks, compliance rules, and business objectives.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define system architecture, database schema, milestone timelines, and technical SEO foundations.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create accessible, high-contrast interfaces, role-based dashboards, and responsive layouts.',
  },
  {
    step: '04',
    title: 'Develop',
    description: 'Engineer modular TypeScript, React, and Node.js systems with clean API and database integrations.',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Validate Core Web Vitals, SSL security, structured Schema markup, and production readiness.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Provide ongoing monitoring, feature iterations, team training, and dependable technical maintenance.',
  },
];

export const SERVICE_CATEGORIES: ServiceCategoryMeta[] = [
  {
    id: 'web-solutions',
    anchorId: 'web-solutions',
    title: 'Web Design, Portals & Speed Engineering',
    shortTitle: 'Web Solutions',
    summary:
      'High-speed, server-rendered corporate websites, custom web portals, and e-commerce platforms engineered for search visibility and conversion.',
    crossLinkedSlugs: [
      {slug: 'search-engine-optimization', name: 'Technical SEO', primaryCategoryNote: 'SEO & Growth'},
      {slug: 'professional-landing-pages', name: 'Professional Landing Pages', primaryCategoryNote: 'Creative & Branding'},
    ],
  },
  {
    id: 'software-development',
    anchorId: 'software-development',
    title: 'Custom Software, ERP & Business Systems',
    shortTitle: 'Software & ERP',
    summary:
      'Modular custom software, Steel & Solar ERP platforms, inventory & GST billing, and CRM systems tailored to real Indian workflows.',
    crossLinkedSlugs: [
      {slug: 'whatsapp-business-automation', name: 'WhatsApp Business Automation', primaryCategoryNote: 'AI & Automation'},
      {slug: 'cloud-solutions', name: 'Cloud Solutions', primaryCategoryNote: 'IT & Cloud'},
    ],
  },
  {
    id: 'seo-digital-growth',
    anchorId: 'seo-digital-growth',
    title: 'SEO, Local SEO, GEO, AEO & Digital Growth',
    shortTitle: 'SEO, GEO & AEO',
    summary:
      'Search engineering across Google organic search, local Maps packs, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO).',
    crossLinkedSlugs: [
      {slug: 'website-speed-optimization', name: 'Website Speed Optimization', primaryCategoryNote: 'Web Solutions'},
      {slug: 'digital-creatives', name: 'Digital Creatives', primaryCategoryNote: 'Creative & Branding'},
    ],
  },
  {
    id: 'ai-automation',
    anchorId: 'ai-automation',
    title: 'AI Integration & Business Workflow Automation',
    shortTitle: 'AI & Automation',
    summary:
      'Practical AI assistants, official WhatsApp Business API notifications, and automated lead/ERP workflows that eliminate manual follow-up gaps.',
    crossLinkedSlugs: [
      {slug: 'crm-software-development', name: 'CRM Software Development', primaryCategoryNote: 'Software & ERP'},
      {slug: 'custom-software-development', name: 'Custom Software Development', primaryCategoryNote: 'Software & ERP'},
    ],
  },
  {
    id: 'creative-branding',
    anchorId: 'creative-branding',
    title: 'Creative Identity, Branding & Conversion Assets',
    shortTitle: 'Creative & Branding',
    summary:
      'Cohesive corporate brand identities, logos, B2B sales collateral, and high-converting campaign landing pages aligned with modern UX.',
    crossLinkedSlugs: [
      {slug: 'website-design-services', name: 'Website Design Services', primaryCategoryNote: 'Web Solutions'},
      {slug: 'digital-marketing-services', name: 'Digital Marketing', primaryCategoryNote: 'SEO & Growth'},
    ],
  },
  {
    id: 'it-cloud-support',
    anchorId: 'it-cloud-support',
    title: 'IT Infrastructure, Cloud Hosting & Security Support',
    shortTitle: 'IT & Cloud Support',
    summary:
      'Reliable VPS/cloud server deployments, domain and DNS governance, automated backups, and long-term website maintenance.',
    crossLinkedSlugs: [
      {slug: 'website-speed-optimization', name: 'Website Speed Optimization', primaryCategoryNote: 'Web Solutions'},
      {slug: 'erp-software-development', name: 'ERP Software Development', primaryCategoryNote: 'Software & ERP'},
    ],
  },
];

interface ServiceSeed {
  slug: string;
  name: string;
  categoryId: ServiceCategoryId;
  categoryLabel: string;
  heroSubtitle: string;
  seoTitle?: string;
  metaDescription?: string;
  complianceNote?: string;
  technologies?: string[];
  relatedServiceSlugs: string[];
  relatedBlogSlugs?: string[];
  industriesBenefiting?: {slug: string; label: string; note: string}[];
}

function buildServicePage(seed: ServiceSeed): ServicePageData {
  const banner = resolveServiceBanner(seed.slug, seed.categoryId, seed.name);
  const canonicalPath = `/services/${seed.slug}/`;

  return {
    slug: seed.slug,
    name: seed.name,
    h1: seed.name,
    heroSubtitle: seed.heroSubtitle,
    heroImage: banner.image,
    heroImageAlt: banner.alt,
    canonicalPath,
    categoryId: seed.categoryId,
    categoryLabel: seed.categoryLabel,
    seoTitle: seed.seoTitle ?? `${seed.name} in Bhilai, Chhattisgarh & India | Klyia Technology`,
    metaDescription:
      seed.metaDescription ??
      `${seed.name} by Klyia Technology in Risali, Bhilai. ${seed.heroSubtitle}`,
    indexable: true,
    updatedAt: UPDATED_DATE,
    introduction: [
      `${seed.name} requires clear operational scoping before a single line of code or design layout is finalized. At Klyia Technology in Risali, Bhilai, we engineer solutions built around your actual team workflows, customer buying journey, and long-term maintainability.`,
      `Whether your organization operates in Bhilai, Durg, Raipur, across Chhattisgarh, or anywhere in India, our delivery focuses on clean architecture, transparent milestones, and measurable commercial outcomes rather than generic templates.`,
    ],
    complianceNote: seed.complianceNote,
    whyNeeded: [
      `Replace fragmented manual tools and inconsistent customer touchpoints with a dependable ${seed.name.toLowerCase()} foundation.`,
      'Give leadership clear visibility into performance, inquiry quality, and operational turnaround times.',
      'Build on modern, maintainable standards that avoid vendor lock-in and support future expansion.',
    ],
    challenges: [
      'Generic off-the-shelf setups that fail to match Indian billing, regional buyer behavior, or plant/office workflows.',
      'Slow load times, poor mobile responsiveness, or disconnected data silos between sales and operations.',
      'Unclear pricing scopes and lack of dependable post-launch technical support.',
    ],
    solutions: [
      `Requirement-first discovery mapping every role, workflow, and integration needed for ${seed.name}.`,
      'Clean TypeScript, React, and relational database engineering with strict security and validation practices.',
      'Built-in technical SEO, semantic HTML hierarchy, and structured metadata for strong organic and AI discovery.',
    ],
    features: [
      {
        title: 'Tailored Architecture',
        detail: `Every module and interface in our ${seed.name.toLowerCase()} delivery is mapped to your real business logic and user roles.`,
      },
      {
        title: 'Performance & Reliability',
        detail: 'Optimized assets, server-rendered HTML, and resilient error handling built for daily commercial workloads.',
      },
      {
        title: 'Search & AI Readiness',
        detail: 'Clean semantic structure, Schema.org JSON-LD support, and fast Core Web Vitals out of the box.',
      },
      {
        title: 'Transparent Support',
        detail: 'Direct engineering access from our Bhilai office with documented codebases and clear SLA options.',
      },
    ],
    benefits: [
      'Faster team execution with fewer manual handoffs and spreadsheet errors.',
      'Stronger credibility with industrial, B2B, and retail buyers across India.',
      'Scalable digital infrastructure ready for new branches, SKUs, or automation workflows.',
    ],
    technologies: seed.technologies ?? [
      'TypeScript',
      'React & SSR',
      'Node.js',
      'Tailwind CSS',
      'Relational SQL',
      'Schema.org JSON-LD',
    ],
    industriesBenefiting: seed.industriesBenefiting ?? [
      {
        slug: 'steel-iron-industry',
        label: 'Steel & Iron Industry',
        note: 'High-volume industrial operations, dealer portals, and plant workflows.',
      },
      {
        slug: 'solar-renewable-energy',
        label: 'Solar & Renewable Energy',
        note: 'EPC survey tracking, BOM control, subsidy logs, and lead pipelines.',
      },
      {
        slug: 'manufacturing-engineering',
        label: 'Manufacturing & Engineering',
        note: 'Shop-floor visibility, B2B catalogs, and procurement automation.',
      },
    ],
    whyChooseKlyia: [
      'Verified physical headquarters in Risali, Bhilai with direct on-site consultations across Bhilai, Durg, and Raipur.',
      'Deep practical experience across Steel, Solar EPC, Manufacturing, Wholesale, and Mandi operations.',
      'Honest scope-based pricing with zero hidden fees or bloated unnecessary licenses.',
    ],
    relatedServiceSlugs: seed.relatedServiceSlugs,
    relatedBlogSlugs: seed.relatedBlogSlugs ?? [
      'website-development-cost-in-india-what-affects-pricing',
      'custom-software-vs-ready-made-software',
    ],
    faqs: [
      {
        question: `How does Klyia Technology scope and price ${seed.name}?`,
        answer:
          'We first map your exact pages, modules, user roles, and third-party integrations so the quote reflects real engineering effort with clear milestones.',
      },
      {
        question: `Do you provide ${seed.name} outside Bhilai and Chhattisgarh?`,
        answer:
          'Yes. While we offer direct on-site meetings across Bhilai, Durg, and Raipur, we deliver and support projects remotely for businesses across India.',
      },
      {
        question: 'What kind of post-launch support is included?',
        answer:
          'Every project includes structured handover documentation, team walkthroughs, and optional ongoing maintenance, security updates, and feature enhancements.',
      },
    ],
  };
}

const SERVICE_SEEDS: ServiceSeed[] = [
  // 1. Web Solutions
  {
    slug: 'website-design-services',
    name: 'Website Design Services',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Executive corporate UI/UX systems engineered for credibility, mobile clarity, and measurable buyer conversion.',
    relatedServiceSlugs: ['website-development-services', 'corporate-website-development', 'brand-identity', 'professional-landing-pages'],
    relatedBlogSlugs: ['website-development-cost-in-india-what-affects-pricing', 'seo-vs-geo-vs-aeo-difference-explained'],
  },
  {
    slug: 'website-development-services',
    name: 'Website Development Services',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Fast, server-rendered business websites built with clean code, technical SEO foundations, and scalable CMS/API support.',
    relatedServiceSlugs: ['website-design-services', 'react-website-development', 'search-engine-optimization', 'website-speed-optimization'],
    relatedBlogSlugs: ['website-development-cost-in-india-what-affects-pricing', 'seo-vs-geo-vs-aeo-difference-explained'],
  },
  {
    slug: 'corporate-website-development',
    name: 'Corporate Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Authoritative multi-page corporate platforms designed for industrial manufacturers, B2B groups, and regional market leaders.',
    relatedServiceSlugs: ['website-development-services', 'geo-generative-engine-optimization', 'brand-identity', 'website-hosting-support'],
    relatedBlogSlugs: ['website-development-cost-in-india-what-affects-pricing'],
  },
  {
    slug: 'ecommerce-website-development',
    name: 'E-commerce Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'High-conversion storefronts with GST invoicing, UPI/payment gateway integration, stock sync, and fast mobile checkout.',
    technologies: ['React SSR', 'TypeScript', 'Node.js', 'Payment Gateways', 'GST Billing APIs', 'Schema.org Product'],
    relatedServiceSlugs: ['ecommerce-seo', 'inventory-management-software', 'whatsapp-business-automation', 'website-speed-optimization'],
    industriesBenefiting: [
      {slug: 'retail-ecommerce', label: 'Retail & E-commerce', note: 'Omnichannel D2C and B2C storefronts with live inventory.'},
      {slug: 'wholesale-distribution', label: 'Wholesale & Distribution', note: 'B2B dealer ordering portals and tiered pricing.'},
      {slug: 'industrial-suppliers-traders', label: 'Industrial Suppliers', note: 'Multi-SKU hardware catalogs with instant RFQ workflows.'},
    ],
  },
  {
    slug: 'react-website-development',
    name: 'React Website Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Modern React and TypeScript web platforms combining app-like responsiveness with full server-side rendering for SEO.',
    relatedServiceSlugs: ['custom-web-application-development', 'website-speed-optimization', 'website-development-services', 'server-deployment-support'],
  },
  {
    slug: 'website-speed-optimization',
    name: 'Website Speed Optimization',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Core Web Vitals tuning, bundle reduction, image optimization, and server caching for sub-second page loads.',
    relatedServiceSlugs: ['search-engine-optimization', 'react-website-development', 'website-hosting-support', 'website-maintenance-support'],
  },
  {
    slug: 'custom-web-application-development',
    name: 'Custom Web Application Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Browser-based operational portals, multi-user dashboards, and SaaS tools engineered for security and speed.',
    relatedServiceSlugs: ['custom-software-development', 'web-portal-development', 'react-website-development', 'cloud-solutions'],
  },
  {
    slug: 'web-portal-development',
    name: 'Web Portal Development',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Secure dealer, vendor, customer, and institutional portals with role-based permissions and live order tracking.',
    relatedServiceSlugs: ['custom-web-application-development', 'erp-software-development', 'crm-software-development', 'whatsapp-business-automation'],
  },
  {
    slug: 'website-maintenance-support',
    name: 'Website Maintenance & Support',
    categoryId: 'web-solutions',
    categoryLabel: 'Web Solutions',
    heroSubtitle: 'Proactive uptime monitoring, security patching, content updates, and backup verification for business-critical websites.',
    relatedServiceSlugs: ['security-backup-support', 'website-hosting-support', 'website-speed-optimization', 'domain-hosting-assistance'],
  },

  // 2. Software & ERP
  {
    slug: 'custom-software-development',
    name: 'Custom Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Bespoke operational software engineered around your exact pricing rules, approvals, and reporting workflows.',
    relatedServiceSlugs: ['erp-software-development', 'business-management-software', 'crm-software-development', 'workflow-automation'],
    relatedBlogSlugs: ['custom-software-vs-ready-made-software', 'erp-software-for-steel-trading-and-manufacturing'],
  },
  {
    slug: 'erp-software-development',
    name: 'ERP Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Modular ERP suites unifying procurement, multi-godown inventory, production, GST billing, and dispatch control.',
    complianceNote: 'We engineer GST-ready invoicing structures, e-Way bill data exports, and audit trails aligned with your CA and accounting workflows.',
    relatedServiceSlugs: ['manufacturing-erp', 'solar-erp-software', 'wholesale-distribution-erp', 'inventory-management-software'],
    relatedBlogSlugs: ['erp-software-for-steel-trading-and-manufacturing', 'solar-epc-erp-and-crm-software-guide'],
    industriesBenefiting: [
      {slug: 'steel-iron-industry', label: 'Steel & Iron Industry', note: 'Dual MT/piece units, rolling yield, and weighbridge dispatch.'},
      {slug: 'solar-renewable-energy', label: 'Solar & Renewable Energy', note: 'Survey-to-commissioning BOM, subsidy, and AMC logs.'},
      {slug: 'manufacturing-engineering', label: 'Manufacturing & Engineering', note: 'BOM, shop-floor WIP, and raw material reconciliation.'},
    ],
  },
  {
    slug: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Production planning, multi-level BOM control, scrap tracking, quality checks, and raw-material procurement ERP.',
    relatedServiceSlugs: ['erp-software-development', 'inventory-management-software', 'billing-accounting-software', 'custom-software-development'],
    relatedBlogSlugs: ['erp-software-for-steel-trading-and-manufacturing', 'custom-software-vs-ready-made-software'],
  },
  {
    slug: 'solar-erp-software',
    name: 'Solar ERP Software',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Purpose-built ERP & CRM for Solar EPC firms covering site surveys, BOM, subsidy tracking, net-metering, and AMC schedules.',
    relatedServiceSlugs: ['crm-software-development', 'erp-software-development', 'whatsapp-business-automation', 'inventory-management-software'],
    relatedBlogSlugs: ['solar-epc-erp-and-crm-software-guide', 'how-whatsapp-business-automation-helps-increase-lead-response'],
    industriesBenefiting: [
      {slug: 'solar-renewable-energy', label: 'Solar & Renewable Energy', note: 'Residential rooftop, PM Surya Ghar, and C&I EPC workflows.'},
      {slug: 'manufacturing-engineering', label: 'Manufacturing & Engineering', note: 'Module mounting and electrical panel fabrication.'},
      {slug: 'industrial-suppliers-traders', label: 'Industrial Suppliers', note: 'Inverter, cable, and solar structure distribution.'},
    ],
  },
  {
    slug: 'crm-software-development',
    name: 'CRM Software Development',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Structured lead pipelines, dealer follow-ups, quotation tracking, and WhatsApp-connected sales accountability.',
    relatedServiceSlugs: ['whatsapp-business-automation', 'erp-software-development', 'business-management-software', 'business-ai-integration'],
  },
  {
    slug: 'inventory-management-software',
    name: 'Inventory Management Software',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Real-time multi-godown stock visibility, batch/lot tracking, reorder thresholds, and dispatch reconciliation.',
    relatedServiceSlugs: ['wholesale-distribution-erp', 'billing-accounting-software', 'erp-software-development', 'ecommerce-website-development'],
  },
  {
    slug: 'billing-accounting-software',
    name: 'Billing & Accounting Software',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Fast GST invoicing, credit-limit alerts, party ledgers, e-Way bill exports, and payment aging dashboards.',
    relatedServiceSlugs: ['inventory-management-software', 'erp-software-development', 'mandi-fruit-trading-software', 'whatsapp-business-automation'],
  },
  {
    slug: 'business-management-software',
    name: 'Business Management Software',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Unified operations portal connecting team tasks, approvals, CRM, invoicing, and executive reporting.',
    relatedServiceSlugs: ['custom-software-development', 'erp-software-development', 'crm-software-development', 'workflow-automation'],
  },
  {
    slug: 'wholesale-distribution-erp',
    name: 'Wholesale & Distribution ERP',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'Route-wise order booking, beat planning, credit exposure limits, batch expiry control, and GST dispatch.',
    relatedServiceSlugs: ['inventory-management-software', 'billing-accounting-software', 'crm-software-development', 'whatsapp-business-automation'],
    industriesBenefiting: [
      {slug: 'wholesale-distribution', label: 'Wholesale & Distribution', note: 'FMCG, pharma, hardware, and regional distribution hubs.'},
      {slug: 'industrial-suppliers-traders', label: 'Industrial Suppliers', note: 'Multi-godown stock and credit limit enforcement.'},
      {slug: 'steel-iron-industry', label: 'Steel & Iron Industry', note: 'TMT and structural steel trader dispatch control.'},
    ],
  },
  {
    slug: 'mandi-fruit-trading-software',
    name: 'Mandi & Fruit Trading Software',
    categoryId: 'software-development',
    categoryLabel: 'Software & ERP',
    heroSubtitle: 'High-speed lot auctions, farmer patti slips, plastic crate ledgers, commission calculations, and daily cash/bank books.',
    relatedServiceSlugs: ['billing-accounting-software', 'inventory-management-software', 'custom-software-development', 'whatsapp-business-automation'],
    relatedBlogSlugs: ['fruit-vegetable-mandi-billing-and-crate-tracking-software'],
    industriesBenefiting: [
      {slug: 'fruit-vegetable-mandis', label: 'Fruit & Vegetable Mandis', note: 'Commission agents, arhatiyas, and wholesale fruit yards.'},
      {slug: 'agriculture-agribusiness', label: 'Agriculture & Agribusiness', note: 'Grain traders, cold storages, and agro-commodity yards.'},
      {slug: 'wholesale-distribution', label: 'Wholesale & Distribution', note: 'Rapid multi-buyer daily settlement billing.'},
    ],
  },

  // 3. SEO, GEO & AEO
  {
    slug: 'search-engine-optimization',
    name: 'Search Engine Optimization (SEO)',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Technical crawl hygiene, high-intent service architecture, and authoritative content built for sustainable Google rankings.',
    relatedServiceSlugs: ['local-seo-services', 'geo-generative-engine-optimization', 'aeo-answer-engine-optimization', 'website-speed-optimization'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained', 'google-business-profile-optimization-for-local-indian-businesses'],
  },
  {
    slug: 'local-seo-services',
    name: 'Local SEO Services',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'City-level search visibility, Google Business Profile signals, and localized service landing pages across Chhattisgarh and India.',
    relatedServiceSlugs: ['google-business-profile-optimization', 'search-engine-optimization', 'geo-generative-engine-optimization', 'website-development-services'],
    relatedBlogSlugs: ['google-business-profile-optimization-for-local-indian-businesses', 'seo-vs-geo-vs-aeo-difference-explained'],
  },
  {
    slug: 'geo-generative-engine-optimization',
    name: 'GEO (Generative Engine Optimization)',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Entity clarity, verifiable facts, and structured authority so AI platforms (ChatGPT, Gemini, Perplexity) cite and recommend your brand.',
    relatedServiceSlugs: ['aeo-answer-engine-optimization', 'search-engine-optimization', 'corporate-website-development', 'content-marketing'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained'],
  },
  {
    slug: 'aeo-answer-engine-optimization',
    name: 'AEO (Answer Engine Optimization)',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Direct factual Q&A structuring, Schema.org FAQPage/Service graphs, and comparison tables built for zero-click and voice answers.',
    relatedServiceSlugs: ['geo-generative-engine-optimization', 'search-engine-optimization', 'content-marketing', 'website-development-services'],
    relatedBlogSlugs: ['seo-vs-geo-vs-aeo-difference-explained'],
  },
  {
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile Optimization',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Compliant GBP category tuning, authentic service-area configuration, review workflows, and local Maps pack visibility.',
    complianceNote: 'We strictly follow Google Business Profile guidelines—verifying genuine physical offices and authentic service areas without fake virtual pin spam.',
    relatedServiceSlugs: ['local-seo-services', 'search-engine-optimization', 'digital-marketing-services', 'whatsapp-business-automation'],
    relatedBlogSlugs: ['google-business-profile-optimization-for-local-indian-businesses'],
  },
  {
    slug: 'digital-marketing-services',
    name: 'Digital Marketing Services',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'ROI-focused B2B and regional growth campaigns combining search intent, conversion landing pages, and lead tracking.',
    relatedServiceSlugs: ['google-ads-management', 'social-media-marketing', 'search-engine-optimization', 'professional-landing-pages'],
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Product schema, category architecture, faceted crawl control, and commercial keyword capture for online stores.',
    relatedServiceSlugs: ['ecommerce-website-development', 'search-engine-optimization', 'website-speed-optimization', 'content-marketing'],
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Consistent B2B LinkedIn, Instagram, and regional social campaigns paired with cohesive creative assets.',
    relatedServiceSlugs: ['digital-creatives', 'digital-marketing-services', 'business-branding', 'whatsapp-business-automation'],
  },
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'High-intent search and local lead campaigns with negative keyword discipline and dedicated conversion landing pages.',
    relatedServiceSlugs: ['professional-landing-pages', 'digital-marketing-services', 'local-seo-services', 'crm-software-development'],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing & Technical Guides',
    categoryId: 'seo-digital-growth',
    categoryLabel: 'SEO, GEO & AEO',
    heroSubtitle: 'Authoritative technical articles, buyer comparisons, and Knowledge Centre pillars engineered for SEO, GEO, and AEO.',
    relatedServiceSlugs: ['geo-generative-engine-optimization', 'aeo-answer-engine-optimization', 'search-engine-optimization', 'business-branding'],
  },

  // 4. AI & Automation
  {
    slug: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Domain-grounded AI chat interfaces that answer product questions accurately and capture qualified buyer inquiries 24/7.',
    relatedServiceSlugs: ['website-ai-assistant', 'business-ai-integration', 'whatsapp-business-automation', 'crm-software-development'],
    relatedBlogSlugs: ['how-whatsapp-business-automation-helps-increase-lead-response'],
  },
  {
    slug: 'website-ai-assistant',
    name: 'Website AI Assistant',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Embedded website assistants trained on your approved catalog, service scope, and FAQs for instant visitor guidance.',
    relatedServiceSlugs: ['ai-chatbot-development', 'business-ai-integration', 'website-development-services', 'crm-software-development'],
  },
  {
    slug: 'business-ai-integration',
    name: 'Business AI Integration',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Server-side Gemini and LLM integrations for document summarization, RFQ classification, and internal knowledge search.',
    relatedServiceSlugs: ['ai-powered-business-solutions', 'workflow-automation', 'custom-software-development', 'erp-software-development'],
  },
  {
    slug: 'whatsapp-business-automation',
    name: 'WhatsApp Business Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Official WhatsApp Business API workflows for instant inquiry confirmations, invoice/challan dispatch, and AMC reminders.',
    complianceNote: 'Implemented using official Meta WhatsApp Business API guidelines and opt-in messaging templates to protect your business number.',
    relatedServiceSlugs: ['crm-software-development', 'erp-software-development', 'workflow-automation', 'ai-chatbot-development'],
    relatedBlogSlugs: ['how-whatsapp-business-automation-helps-increase-lead-response'],
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Connect website forms, ERPs, billing alerts, and approval notifications to eliminate repetitive data entry.',
    relatedServiceSlugs: ['business-ai-integration', 'whatsapp-business-automation', 'custom-software-development', 'erp-software-development'],
  },
  {
    slug: 'ai-powered-business-solutions',
    name: 'AI-Powered Business Solutions',
    categoryId: 'ai-automation',
    categoryLabel: 'AI & Automation',
    heroSubtitle: 'Practical enterprise AI pipelines designed around measurable time savings, accuracy, and human-in-the-loop governance.',
    relatedServiceSlugs: ['business-ai-integration', 'workflow-automation', 'ai-chatbot-development', 'custom-software-development'],
  },

  // 5. Creative & Branding
  {
    slug: 'brand-identity',
    name: 'Brand Identity Design',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    heroSubtitle: 'Cohesive typography, color systems, and visual guidelines that project enterprise authority across web and print.',
    relatedServiceSlugs: ['business-branding', 'logo-design', 'website-design-services', 'digital-creatives'],
  },
  {
    slug: 'business-branding',
    name: 'Business Branding',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    heroSubtitle: 'Strategic positioning, B2B company profiles, product catalogs, and visual consistency for growing Indian companies.',
    relatedServiceSlugs: ['brand-identity', 'corporate-website-development', 'logo-design', 'professional-landing-pages'],
  },
  {
    slug: 'logo-design',
    name: 'Logo & Graphic Design',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    heroSubtitle: 'Scalable vector logos, industrial marks, and clean graphic systems built for signage, software headers, and digital media.',
    relatedServiceSlugs: ['brand-identity', 'business-branding', 'digital-creatives', 'website-design-services'],
  },
  {
    slug: 'digital-creatives',
    name: 'Digital & Social Creatives',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    heroSubtitle: 'Campaign visuals, product announcement graphics, and ad creatives aligned with your brand architecture.',
    relatedServiceSlugs: ['social-media-marketing', 'brand-identity', 'professional-landing-pages', 'digital-marketing-services'],
  },
  {
    slug: 'professional-landing-pages',
    name: 'Professional Landing Pages',
    categoryId: 'creative-branding',
    categoryLabel: 'Creative & Branding',
    heroSubtitle: 'Focused, high-speed campaign and product landing pages built to convert Google Ads and B2B outreach traffic.',
    relatedServiceSlugs: ['google-ads-management', 'website-design-services', 'website-speed-optimization', 'crm-software-development'],
  },

  // 6. IT & Cloud Support
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    heroSubtitle: 'Dependable VPS and cloud infrastructure provisioning, reverse-proxy SSL setup, and database persistence for enterprise apps.',
    relatedServiceSlugs: ['server-deployment-support', 'security-backup-support', 'erp-software-development', 'website-hosting-support'],
  },
  {
    slug: 'website-hosting-support',
    name: 'Website Hosting Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    heroSubtitle: 'Managed hosting migrations, Nginx/Node runtime setup, SSL certificate automation, and uptime diagnostics.',
    relatedServiceSlugs: ['domain-hosting-assistance', 'server-deployment-support', 'website-maintenance-support', 'website-speed-optimization'],
  },
  {
    slug: 'domain-hosting-assistance',
    name: 'Domain & DNS Assistance',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    heroSubtitle: 'Clean DNS zone management, SPF/DKIM/DMARC email authentication, SSL verification, and zero-downtime domain transfers.',
    relatedServiceSlugs: ['website-hosting-support', 'security-backup-support', 'corporate-website-development', 'cloud-solutions'],
  },
  {
    slug: 'server-deployment-support',
    name: 'Server Deployment Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    heroSubtitle: 'Production Node.js, SSR, and PostgreSQL/SQLite VPS deployments with process managers, firewall rules, and health checks.',
    relatedServiceSlugs: ['cloud-solutions', 'security-backup-support', 'custom-web-application-development', 'website-hosting-support'],
  },
  {
    slug: 'security-backup-support',
    name: 'Security & Backup Support',
    categoryId: 'it-cloud-support',
    categoryLabel: 'IT & Cloud Support',
    heroSubtitle: 'Automated off-site database snapshots, rate-limiting hardening, SSL enforcement, and recovery testing.',
    relatedServiceSlugs: ['server-deployment-support', 'website-maintenance-support', 'cloud-solutions', 'erp-software-development'],
  },
];

export const ALL_SERVICES: ServicePageData[] = SERVICE_SEEDS.map(buildServicePage);

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return ALL_SERVICES.find((item) => item.slug === slug);
}

export function getServicesByCategory(categoryId: ServiceCategoryId): ServicePageData[] {
  return ALL_SERVICES.filter((item) => item.categoryId === categoryId);
}
