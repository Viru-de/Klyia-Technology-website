import {ROUTES} from './routes.ts';

export type ServiceIconKey =
  | 'globe'
  | 'code'
  | 'layers'
  | 'search'
  | 'compass'
  | 'cpu'
  | 'message'
  | 'trending';

export interface CoreServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: ServiceIconKey;
}

export interface IndustryCardItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  href: string;
  ctaLabel: string;
}

export interface TechnologySolutionItem {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
  href: string;
  ctaLabel: string;
  quoteHref?: string;
  quoteLabel?: string;
  featured?: boolean;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

export interface LocationCoverageItem {
  id: string;
  region: string;
  scope: string;
  description: string;
  href: string;
  isHeadquarters?: boolean;
}

export const HERO_CONTENT = {
  image: '/src/assets/images/hero_obsidian_tech_1795006489528.jpg',
  imageAlt:
    'Architectural 3D representation of Klyia Technology modular ERP systems, enterprise software architecture, and automated industrial data pipelines',
  headline: 'Technology That Moves Your Business Forward.',
  supportingText:
    'Empowering businesses with custom software, intelligent ERP systems, AI-driven solutions, and modern search growth strategies.',
  description:
    'From Steel & Solar ERP automation and custom software to fast websites, SEO, GEO, AEO, and AI workflows, Klyia Technology builds digital systems across Bhilai, Chhattisgarh, and India.',
  primaryCta: {label: 'Explore Our Solutions', href: ROUTES.SERVICES},
  secondaryCta: {label: 'Discuss Your Project', href: ROUTES.GET_A_QUOTE},
} as const;

export const TRUST_PILLARS = [
  {
    title: 'Operational Alignment',
    description:
      'Software and workflows modeled around how manufacturers, distributors, and service teams actually operate on the ground.',
  },
  {
    title: 'Engineered Reliability',
    description:
      'Maintainable TypeScript architectures, structured data practices, and clean integrations built for daily commercial workloads.',
  },
  {
    title: 'Search-Ready Foundations',
    description:
      'Server-rendered web platforms engineered from day one for technical SEO, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO).',
  },
  {
    title: 'Direct Engineering Partnership',
    description:
      'Clear communication, transparent scoping, and direct technical accountability from our team in Bhilai to businesses across India.',
  },
] as const;

export const ABOUT_PREVIEW_POINTS = [
  {
    title: 'Understanding Business Requirements',
    description:
      'Every engagement starts by mapping your operational bottlenecks, billing rules, approval chains, and customer touchpoints.',
  },
  {
    title: 'Building Custom Solutions',
    description:
      'Instead of forcing teams into rigid off-the-shelf templates, we engineer software and ERP modules shaped around your exact workflow.',
  },
  {
    title: 'Modernizing Business Operations',
    description:
      'Replace fragmented spreadsheets and manual follow-ups with unified dashboards, inventory tracking, and automated reporting.',
  },
  {
    title: 'Improving Online Visibility',
    description:
      'Establish authoritative search presence across Google, local maps, and AI-driven answer engines so buyers find you first.',
  },
  {
    title: 'Supporting Long-Term Digital Growth',
    description:
      'Our systems are architected cleanly to scale alongside new branches, product lines, and automation requirements.',
  },
] as const;

export const CORE_SERVICES: CoreServiceItem[] = [
  {
    id: 'website-design-development',
    title: 'Website Design & Development',
    description:
      'Fast, server-rendered corporate websites, B2B portals, and e-commerce platforms built for credibility, accessibility, and lead conversion.',
    href: '/services/website-development-services/',
    ctaLabel: 'Website Development Services',
    icon: 'globe',
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'Tailored web applications, internal portals, and operational tools engineered to fit your exact business logic and compliance needs.',
    href: '/services/custom-software-development/',
    ctaLabel: 'Custom Software Solutions',
    icon: 'code',
  },
  {
    id: 'erp-software-solutions',
    title: 'ERP Software Solutions',
    description:
      'Integrated modules for procurement, inventory, production planning, GST billing, dispatch, and financial oversight.',
    href: '/services/erp-software-development/',
    ctaLabel: 'ERP Software',
    icon: 'layers',
  },
  {
    id: 'seo-local-seo',
    title: 'SEO & Local SEO',
    description:
      'Technical search optimization, regional keyword architecture, and Google Business Profile strategies that bring qualified local and national inquiries.',
    href: '/services/search-engine-optimization/',
    ctaLabel: 'Explore SEO Services',
    icon: 'search',
  },
  {
    id: 'geo-aeo-optimization',
    title: 'GEO & AEO Optimization',
    description:
      'Structured entities, schema architecture, and authoritative content designed for AI search engines and answer-first discovery.',
    href: '/services/geo-generative-engine-optimization/',
    ctaLabel: 'GEO & AEO Services',
    icon: 'compass',
  },
  {
    id: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    description:
      'Practical AI workflows for document processing, customer inquiry triage, knowledge retrieval, and operational task automation.',
    href: '/services/business-ai-integration/',
    ctaLabel: 'AI Integration Services',
    icon: 'cpu',
  },
  {
    id: 'whatsapp-business-automation',
    title: 'WhatsApp Business Automation',
    description:
      'Automated order alerts, dispatch notifications, lead qualification flows, and catalog support integrated directly with your systems.',
    href: '/services/whatsapp-business-automation/',
    ctaLabel: 'WhatsApp Automation Services',
    icon: 'message',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Measurable B2B and regional growth campaigns connecting high-intent search traffic with structured landing experiences.',
    href: '/services/digital-marketing-services/',
    ctaLabel: 'Digital Marketing Services',
    icon: 'trending',
  },
];

export const HOME_INDUSTRIES: IndustryCardItem[] = [
  {
    id: 'steel-iron',
    title: 'Steel & Iron',
    summary: 'Plant production logs, weighbridge integration, dispatch tracking, and dealer billing ERP.',
    image: '/src/assets/images/industry_steel_iron_1795005438477.jpg',
    alt: 'Modern steel and iron rolling plant with precision-rolled steel coils and structural beams',
    href: '/industries/steel-iron-industry/',
    ctaLabel: 'Steel Industry Solutions',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    summary: 'Bill of Materials, shop-floor scheduling, quality checks, and raw-material inventory control.',
    image: '/src/assets/images/industry_manufacturing_1795005439101.jpg',
    alt: 'Clean precision engineering and CNC manufacturing facility floor',
    href: '/industries/manufacturing-engineering/',
    ctaLabel: 'Manufacturing Solutions',
  },
  {
    id: 'solar-renewable-energy',
    title: 'Solar & Renewable Energy',
    summary: 'Solar EPC lead pipelines, site survey workflows, subsidy documentation, and AMC tracking.',
    image: '/src/assets/images/industry_solar_energy_1795005439181.jpg',
    alt: 'Commercial utility-scale solar photovoltaic array under clear morning light',
    href: '/industries/solar-renewable-energy/',
    ctaLabel: 'Solar EPC Solutions',
  },
  {
    id: 'industrial-suppliers',
    title: 'Industrial Suppliers',
    summary: 'Structured B2B product catalogs, multi-warehouse stock alerts, and RFQ automation.',
    image: '/src/assets/images/industry_suppliers_1795005439442.jpg',
    alt: 'Organized industrial hardware and engineering parts supply warehouse',
    href: '/industries/industrial-suppliers-traders/',
    ctaLabel: 'Industrial Supplier Solutions',
  },
  {
    id: 'wholesale-distribution',
    title: 'Wholesale & Distribution',
    summary: 'Order booking apps, credit limit controls, batch dispatch, and GST-compliant invoicing.',
    image: '/src/assets/images/industry_wholesale_1795005440370.jpg',
    alt: 'Wholesale logistics and high-bay distribution center aisles',
    href: '/industries/wholesale-distribution/',
    ctaLabel: 'Wholesale Distribution Solutions',
  },
  {
    id: 'agriculture-mandi',
    title: 'Fruit & Vegetable Mandis',
    summary: 'Commodity arrival registers, mandi auction billing, crate books, and farmer patti slips.',
    image: '/src/assets/images/industry_agriculture_mandi_1795005439749.jpg',
    alt: 'Agricultural commodity trading yard and grain storage silos in daylight',
    href: '/industries/fruit-vegetable-mandis/',
    ctaLabel: 'Mandi Software Solutions',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    summary: 'Appointment portals, diagnostic scheduling, patient communication, and local search growth.',
    image: '/src/assets/images/industry_healthcare_1795005440398.jpg',
    alt: 'Clean modern hospital diagnostic center and reception interior',
    href: '/industries/healthcare-clinics/',
    ctaLabel: 'Healthcare Digital Solutions',
  },
  {
    id: 'education',
    title: 'Education',
    summary: 'Admissions workflows, institutional portals, fee management, and digital discovery.',
    image: '/src/assets/images/industry_education_1795005440945.jpg',
    alt: 'Modern university academic building and digital learning library',
    href: '/industries/education-training-institutes/',
    ctaLabel: 'Education Portal Solutions',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    summary: 'Project showcase websites, unit availability tracking, CRM follow-ups, and site-visit booking.',
    image: '/src/assets/images/industry_real_estate_1795005441185.jpg',
    alt: 'Contemporary commercial and residential architectural complex with landscaped courtyard',
    href: '/industries/real-estate-construction/',
    ctaLabel: 'Real Estate Digital Solutions',
  },
];

export const TECHNOLOGY_SOLUTIONS: TechnologySolutionItem[] = [
  {
    id: 'industrial-erp',
    title: 'Industrial ERP',
    summary:
      'End-to-end operational control tailored for steel plants, fabrication units, and manufacturing facilities.',
    capabilities: [
      'Raw material procurement & GRN',
      'Production batch & scrap tracking',
      'Weighbridge, e-Way bill & GST dispatch',
    ],
    href: '/industries/steel-iron-industry/',
    ctaLabel: 'Steel ERP Architecture',
    quoteHref: '/get-a-quote/?service=Industrial+ERP',
    quoteLabel: 'Scope Industrial ERP',
    featured: true,
  },
  {
    id: 'solar-erp',
    title: 'Solar ERP',
    summary:
      'Dedicated workflow management built for residential, commercial, and industrial solar EPC companies.',
    capabilities: [
      'Lead qualification & site survey logs',
      'Subsidy, net-metering & BOM tracking',
      'Installation milestones & AMC alerts',
    ],
    href: '/services/solar-erp-software/',
    ctaLabel: 'Solar ERP',
    quoteHref: '/get-a-quote/?service=Solar+ERP',
    quoteLabel: 'Scope Solar ERP',
    featured: true,
  },
  {
    id: 'business-management-systems',
    title: 'Business Management Systems',
    summary:
      'Unified CRM, inventory, invoicing, and team accountability portals built for growing enterprises.',
    capabilities: [
      'Role-based access & approval flows',
      'Multi-branch stock & ledger visibility',
      'Automated reporting dashboards',
    ],
    href: '/services/business-management-software/',
    ctaLabel: 'Business Management Software',
  },
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    summary:
      'Server-rendered, fast-loading web platforms and client portals engineered for security and long-term scale.',
    capabilities: [
      'Responsive enterprise UI architecture',
      'API & payment gateway integrations',
      'Clean TypeScript & modular codebases',
    ],
    href: '/services/custom-web-application-development/',
    ctaLabel: 'Custom Web Applications',
  },
  {
    id: 'ai-powered-automation',
    title: 'AI-Powered Automation',
    summary:
      'Intelligent workflow routing, WhatsApp assistants, and document automation that reduce repetitive manual work.',
    capabilities: [
      'WhatsApp Business API notifications',
      'AI-assisted inquiry & support routing',
      'Automated invoice & data extraction',
    ],
    href: '/services/ai-powered-business-solutions/',
    ctaLabel: 'AI Business Automation',
  },
  {
    id: 'digital-growth-solutions',
    title: 'Digital Growth Solutions',
    summary:
      'Technical SEO, Local SEO, GEO, and AEO systems designed to capture high-intent search and AI-engine visibility.',
    capabilities: [
      'Structured Schema.org & entity clarity',
      'Regional & national search architecture',
      'Conversion-focused landing systems',
    ],
    href: '/services/search-engine-optimization/',
    ctaLabel: 'SEO & Search Growth',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'business-focused',
    title: 'Business-Focused Development',
    description:
      'Every technical decision is tied to measurable operational clarity, faster turnaround, or customer acquisition.',
  },
  {
    id: 'custom-built',
    title: 'Custom-Built Solutions',
    description:
      'We design around your real pricing rules, tax workflows, and approval hierarchies instead of generic templates.',
  },
  {
    id: 'industry-understanding',
    title: 'Industry-Specific Understanding',
    description:
      'Grounded familiarity with manufacturing, steel, solar EPC, wholesale trade, and regional service businesses.',
  },
  {
    id: 'modern-technology',
    title: 'Modern Technology',
    description:
      'TypeScript, React SSR, Node.js architectures, and practical AI tooling built for performance and maintainability.',
  },
  {
    id: 'seo-first',
    title: 'SEO-First Website Architecture',
    description:
      'Semantic HTML, clean heading hierarchy, fast Core Web Vitals, and structured metadata embedded from the ground up.',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Technical Support',
    description:
      'Reliable post-launch maintenance, feature iterations, and responsive engineering assistance as your business evolves.',
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Audit current workflows, business goals, and technical constraints.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define system architecture, data models, milestones, and SEO structure.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Craft intuitive interfaces, role dashboards, and responsive layouts.',
  },
  {
    step: '04',
    title: 'Develop',
    description: 'Engineer clean, modular software, ERP modules, and integrations.',
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Verify performance, security, SSL, and search indexing for production.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Deliver ongoing updates, monitoring, and long-term enhancements.',
  },
];

