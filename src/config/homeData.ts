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
  image: string;
  webpImage?: string;
  alt: string;
  href: string;
  ctaLabel: string;
  icon: ServiceIconKey;
}

export interface IndustryCardItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  webpImage?: string;
  alt: string;
  href: string;
  ctaLabel: string;
}

export interface SolarVisualServiceItem {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  image: string;
  webpImage: string;
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
  quotePrefillService?: string;
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

export interface HeroSlideItem {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  supportingContext: string;
  image: string;
  webpImage: string;
  imageAlt: string;
  primaryCta: {
    label: string;
    href: string;
    quotePrefillService?: string;
    quotePrefillIndustry?: string;
  };
  secondaryCta: {
    label: string;
    href: string;
    quotePrefillService?: string;
    quotePrefillIndustry?: string;
  };
}

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 'custom-software-erp',
    eyebrow: 'Klyia Technology · Bhilai · Custom Software & ERP',
    headline: 'Smart Software Solutions for Growing Businesses',
    description:
      'Custom software, ERP systems and business automation solutions designed to simplify operations and improve productivity.',
    supportingContext:
      'Headquartered in Risali, Bhilai — serving steel plants, manufacturers, distributors, and enterprises across Chhattisgarh and India with reliable workflow tracking and GST billing.',
    image: '/src/assets/images/banner_custom_software_1795011262154.jpg',
    webpImage: '/src/assets/images/banner_custom_software_1795011262154.webp',
    imageAlt:
      'Custom software engineering and enterprise ERP dashboard architecture by Klyia Technology in Bhilai',
    primaryCta: {
      label: 'Explore Our Services',
      href: ROUTES.SERVICES,
    },
    secondaryCta: {
      label: 'Request a Quote',
      href: ROUTES.GET_A_QUOTE,
      quotePrefillService: 'Custom Software Development',
    },
  },
  {
    id: 'solar-erp-epc',
    eyebrow: 'Solar ERP · Solar EPC Software & Project Tracking',
    headline: 'Powering Solar Businesses with Smarter Technology',
    description:
      'Manage solar projects, EPC operations, workflows and business processes with intelligent software solutions.',
    supportingContext:
      'Dedicated Solar ERP modules for rooftop site surveys, BOM & panel serial tracking, DISCOM net-metering stages, subsidy logs, and automated AMC alerts.',
    image: '/src/assets/images/solar_rooftop_installation_1795089423468.jpg',
    webpImage: '/src/assets/images/solar_rooftop_installation_1795089423468.webp',
    imageAlt:
      'Solar EPC rooftop solar installation coordinated with Solar ERP milestone and BOM tracking software',
    primaryCta: {
      label: 'Explore Solar ERP',
      href: '/services/solar-erp-software/',
    },
    secondaryCta: {
      label: 'Request a Quote',
      href: ROUTES.GET_A_QUOTE,
      quotePrefillService: 'Solar ERP',
      quotePrefillIndustry: 'Solar & Renewable Energy',
    },
  },
  {
    id: 'industrial-manufacturing-erp',
    eyebrow: 'Industrial ERP · Steel, Rolling Mills & Manufacturing',
    headline: 'Digital Solutions for Modern Industries',
    description:
      'Industry-focused ERP and custom software solutions for manufacturing, steel, wholesale and industrial businesses.',
    supportingContext:
      'Built around real shop-floor and yard operations in Bhilai, Raipur, and industrial clusters — covering dual MT/bundle units, BOMs, weighbridge dispatch, and credit controls.',
    image: '/src/assets/images/industry_steel_iron_1795005438477.jpg',
    webpImage: '/src/assets/images/industry_steel_iron_1795005438477.webp',
    imageAlt:
      'Steel plant, rolling mill, and modern industrial manufacturing ERP systems in Bhilai',
    primaryCta: {
      label: 'Explore Our Services',
      href: ROUTES.SERVICES,
    },
    secondaryCta: {
      label: 'Contact Klyia Technology',
      href: ROUTES.CONTACT,
    },
  },
  {
    id: 'web-local-seo-geo',
    eyebrow: 'Website Development · Local SEO · GEO & Structured Data',
    headline: 'Build Your Digital Presence. Grow Your Business.',
    description:
      'Professional website development, Local SEO, GEO and AI search optimization for businesses.',
    supportingContext:
      'Fast server-rendered React websites engineered with clean Structured Data, Local SEO map alignment, GEO entity clarity, and conversion tracking.',
    image: '/src/assets/images/banner_web_design_ui_1795011263002.jpg',
    webpImage: '/src/assets/images/banner_web_design_ui_1795011263002.webp',
    imageAlt:
      'Responsive corporate website development, Local SEO, GEO, and structured analytics interface',
    primaryCta: {
      label: 'Explore Our Services',
      href: ROUTES.SERVICES,
    },
    secondaryCta: {
      label: 'Contact Klyia Technology',
      href: ROUTES.CONTACT,
    },
  },
];

