import {resolveLocationBanner} from '../config/banners.ts';
import type {LocationPageData} from './types.ts';

const UPDATED_DATE = '2026-11-18';

interface LocationSeed {
  slug: string;
  city: string;
  regionLabel: string;
  serviceFocus: string;
  h1: string;
  heroSubtitle: string;
  seoTitle: string;
  metaDescription: string;
  localContext: string[];
  officeTransparencyNote: string;
  businessRequirements: string[];
  deliveredServices: {title: string; detail: string; serviceSlug: string}[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: {question: string; answer: string}[];
}

function buildLocationPage(seed: LocationSeed): LocationPageData {
  const banner = resolveLocationBanner(seed.slug, seed.city, seed.serviceFocus);
  return {
    ...seed,
    heroImage: banner.image,
    heroImageAlt: banner.alt,
    canonicalPath: `/locations/${seed.slug}/`,
    indexable: true,
    updatedAt: UPDATED_DATE,
  };
}

const LOCATION_SEEDS: LocationSeed[] = [
  {
    slug: 'website-development-company-in-bhilai',
    city: 'Bhilai',
    regionLabel: 'Headquarters · Risali, Bhilai, Chhattisgarh',
    serviceFocus: 'Website Development Company',
    h1: 'Website Development Company in Bhilai, Chhattisgarh',
    heroSubtitle:
      'High-speed corporate websites, B2B product catalogs, e-commerce platforms, and SEO/GEO-ready web architecture from our Risali, Bhilai office.',
    seoTitle: 'Website Development Company in Bhilai | Klyia Technology',
    metaDescription:
      'Looking for a website development company in Bhilai? Klyia Technology in Risali builds fast corporate websites, B2B portals, and SEO/GEO platforms.',
    localContext: [
      'Headquartered at First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Klyia Technology partners directly with steel manufacturers, industrial suppliers, coaching institutes, clinics, and commercial brands across Bhilai.',
      'Unlike template-only agencies, we engineer server-rendered React and TypeScript websites designed for rapid mobile loading, strong Google rankings in Bhilai-Durg-Raipur, and clean lead conversion.',
    ],
    officeTransparencyNote:
      'Physical Office: First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh, India. Walk-in and on-site plant consultations available by appointment.',
    businessRequirements: [
      'Fast mobile performance across industrial zones and regional networks',
      'Clear B2B catalogs, WhatsApp inquiry capture, and Google Maps alignment',
      'Long-term technical maintenance from a verifiable local engineering team',
    ],
    deliveredServices: [
      {
        title: 'Corporate Website Development',
        detail: 'Credible multi-page websites built for Bhilai manufacturers, EPCs, and B2B firms.',
        serviceSlug: 'corporate-website-development',
      },
      {
        title: 'E-commerce Storefronts',
        detail: 'UPI/card-enabled online stores synchronized with local store or godown stock.',
        serviceSlug: 'ecommerce-website-development',
      },
      {
        title: 'Local SEO & Google Business Profile',
        detail: 'Ethical Maps and regional search optimization across Bhilai, Supela, Civic Centre, and Risali.',
        serviceSlug: 'local-seo-services',
      },
      {
        title: 'WhatsApp Lead Automation',
        detail: 'Instant inquiry confirmation and catalog sharing via official WhatsApp workflows.',
        serviceSlug: 'whatsapp-business-automation',
      },
    ],
    relatedServiceSlugs: [
      'website-development-services',
      'corporate-website-development',
      'local-seo-services',
      'geo-generative-engine-optimization',
    ],
    relatedLocationSlugs: [
      'software-development-company-in-bhilai',
      'erp-software-development-in-bhilai',
      'website-development-company-in-durg',
      'website-development-company-in-raipur',
    ],
    faqs: [
      {
        question: 'Where is Klyia Technology located in Bhilai?',
        answer:
          'Our office is at First Floor, Bajrang Hardware, Krishna Talkies Road, Risali, Bhilai, Chhattisgarh. You can schedule an in-person or on-site consultation at +91 82968 87643.',
      },
      {
        question: 'How long does it take to build a corporate website in Bhilai?',
        answer:
          'A structured corporate website typically takes 2 to 4 weeks depending on page count, custom catalogs, and integrations.',
      },
    ],
  },
  {
    slug: 'software-development-company-in-bhilai',
    city: 'Bhilai',
    regionLabel: 'Headquarters · Custom Engineering in Bhilai',
    serviceFocus: 'Software & IT Company',
    h1: 'Software & IT Company for Custom Software Development in Bhilai',
    heroSubtitle:
      'Tailored business software, dealer portals, CRM systems, and workflow automation engineered by our IT team in Risali, Bhilai.',
    seoTitle: 'Software & IT Company in Bhilai | Custom Software Development | Klyia Technology',
    metaDescription:
      'Klyia Technology is an IT and custom software development company in Bhilai building tailored CRM, ERP, billing, inventory, and automation systems.',
    localContext: [
      'Growing enterprises in Bhilai often outgrow disconnected spreadsheets and rigid off-the-shelf software that forces staff into manual workarounds.',
      'As an engineering-focused IT and software company in Risali, Bhilai, we conduct on-site workflow discovery at your plant, warehouse, or office to design reliable custom software that fits how your business actually operates.',
    ],
    officeTransparencyNote:
      'Serving Bhilai Steel Plant ancillaries, Light Industrial Area, Heavy Industrial Area, and commercial offices directly from Risali, Bhilai.',
    businessRequirements: [
      'Role-based access across billing, dispatch, procurement, and management',
      'Clean GST-ready data exports and relational SQL data integrity',
      'Direct local support for training, feature upgrades, and hardware bridges',
    ],
    deliveredServices: [
      {
        title: 'Custom Software Development',
        detail: 'Bespoke operational tools shaped around your pricing, approvals, and compliance rules.',
        serviceSlug: 'custom-software-development',
      },
      {
        title: 'CRM & Lead Management',
        detail: 'Track inquiries, dealer quotations, and follow-ups in one centralized pipeline.',
        serviceSlug: 'crm-software-development',
      },
      {
        title: 'Inventory & GST Billing',
        detail: 'Real-time multi-godown stock and rapid invoice generation.',
        serviceSlug: 'inventory-management-software',
      },
      {
        title: 'Business AI & Workflow Automation',
        detail: 'Automate alerts, document extraction, and WhatsApp status updates.',
        serviceSlug: 'workflow-automation',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'erp-software-development',
      'crm-software-development',
      'business-ai-integration',
    ],
    relatedLocationSlugs: [
      'website-development-company-in-bhilai',
      'erp-software-development-in-bhilai',
      'website-development-company-in-durg',
      'website-development-company-in-raipur',
      'it-software-solutions-in-chhattisgarh',
    ],
    faqs: [
      {
        question: 'Can your team visit our plant or office in Bhilai to study our workflow?',
        answer:
          'Yes. Because our office is in Risali, Bhilai, we conduct direct on-site workflow audits across Bhilai, Durg, and Raipur.',
      },
      {
        question: 'What kind of custom software and IT systems do you build in Bhilai?',
        answer:
          'We engineer bespoke CRM platforms, multi-godown inventory and GST billing software, dealer portals, Solar and Steel ERPs, and WhatsApp/AI workflow automation.',
      },
    ],
  },
  {
    slug: 'erp-software-development-in-bhilai',
    city: 'Bhilai',
    regionLabel: 'Industrial Belt · Steel & Manufacturing ERP',
    serviceFocus: 'ERP Software Development',
    h1: 'ERP Software Development in Bhilai for Steel, Solar & Manufacturing',
    heroSubtitle:
      'Modular ERP systems covering rolling yield, dual MT/piece steel stock, weighbridge dispatch, Solar EPC workflows, and manufacturing BOMs.',
    seoTitle: 'ERP Software Development in Bhilai | Steel & Solar ERP | Klyia Technology',
    metaDescription:
      'Custom ERP software development in Bhilai for steel rolling mills, industrial manufacturers, solar EPCs, and wholesale distributors.',
    localContext: [
      'Bhilai’s industrial ecosystem—from rolling mills and foundries to fabrication units and solar EPC contractors—requires ERP software built for real shop-floor and yard conditions.',
      'Klyia Technology develops modular ERPs that unify inward raw material GRNs, production yield, weighbridge gate passes, and dealer credit controls.',
    ],
    officeTransparencyNote:
      'Direct on-site ERP implementation and staff training from our Risali, Bhilai headquarters.',
    businessRequirements: [
      'Dual MT/kg and bundle/piece stock accuracy across yards',
      'Weighbridge, gate pass, and GST e-Way bill synchronization',
      'Production BOM, scrap reconciliation, and dealer credit locks',
    ],
    deliveredServices: [
      {
        title: 'Industrial & Steel ERP',
        detail: 'Tailored modules for steel plants, rolling mills, and multi-godown stockists.',
        serviceSlug: 'erp-software-development',
      },
      {
        title: 'Manufacturing ERP & BOM',
        detail: 'Production scheduling, raw material indents, and job-work tracking.',
        serviceSlug: 'manufacturing-erp',
      },
      {
        title: 'Solar EPC ERP',
        detail: 'Site surveys, BOM allocation, DISCOM milestones, and AMC tracking.',
        serviceSlug: 'solar-erp-software',
      },
      {
        title: 'Wholesale Distribution ERP',
        detail: 'Route-wise loading, dealer portals, and credit-limit enforcement.',
        serviceSlug: 'wholesale-distribution-erp',
      },
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'manufacturing-erp',
      'solar-erp-software',
      'wholesale-distribution-erp',
    ],
    relatedLocationSlugs: [
      'software-development-company-in-bhilai',
      'erp-software-development-in-raipur',
      'it-software-solutions-in-chhattisgarh',
    ],
    faqs: [
      {
        question: 'Can your Bhilai ERP integrate with our weighbridge and existing accounting?',
        answer:
          'Yes. We support serial weighbridge weight capture and clean GST ledger/invoice exports compatible with standard accounting practices.',
      },
    ],
  },
  {
    slug: 'website-development-company-in-durg',
    city: 'Durg',
    regionLabel: 'Twin-City Corridor · Durg, Chhattisgarh',
    serviceFocus: 'Website Development Company',
    h1: 'Website Development & Digital Solutions in Durg, Chhattisgarh',
    heroSubtitle:
      'Corporate websites, healthcare & education portals, mandi software, and Local SEO for businesses across Durg.',
    seoTitle: 'Website Development Company in Durg | Klyia Technology',
    metaDescription:
      'Klyia Technology serves Durg with high-speed website development, Local SEO, mandi billing software, and WhatsApp automation.',
    localContext: [
      'Adjacent to our Risali, Bhilai headquarters, Durg’s commercial hubs, agricultural mandis, healthcare clinics, and educational institutions receive direct on-site consulting and rapid technical support.',
      'We help Durg businesses replace slow or outdated websites with modern, search-engineered platforms that bring consistent regional inquiries.',
    ],
    officeTransparencyNote:
      'Headquartered minutes away in Risali, Bhilai—providing direct on-site meetings throughout Durg.',
    businessRequirements: [
      'Mobile-first speed and bilingual/clear regional buyer communication',
      'Google Business Profile and Durg-focused Local SEO authority',
      'Specialized software for mandis, wholesale traders, clinics, and institutes',
    ],
    deliveredServices: [
      {
        title: 'Website Design & Development',
        detail: 'Clean, conversion-focused corporate and institutional websites.',
        serviceSlug: 'website-development-services',
      },
      {
        title: 'Mandi & Fruit Trading Software',
        detail: 'Rapid auction billing, farmer patti slips, and crate ledgers.',
        serviceSlug: 'mandi-fruit-trading-software',
      },
      {
        title: 'Local SEO & GBP Optimization',
        detail: 'Stronger local search and Maps visibility across Durg district.',
        serviceSlug: 'local-seo-services',
      },
      {
        title: 'WhatsApp Business Automation',
        detail: 'Automated appointment, admission, and order confirmations.',
        serviceSlug: 'whatsapp-business-automation',
      },
    ],
    relatedServiceSlugs: [
      'website-development-services',
      'local-seo-services',
      'mandi-fruit-trading-software',
      'whatsapp-business-automation',
    ],
    relatedLocationSlugs: [
      'website-development-company-in-bhilai',
      'website-development-company-in-raipur',
      'it-software-solutions-in-chhattisgarh',
    ],
    faqs: [
      {
        question: 'Do you offer on-site meetings in Durg?',
        answer:
          'Yes. Because Durg and Bhilai form a twin-city corridor next to our Risali office, we regularly meet clients on-site in Durg.',
      },
    ],
  },
  {
    slug: 'website-development-company-in-raipur',
    city: 'Raipur',
    regionLabel: 'Capital Corridor · Raipur, Chhattisgarh',
    serviceFocus: 'Website Development Company',
    h1: 'Website Development & Enterprise Digital Systems in Raipur',
    heroSubtitle:
      'High-performance corporate websites, B2B portals, and SEO/GEO/AEO platforms for Raipur’s commercial, real estate, and industrial leaders.',
    seoTitle: 'Website Development Company in Raipur | Klyia Technology',
    metaDescription:
      'Enterprise website development, custom portals, and SEO/GEO/AEO services in Raipur, Chhattisgarh by Klyia Technology.',
    localContext: [
      'Raipur’s commercial headquarters, Siltara and Urla industrial belts, real estate developments, and wholesale hubs compete across both Chhattisgarh and national markets.',
      'Klyia Technology partners with Raipur organizations—with direct on-site meetings as needed—to deliver server-rendered websites and search authority built to win B2B and consumer trust.',
    ],
    officeTransparencyNote:
      'Our sole physical office is in Risali, Bhilai, with direct on-site visits across Raipur, Siltara, Urla, and Nava Raipur.',
    businessRequirements: [
      'Enterprise-grade design credibility for corporate and industrial groups',
      'Technical SEO, GEO, and AEO readiness for high-value regional and national keywords',
      'Integrated CRM, WhatsApp, and ERP workflows behind inquiry forms',
    ],
    deliveredServices: [
      {
        title: 'Corporate Website Engineering',
        detail: 'Custom React SSR websites engineered for speed, accessibility, and authority.',
        serviceSlug: 'corporate-website-development',
      },
      {
        title: 'GEO & AEO Optimization',
        detail: 'Position your brand accurately across Google AI Overviews and generative assistants.',
        serviceSlug: 'geo-generative-engine-optimization',
      },
      {
        title: 'E-commerce & B2B Portals',
        detail: 'Dealer ordering portals and omnichannel storefronts.',
        serviceSlug: 'web-portal-development',
      },
      {
        title: 'Google Ads & Landing Pages',
        detail: 'High-conversion campaign pages for real estate, solar, and B2B leads.',
        serviceSlug: 'professional-landing-pages',
      },
    ],
    relatedServiceSlugs: [
      'corporate-website-development',
      'search-engine-optimization',
      'geo-generative-engine-optimization',
      'web-portal-development',
    ],
    relatedLocationSlugs: [
      'erp-software-development-in-raipur',
      'website-development-company-in-bhilai',
      'it-software-solutions-in-chhattisgarh',
    ],
    faqs: [
      {
        question: 'Can your team meet us on-site in Raipur?',
        answer:
          'Yes. Our engineering team conducts regular on-site discovery and review meetings across Raipur, Urla, and Siltara from our Bhilai headquarters.',
      },
    ],
  },
  {
    slug: 'erp-software-development-in-raipur',
    city: 'Raipur',
    regionLabel: 'Siltara & Urla Belt · Raipur ERP',
    serviceFocus: 'ERP Software Development',
    h1: 'ERP Software Development in Raipur for Steel, Rice Mills & Distribution',
    heroSubtitle:
      'Custom ERP modules for Siltara & Urla steel plants, Raipur wholesale markets, rice mills, and solar EPC companies.',
    seoTitle: 'ERP Software Development in Raipur | Klyia Technology',
    metaDescription:
      'Custom ERP software in Raipur for steel plants, wholesale distributors, solar EPCs, and agribusinesses across Siltara & Urla.',
    localContext: [
      'Raipur’s industrial corridors in Urla and Siltara alongside major wholesale and rice-milling hubs require dependable ERP software without multi-crore licensing overhead.',
      'We design modular ERP systems tailored to your procurement, production yield, multi-godown inventory, and GST dispatch workflows.',
    ],
    officeTransparencyNote:
      'Delivered from our Bhilai headquarters with direct on-site implementation support across Raipur industrial areas.',
    businessRequirements: [
      'Multi-branch godown visibility across Raipur yards and regional depots',
      'Steel rolling/trading, rice mill, and wholesale credit workflows',
      'Automated WhatsApp dispatch alerts and executive MIS dashboards',
    ],
    deliveredServices: [
      {
        title: 'Custom ERP Development',
        detail: 'End-to-end operational ERPs tailored to industrial and trading workflows.',
        serviceSlug: 'erp-software-development',
      },
      {
        title: 'Wholesale & Distribution ERP',
        detail: 'Beat-wise order booking, dealer credit checks, and route loading.',
        serviceSlug: 'wholesale-distribution-erp',
      },
      {
        title: 'Manufacturing ERP',
        detail: 'BOM, raw material indents, WIP, and quality inspection logs.',
        serviceSlug: 'manufacturing-erp',
      },
      {
        title: 'Solar EPC ERP',
        detail: 'Survey-to-commissioning tracking for Chhattisgarh solar EPC firms.',
        serviceSlug: 'solar-erp-software',
      },
    ],
    relatedServiceSlugs: [
      'erp-software-development',
      'wholesale-distribution-erp',
      'manufacturing-erp',
      'solar-erp-software',
    ],
    relatedLocationSlugs: [
      'website-development-company-in-raipur',
      'erp-software-development-in-bhilai',
      'it-software-solutions-in-chhattisgarh',
    ],
    faqs: [
      {
        question: 'Can the ERP connect multiple godowns or offices between Raipur and Bhilai?',
        answer:
          'Yes. Cloud-hosted relational databases keep Raipur, Bhilai, and branch locations synchronized in real time.',
      },
    ],
  },
  {
    slug: 'it-software-solutions-in-chhattisgarh',
    city: 'Chhattisgarh',
    regionLabel: 'Statewide · Bilaspur, Korba, Raigarh, Rajnandgaon & Beyond',
    serviceFocus: 'Software Development & IT Solutions',
    h1: 'Software Development & IT Solutions Across Chhattisgarh',
    heroSubtitle:
      'Custom software, ERP, and web engineering serving industrial, agro-trade, and commercial enterprises across Bilaspur, Korba, Raigarh, Rajnandgaon, and Jagdalpur.',
    seoTitle: 'Software Development & IT Solutions in Chhattisgarh | Klyia Technology',
    metaDescription:
      'Custom software development, ERP, website development, and SEO/GEO services in Chhattisgarh across Bhilai, Durg, Raipur, Bilaspur, Korba, and Raigarh.',
    localContext: [
      'From power and industrial hubs in Korba and Raigarh to commercial and agro-trading centers in Bilaspur, Rajnandgaon, and Dhamtari, Chhattisgarh businesses need modern software development that reflects local operational realities.',
      'From our Risali, Bhilai headquarters, we combine structured remote delivery with scheduled regional visits to modernize custom software, websites, ERPs, and digital growth across the state.',
    ],
    officeTransparencyNote:
      'Headquartered in Risali, Bhilai—serving all districts of Chhattisgarh with structured engineering and responsive support.',
    businessRequirements: [
      'Reliable cloud-hosted ERPs accessible across regional plants and depots',
      'Industry-specific software for steel, coal/logistics, rice mills, mandis, and solar EPCs',
      'Statewide and national search visibility through SEO, GEO, and AEO',
    ],
    deliveredServices: [
      {
        title: 'Custom Software & ERP',
        detail: 'Tailored enterprise software for Chhattisgarh’s industrial and agro sectors.',
        serviceSlug: 'custom-software-development',
      },
      {
        title: 'Corporate Websites & Portals',
        detail: 'Fast, credible web platforms engineered for B2B and regional buyers.',
        serviceSlug: 'website-development-services',
      },
      {
        title: 'SEO, GEO & AEO Growth',
        detail: 'Capture statewide and pan-India commercial search demand.',
        serviceSlug: 'search-engine-optimization',
      },
      {
        title: 'Cloud & Server Support',
        detail: 'Dependable hosting, SSL, and automated backup infrastructure.',
        serviceSlug: 'cloud-solutions',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'erp-software-development',
      'website-development-services',
      'search-engine-optimization',
    ],
    relatedLocationSlugs: [
      'website-development-company-in-bhilai',
      'software-development-company-in-bhilai',
      'erp-software-development-in-bhilai',
      'website-development-company-in-durg',
      'website-development-company-in-raipur',
      'custom-software-development-services-in-india',
    ],
    faqs: [
      {
        question: 'Which cities in Chhattisgarh do you serve?',
        answer:
          'We serve Bhilai, Durg, and Raipur with direct on-site visits, and support Bilaspur, Korba, Raigarh, Rajnandgaon, Dhamtari, and all other Chhattisgarh cities.',
      },
    ],
  },
  {
    slug: 'custom-software-development-services-in-india',
    city: 'India',
    regionLabel: 'Pan-India · Remote Engineering & Delivery',
    serviceFocus: 'Custom Software Development Services',
    h1: 'Custom Software, ERP & Web Engineering Services Across India',
    heroSubtitle:
      'Structured remote discovery, TypeScript & React engineering, modular ERP suites, and SEO/GEO/AEO growth programs for businesses across India.',
    seoTitle: 'Custom Software Development Services in India | Klyia Technology',
    metaDescription:
      'Partner with Klyia Technology for custom software development, Solar & Steel ERP, React SSR websites, and AI automation across India.',
    localContext: [
      'Businesses across Delhi NCR, Mumbai, Pune, Bengaluru, Ahmedabad, Nagpur, Kolkata, and tier-2 industrial cities choose Klyia Technology for pragmatic engineering without metro-agency bloat.',
      'Our structured remote delivery uses clear weekly demos, documented milestones, TypeScript/Node.js reliability, and direct communication with the engineers building your system.',
    ],
    officeTransparencyNote:
      'Headquartered in Risali, Bhilai, Chhattisgarh, delivering remotely for enterprises across all Indian states.',
    businessRequirements: [
      'Transparent milestone-based scoping and clean maintainable code ownership',
      'GST-compliant Indian ERP, billing, WhatsApp API, and payment integrations',
      'Search-first web architecture built for Google, AI Overviews, and generative engines',
    ],
    deliveredServices: [
      {
        title: 'Custom Software & Web Apps',
        detail: 'Full-stack TypeScript, React, and SQL applications built for scale.',
        serviceSlug: 'custom-software-development',
      },
      {
        title: 'Modular Industry ERPs',
        detail: 'Specialized Steel, Solar EPC, Manufacturing, and Distribution ERPs.',
        serviceSlug: 'erp-software-development',
      },
      {
        title: 'SEO, GEO & AEO Systems',
        detail: 'Technical search and AI-visibility foundations for national growth.',
        serviceSlug: 'geo-generative-engine-optimization',
      },
      {
        title: 'AI & WhatsApp Automation',
        detail: 'Practical Gemini AI and WhatsApp Business API workflow integrations.',
        serviceSlug: 'business-ai-integration',
      },
    ],
    relatedServiceSlugs: [
      'custom-software-development',
      'erp-software-development',
      'react-website-development',
      'business-ai-integration',
    ],
    relatedLocationSlugs: [
      'it-software-solutions-in-chhattisgarh',
      'software-development-company-in-bhilai',
      'erp-software-development-in-raipur',
    ],
    faqs: [
      {
        question: 'How does remote software delivery work with clients outside Chhattisgarh?',
        answer:
          'We run structured video discovery workshops, share interactive staging previews every sprint, maintain shared milestone trackers, and provide post-launch SLA support.',
      },
    ],
  },
];

export const ALL_LOCATIONS: LocationPageData[] = LOCATION_SEEDS.map(buildLocationPage);

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return ALL_LOCATIONS.find((item) => item.slug === slug);
}
