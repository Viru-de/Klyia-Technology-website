import {ROUTES} from './routes.ts';

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: 'services' | 'industries';
}

export interface MegaMenuServiceItem {
  label: string;
  href: string;
}

export interface MegaMenuServiceColumn {
  heading: string;
  href: string;
  items: MegaMenuServiceItem[];
}

export interface MegaMenuIndustryItem {
  title: string;
  description: string;
  href: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  {label: 'Home', href: ROUTES.HOME},
  {label: 'About Us', href: ROUTES.ABOUT},
  {label: 'Services', href: ROUTES.SERVICES, hasMegaMenu: 'services'},
  {label: 'Industries', href: ROUTES.INDUSTRIES, hasMegaMenu: 'industries'},
  {label: 'Our Work', href: ROUTES.OUR_WORK},
  {label: 'Blog', href: ROUTES.INSIGHTS},
  {label: 'Contact Us', href: ROUTES.CONTACT},
];

export const HEADER_CTA = {
  label: 'Get a Quote',
  href: ROUTES.GET_A_QUOTE,
} as const;

export const SERVICES_MEGA_MENU: MegaMenuServiceColumn[] = [
  {
    heading: 'Web Solutions',
    href: `${ROUTES.SERVICES}#web-solutions`,
    items: [
      {label: 'Website Design Services', href: '/services/website-design-services/'},
      {label: 'Website Development Services', href: '/services/website-development-services/'},
      {label: 'Corporate Website Development', href: '/services/corporate-website-development/'},
      {label: 'E-commerce Website Development', href: '/services/ecommerce-website-development/'},
      {label: 'React Website Development', href: '/services/react-website-development/'},
      {label: 'Website Speed Optimization', href: '/services/website-speed-optimization/'},
    ],
  },
  {
    heading: 'Software & ERP',
    href: `${ROUTES.SERVICES}#software-development`,
    items: [
      {label: 'Custom Software Development', href: '/services/custom-software-development/'},
      {label: 'ERP Software Development', href: '/services/erp-software-development/'},
      {label: 'Manufacturing ERP', href: '/services/manufacturing-erp/'},
      {label: 'Solar ERP Software', href: '/services/solar-erp-software/'},
      {label: 'CRM Software Development', href: '/services/crm-software-development/'},
      {label: 'Inventory & Billing Software', href: '/services/inventory-management-software/'},
    ],
  },
  {
    heading: 'SEO, GEO & AEO',
    href: `${ROUTES.SERVICES}#seo-digital-growth`,
    items: [
      {label: 'Search Engine Optimization', href: '/services/search-engine-optimization/'},
      {label: 'Local SEO Services', href: '/services/local-seo-services/'},
      {label: 'GEO (Generative Engine Optimization)', href: '/services/geo-generative-engine-optimization/'},
      {label: 'AEO (Answer Engine Optimization)', href: '/services/aeo-answer-engine-optimization/'},
      {label: 'Google Business Profile Optimization', href: '/services/google-business-profile-optimization/'},
      {label: 'Digital Marketing & Google Ads', href: '/services/digital-marketing-services/'},
    ],
  },
  {
    heading: 'AI & Automation',
    href: `${ROUTES.SERVICES}#ai-automation`,
    items: [
      {label: 'AI Chatbot Development', href: '/services/ai-chatbot-development/'},
      {label: 'Website AI Assistant', href: '/services/website-ai-assistant/'},
      {label: 'Business AI Integration', href: '/services/business-ai-integration/'},
      {label: 'WhatsApp Business Automation', href: '/services/whatsapp-business-automation/'},
      {label: 'Workflow Automation', href: '/services/workflow-automation/'},
    ],
  },
  {
    heading: 'Creative & Branding',
    href: `${ROUTES.SERVICES}#creative-branding`,
    items: [
      {label: 'Brand Identity Design', href: '/services/brand-identity/'},
      {label: 'Business Branding', href: '/services/business-branding/'},
      {label: 'Logo & Graphic Design', href: '/services/logo-design/'},
      {label: 'Digital & Social Creatives', href: '/services/digital-creatives/'},
      {label: 'Professional Landing Pages', href: '/services/professional-landing-pages/'},
    ],
  },
  {
    heading: 'IT & Cloud Support',
    href: `${ROUTES.SERVICES}#it-cloud-support`,
    items: [
      {label: 'Cloud Solutions', href: '/services/cloud-solutions/'},
      {label: 'Website Hosting Support', href: '/services/website-hosting-support/'},
      {label: 'Domain & DNS Assistance', href: '/services/domain-hosting-assistance/'},
      {label: 'Server Deployment Support', href: '/services/server-deployment-support/'},
      {label: 'Security & Backup Support', href: '/services/security-backup-support/'},
    ],
  },
];