export const LOCATION_COVERAGES: LocationCoverageItem[] = [
  {
    id: 'bhilai',
    region: 'Bhilai',
    scope: 'Headquarters · On-Site & Direct Consultation',
    description:
      'Our sole physical office is located in Risali, Bhilai—enabling close on-site collaboration with steel, manufacturing, solar, and commercial enterprises across the city.',
    href: '/locations/website-development-company-in-bhilai/',
    isHeadquarters: true,
  },
  {
    id: 'durg',
    region: 'Durg',
    scope: 'Twin-City Industrial & Commercial Corridor',
    description:
      'Direct implementation and support for traders, industrial suppliers, healthcare clinics, and educational institutions across Durg.',
    href: '/locations/website-development-company-in-durg/',
  },
  {
    id: 'raipur',
    region: 'Raipur',
    scope: 'Capital Enterprise & Distribution Hub',
    description:
      'Serving corporate offices, wholesale distributors, real estate developers, and manufacturing groups across Raipur and Siltara/Urla industrial belts.',
    href: '/locations/website-development-company-in-raipur/',
  },
  {
    id: 'chhattisgarh',
    region: 'Chhattisgarh',
    scope: 'Statewide Industrial & Agro-Trade Systems',
    description:
      'Delivering ERP, mandi software, and digital growth frameworks for growing enterprises across Bilaspur, Korba, Raigarh, and Rajnandgaon.',
    href: '/locations/it-software-solutions-in-chhattisgarh/',
  },
  {
    id: 'india',
    region: 'India',
    scope: 'Pan-India Remote Engineering & Delivery',
    description:
      'Structured remote discovery, cloud deployment, custom software engineering, and SEO/GEO programs for businesses across India.',
    href: '/locations/custom-software-development-services-in-india/',
  },
];