export const HERO_CONTENT = HERO_SLIDES[0];

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
    image: '/src/assets/images/banner_web_design_ui_1795011263002.jpg',
    webpImage: '/src/assets/images/banner_web_design_ui_1795011263002.webp',
    alt: 'Responsive corporate website design and enterprise UI workstation across dual monitors',
    href: '/services/website-development-services/',
    ctaLabel: 'Website Development Services',
    icon: 'globe',
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'Tailored web applications, internal portals, and operational tools engineered to fit your exact business logic and compliance needs.',
    image: '/src/assets/images/banner_custom_software_1795011262154.jpg',
    webpImage: '/src/assets/images/banner_custom_software_1795011262154.webp',
    alt: 'Software engineer building custom software architecture and modular API workflows on dual screens',
    href: '/services/custom-software-development/',
    ctaLabel: 'Custom Software Solutions',
    icon: 'code',
  },
  {
    id: 'erp-software-solutions',
    title: 'ERP Software Solutions',
    description:
      'Integrated modules for procurement, inventory, production planning, GST billing, dispatch, and financial oversight.',
    image: '/src/assets/images/banner_erp_dashboard_1795011261980.jpg',
    webpImage: '/src/assets/images/banner_erp_dashboard_1795011261980.webp',
    alt: 'Enterprise ERP dashboard displaying resource planning, supply chain telemetry, and inventory controls',
    href: '/services/erp-software-development/',
    ctaLabel: 'ERP Software',
    icon: 'layers',
  },
  {
    id: 'seo-local-seo',
    title: 'SEO & Local SEO',
    description:
      'Technical search optimization, Local SEO regional architecture, Google Business Profile alignment, and Google Search Console & conversion tracking.',
    image: '/src/assets/images/banner_seo_geo_analytics_1795011262658.jpg',
    webpImage: '/src/assets/images/banner_seo_geo_analytics_1795011262658.webp',
    alt: 'Local SEO specialists reviewing regional visibility metrics, conversion tracking, and search analytics',
    href: '/services/search-engine-optimization/',
    ctaLabel: 'Explore SEO Services',
    icon: 'search',
  },
  {
    id: 'geo-aeo-optimization',
    title: 'GEO & AEO Optimization',
    description:
      'Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and clean Schema.org Structured Data built for AI search clarity.',
    image: '/src/assets/images/service_geo_ai_search_1795094381846.jpg',
    webpImage: '/src/assets/images/service_geo_ai_search_1795094381846.webp',
    alt: 'GEO Generative Engine Optimization and Structured Data knowledge graph analytics monitor',
    href: '/services/geo-generative-engine-optimization/',
    ctaLabel: 'GEO & AEO Services',
    icon: 'compass',
  },
  {
    id: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    description:
      'Practical AI workflows for document processing, customer inquiry triage, knowledge retrieval, and operational task automation.',
    image: '/src/assets/images/banner_ai_automation_1795011264247.jpg',
    webpImage: '/src/assets/images/banner_ai_automation_1795011264247.webp',
    alt: 'Modular AI workflow nodes and automated enterprise data processing circuit architecture',
    href: '/services/business-ai-integration/',
    ctaLabel: 'AI Integration Services',
    icon: 'cpu',
  },
  {
    id: 'whatsapp-business-automation',
    title: 'WhatsApp Business Automation',
    description:
      'Automated order alerts, dispatch notifications, lead qualification flows, and catalog support integrated directly with your systems.',
    image: '/src/assets/images/service_whatsapp_automation_1795094382616.jpg',
    webpImage: '/src/assets/images/service_whatsapp_automation_1795094382616.webp',
    alt: 'Automated WhatsApp Business order confirmation and dispatch alert workflow across desktop and smartphone',
    href: '/services/whatsapp-business-automation/',
    ctaLabel: 'WhatsApp Automation Services',
    icon: 'message',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Measurable B2B and regional growth campaigns connecting high-intent search traffic with structured landing experiences.',
    image: '/src/assets/images/banner_digital_marketing_1795011263951.jpg',
    webpImage: '/src/assets/images/banner_digital_marketing_1795011263951.webp',
    alt: 'Digital marketing team analyzing omnichannel conversion funnels and audience engagement timelines',
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
    webpImage: '/src/assets/images/industry_steel_iron_1795005438477.webp',
    alt: 'Modern steel and iron rolling plant with precision-rolled steel coils and structural beams',
    href: '/industries/steel-iron-industry/',
    ctaLabel: 'Steel Industry Solutions',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    summary: 'Bill of Materials, shop-floor scheduling, quality checks, and raw-material inventory control.',
    image: '/src/assets/images/industry_manufacturing_1795005439101.jpg',
    webpImage: '/src/assets/images/industry_manufacturing_1795005439101.webp',
    alt: 'Clean precision engineering and CNC manufacturing facility floor',
    href: '/industries/manufacturing-engineering/',
    ctaLabel: 'Manufacturing Solutions',
  },
  {
    id: 'solar-renewable-energy',
    title: 'Solar & Renewable Energy',
    summary: 'Solar EPC lead pipelines, site survey workflows, subsidy documentation, and AMC tracking.',
    image: '/src/assets/images/industry_solar_energy_1795005439181.jpg',
    webpImage: '/src/assets/images/industry_solar_energy_1795005439181.webp',
    alt: 'Commercial utility-scale solar photovoltaic array under clear morning light',
    href: '/industries/solar-renewable-energy/',
    ctaLabel: 'Solar EPC Solutions',
  },
  {
    id: 'industrial-suppliers',
    title: 'Industrial Suppliers',
    summary: 'Structured B2B product catalogs, multi-warehouse stock alerts, and RFQ automation.',
    image: '/src/assets/images/industry_suppliers_1795005439442.jpg',
    webpImage: '/src/assets/images/industry_suppliers_1795005439442.webp',
    alt: 'Organized industrial hardware and engineering parts supply warehouse',
    href: '/industries/industrial-suppliers-traders/',
    ctaLabel: 'Industrial Supplier Solutions',
  },
  {
    id: 'wholesale-distribution',
    title: 'Wholesale & Distribution',
    summary: 'Order booking apps, credit limit controls, batch dispatch, and GST-compliant invoicing.',
    image: '/src/assets/images/industry_wholesale_1795005440370.jpg',
    webpImage: '/src/assets/images/industry_wholesale_1795005440370.webp',
    alt: 'Wholesale logistics and high-bay distribution center aisles',
    href: '/industries/wholesale-distribution/',
    ctaLabel: 'Wholesale Distribution Solutions',
  },
  {
    id: 'agriculture-mandi',
    title: 'Fruit & Vegetable Mandis',
    summary: 'Commodity arrival registers, mandi auction billing, crate books, and farmer patti slips.',
    image: '/src/assets/images/industry_fruit_vegetable_mandi_1795094382494.jpg',
    webpImage: '/src/assets/images/industry_fruit_vegetable_mandi_1795094382494.webp',
    alt: 'Wholesale fruit and vegetable mandi produce yard with stacked crates and morning trading operations',
    href: '/industries/fruit-vegetable-mandis/',
    ctaLabel: 'Mandi Software Solutions',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    summary: 'Appointment portals, diagnostic scheduling, patient communication, and local search growth.',
    image: '/src/assets/images/industry_healthcare_1795005440398.jpg',
    webpImage: '/src/assets/images/industry_healthcare_1795005440398.webp',
    alt: 'Clean modern hospital diagnostic center and reception interior',
    href: '/industries/healthcare-clinics/',
    ctaLabel: 'Healthcare Digital Solutions',
  },
  {
    id: 'education',
    title: 'Education',
    summary: 'Admissions workflows, institutional portals, fee management, and digital discovery.',
    image: '/src/assets/images/industry_education_1795005440945.jpg',
    webpImage: '/src/assets/images/industry_education_1795005440945.webp',
    alt: 'Modern university academic building and digital learning library',
    href: '/industries/education-training-institutes/',
    ctaLabel: 'Education Portal Solutions',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    summary: 'Project showcase websites, unit availability tracking, CRM follow-ups, and site-visit booking.',
    image: '/src/assets/images/industry_real_estate_1795005441185.jpg',
    webpImage: '/src/assets/images/industry_real_estate_1795005441185.webp',
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
    ctaLabel: 'Industrial Steel ERP',
    quoteHref: ROUTES.GET_A_QUOTE,
    quotePrefillService: 'Industrial ERP',
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
    ctaLabel: 'Solar ERP Software',
    quoteHref: ROUTES.GET_A_QUOTE,
    quotePrefillService: 'Solar ERP',
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

export const SOLAR_CORE_VISUAL_SERVICES: SolarVisualServiceItem[] = [
  {
    id: 'solar-rooftop-installation',
    title: 'Solar Panel Installation & Rooftop Solar Systems',
    summary:
      'Structured enquiry websites, kW roof-sizing intakes, and mobile field survey checklists built for residential and commercial rooftop solar installation teams.',
    highlights: [
      'Sanctioned load & electricity bill enquiry capture',
      'Subsidy workflow documentation & customer milestone logs',
    ],
    image: '/src/assets/images/solar_rooftop_installation_1795089423468.jpg',
    webpImage: '/src/assets/images/solar_rooftop_installation_1795089423468.webp',
    alt: 'Solar EPC technicians installing monocrystalline solar panel arrays on a commercial rooftop',
    href: '/industries/solar-renewable-energy/',
    ctaLabel: 'Rooftop Solar EPC Workflows',
  },
  {
    id: 'solar-epc-ci-installations',
    title: 'Solar EPC Project Execution & C&I Installations',
    summary:
      'Coordinate multi-megawatt commercial and industrial solar installations across engineering approvals, DISCOM net-metering, procurement, and site commissioning.',
    highlights: [
      'C&I proposal generation & technical BOM estimation',
      'DISCOM net-metering & CEIG inspection stage tracking',
    ],
    image: '/src/assets/images/solar_ci_infrastructure_1795089432688.jpg',
    webpImage: '/src/assets/images/solar_ci_infrastructure_1795089432688.webp',
    alt: 'Aerial view of a commercial and industrial solar power plant installation over an industrial facility',
    href: '/services/crm-software-development/',
    ctaLabel: 'Solar EPC CRM Systems',
  },
  {
    id: 'solar-project-erp-dashboards',
    title: 'Solar Project Management & Solar ERP Dashboards',
    summary:
      'Unified Solar ERP software tracking panel and inverter serial numbers, Bill of Materials stock issues, vendor POs, GST invoicing, and stage-wise profitability.',
    highlights: [
      'PV module, inverter & BOS inventory reconciliation',
      'Site-wise expense vs contract margin visibility',
    ],
    image: '/src/assets/images/solar_erp_dashboard_1795089432209.jpg',
    webpImage: '/src/assets/images/solar_erp_dashboard_1795089432209.webp',
    alt: 'Solar ERP project management dashboard showing kW capacity milestones, BOM stock, and DISCOM status',
    href: '/services/solar-erp-software/',
    ctaLabel: 'Explore Solar ERP Software',
  },
  {
    id: 'solar-monitoring-amc',
    title: 'Solar Monitoring, Maintenance & Renewable Infrastructure',
    summary:
      'Post-commissioning AMC schedules, preventive string-cleaning calendars, inverter service ticketing, and automated WhatsApp customer notifications.',
    highlights: [
      'Annual Maintenance Contract & warranty claim history',
      'Automated WhatsApp project stage & service reminders',
    ],
    image: '/src/assets/images/solar_monitoring_maintenance_1795089423677.jpg',
    webpImage: '/src/assets/images/solar_monitoring_maintenance_1795089423677.webp',
    alt: 'Solar engineer inspecting commercial string inverters and renewable energy diagnostics at a solar plant',
    href: '/services/whatsapp-business-automation/',
    ctaLabel: 'Solar Service & WhatsApp Alerts',
  },
];