export const INDUSTRIES_MEGA_MENU: MegaMenuIndustryItem[] = [
  {
    title: 'Steel & Iron Industry',
    description: 'TMT, structural steel, rolling yield ERP, dealer portals & B2B websites.',
    href: '/industries/steel-iron-industry/',
  },
  {
    title: 'Solar & Renewable Energy',
    description: 'Solar EPC websites, survey CRM, BOM, DISCOM tracking & AMC logs.',
    href: '/industries/solar-renewable-energy/',
  },
  {
    title: 'Manufacturing & Engineering',
    description: 'BOM management, shop-floor WIP scheduling, QC & industrial portals.',
    href: '/industries/manufacturing-engineering/',
  },
  {
    title: 'Industrial Suppliers',
    description: 'Multi-SKU B2B catalogs, fast RFQ billing & regional search authority.',
    href: '/industries/industrial-suppliers-traders/',
  },
  {
    title: 'Wholesale & Distribution',
    description: 'Dealer portals, route dispatch, batch expiry & credit controls.',
    href: '/industries/wholesale-distribution/',
  },
  {
    title: 'Fruit & Vegetable Mandis',
    description: 'High-speed lot auctions, farmer patti slips & plastic crate books.',
    href: '/industries/fruit-vegetable-mandis/',
  },
  {
    title: 'Agriculture & Agribusiness',
    description: 'Grain/rice mills, cold storage ledgers & seasonal dealer supply.',
    href: '/industries/agriculture-agribusiness/',
  },
  {
    title: 'Real Estate & Construction',
    description: 'Project websites, unit availability CRM & automated WhatsApp brochures.',
    href: '/industries/real-estate-construction/',
  },
  {
    title: 'Healthcare & Clinics',
    description: 'Specialist portals, OPD appointment booking & ethical Local SEO.',
    href: '/industries/healthcare-clinics/',
  },
  {
    title: 'Education & Training',
    description: 'Course websites, admission season CRM & counselling automation.',
    href: '/industries/education-training-institutes/',
  },
  {
    title: 'Retail & E-commerce',
    description: 'High-speed stores, stock alignment & WhatsApp order alerts.',
    href: '/industries/retail-ecommerce/',
  },
  {
    title: 'Logistics & Transportation',
    description: 'LR/bilty billing, trip expense tracking & POD dispatch workflows.',
    href: '/industries/logistics-transportation/',
  },
  {
    title: 'Professional Services',
    description: 'Executive advisory websites, client trackers & thought leadership AEO.',
    href: '/industries/professional-services/',
  },
];

export const FOOTER_COLUMNS = {
  company: [
    {label: 'About Us', href: ROUTES.ABOUT},
    {label: 'Our Work & Architecture', href: ROUTES.OUR_WORK},
    {label: 'Blog & Knowledge Centre', href: ROUTES.INSIGHTS},
    {label: 'Locations Served', href: ROUTES.LOCATIONS},
    {label: 'Contact Us', href: ROUTES.CONTACT},
    {label: 'Get a Quote', href: ROUTES.GET_A_QUOTE},
    {label: 'HTML Sitemap', href: ROUTES.SITEMAP},
  ] satisfies FooterLinkItem[],
  services: [
    {label: 'Website Development', href: '/services/website-development-services/'},
    {label: 'Custom Software', href: '/services/custom-software-development/'},
    {label: 'ERP Software', href: '/services/erp-software-development/'},
    {label: 'Search Engine Optimization', href: '/services/search-engine-optimization/'},
    {label: 'GEO Optimization', href: '/services/geo-generative-engine-optimization/'},
    {label: 'AEO Optimization', href: '/services/aeo-answer-engine-optimization/'},
    {label: 'WhatsApp Automation', href: '/services/whatsapp-business-automation/'},
  ] satisfies FooterLinkItem[],
  industries: [
    {label: 'Steel & Iron Industry', href: '/industries/steel-iron-industry/'},
    {label: 'Solar & Renewable Energy', href: '/industries/solar-renewable-energy/'},
    {label: 'Manufacturing & Engineering', href: '/industries/manufacturing-engineering/'},
    {label: 'Wholesale & Distribution', href: '/industries/wholesale-distribution/'},
    {label: 'Fruit & Vegetable Mandis', href: '/industries/fruit-vegetable-mandis/'},
    {label: 'Healthcare & Clinics', href: '/industries/healthcare-clinics/'},
    {label: 'Real Estate & Construction', href: '/industries/real-estate-construction/'},
  ] satisfies FooterLinkItem[],
  locations: [
    {label: 'Website Development Bhilai', href: '/locations/website-development-company-in-bhilai/'},
    {label: 'Software Company Bhilai', href: '/locations/software-development-company-in-bhilai/'},
    {label: 'ERP Software Bhilai', href: '/locations/erp-software-development-in-bhilai/'},
    {label: 'Website Development Durg', href: '/locations/website-development-company-in-durg/'},
    {label: 'Website Development Raipur', href: '/locations/website-development-company-in-raipur/'},
    {label: 'ERP Software Raipur', href: '/locations/erp-software-development-in-raipur/'},
    {label: 'IT Solutions Chhattisgarh', href: '/locations/it-software-solutions-in-chhattisgarh/'},
    {label: 'Custom Software India', href: '/locations/custom-software-development-services-in-india/'},
  ] satisfies FooterLinkItem[],
};
