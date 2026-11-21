import {ROUTES} from './routes.ts';
import type {ServiceCategoryId} from '../data/types.ts';

export interface BannerSpec {
  image: string;
  alt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const BANNER_IMAGES = {
  obsidianArchitecture: '/src/assets/images/banner_obsidian_architecture_1795006490317.jpg',
  innerArchitecture: '/src/assets/images/banner_inner_architecture_1795005436954.jpg',
  heroTechSystems: '/src/assets/images/hero_tech_systems_1795005437412.jpg',
  heroObsidianTech: '/src/assets/images/hero_obsidian_tech_1795006489528.jpg',
  erpDashboard: '/src/assets/images/banner_erp_dashboard_1795011261980.jpg',
  customSoftware: '/src/assets/images/banner_custom_software_1795011262154.jpg',
  webDesignUi: '/src/assets/images/banner_web_design_ui_1795011263002.jpg',
  seoGeoAnalytics: '/src/assets/images/banner_seo_geo_analytics_1795011262658.jpg',
  geoAiSearch: '/src/assets/images/service_geo_ai_search_1795094381846.jpg',
  digitalMarketing: '/src/assets/images/banner_digital_marketing_1795011263951.jpg',
  aiAutomation: '/src/assets/images/banner_ai_automation_1795011264247.jpg',
  whatsappAutomation: '/src/assets/images/service_whatsapp_automation_1795094382616.jpg',
  crmDashboard: '/src/assets/images/service_crm_dashboard_1795094382001.jpg',
  workflowAutomation: '/src/assets/images/service_workflow_automation_1795094382601.jpg',
  mobilePortalUi: '/src/assets/images/service_mobile_portal_ui_1795094382029.jpg',
  creativeBranding: '/src/assets/images/banner_creative_branding_1795011264485.jpg',
  cloudServers: '/src/assets/images/banner_cloud_servers_1795011266168.jpg',
  steelIron: '/src/assets/images/industry_steel_iron_1795005438477.jpg',
  solarEnergy: '/src/assets/images/industry_solar_energy_1795005439181.jpg',
  solarErpDashboard: '/src/assets/images/solar_erp_dashboard_1795089432209.jpg',
  manufacturing: '/src/assets/images/industry_manufacturing_1795005439101.jpg',
  suppliers: '/src/assets/images/industry_suppliers_1795005439442.jpg',
  wholesale: '/src/assets/images/industry_wholesale_1795005440370.jpg',
  agricultureMandi: '/src/assets/images/industry_agriculture_mandi_1795005439749.jpg',
  fruitVegetableMandi: '/src/assets/images/industry_fruit_vegetable_mandi_1795094382494.jpg',
  agritechFarming: '/src/assets/images/banner_agritech_farming_1795011267281.jpg',
  realEstate: '/src/assets/images/industry_real_estate_1795005441185.jpg',
  healthcare: '/src/assets/images/industry_healthcare_1795005440398.jpg',
  education: '/src/assets/images/industry_education_1795005440945.jpg',
  logisticsFleet: '/src/assets/images/banner_logistics_fleet_1795011266379.jpg',
  retailEcommerce: '/src/assets/images/banner_retail_ecommerce_1795011268242.jpg',
  professionalAdvisory: '/src/assets/images/banner_professional_advisory_1795011266971.jpg',
  bhilaiChhattisgarh: '/src/assets/images/banner_bhilai_chhattisgarh_1795011268475.jpg',
  raipurIndiaHub: '/src/assets/images/banner_raipur_india_hub_1795011268028.jpg',
  erpEnterpriseConsole: '/src/assets/images/erp_enterprise_console_hero_1795178038410.jpg',
  erpHrPayrollOffice: '/src/assets/images/erp_hr_payroll_office_1795178040039.jpg',
  erpPosRetailCounter: '/src/assets/images/erp_pos_retail_counter_1795178039601.jpg',
  heroFullwidthBanner: '/src/assets/images/hero_fullwidth_banner_1795262024188.jpg',
  teamConsultation: '/src/assets/images/banner_team_consultation_1795011269227.jpg',
} as const;

const JPG_ONLY_ASSET_PREFIXES = [
  '/src/assets/images/erp_enterprise_console_hero_',
  '/src/assets/images/erp_hr_payroll_office_',
  '/src/assets/images/erp_pos_retail_counter_',
  '/src/assets/images/hero_fullwidth_banner_',
];

export function toWebpAssetPath(imagePath?: string): string | undefined {
  if (!imagePath) {
    return undefined;
  }
  if (JPG_ONLY_ASSET_PREFIXES.some((prefix) => imagePath.startsWith(prefix))) {
    return undefined;
  }
  if (imagePath.startsWith('/src/assets/images/') && imagePath.endsWith('.jpg')) {
    return `${imagePath.slice(0, -4)}.webp`;
  }
  return undefined;
}

export const STATIC_PAGE_BANNERS: Record<
  | 'about'
  | 'services'
  | 'industries'
  | 'locations'
  | 'ourWork'
  | 'insights'
  | 'contact'
  | 'quote'
  | 'privacy'
  | 'terms'
  | 'sitemap'
  | 'notFound',
  BannerSpec
> = {
  about: {
    image: BANNER_IMAGES.teamConsultation,
    alt: 'Klyia Technology software architects and consultants collaborating on enterprise digital systems',
    ctaLabel: 'Explore Services',
    ctaHref: ROUTES.SERVICES,
  },
  services: {
    image: BANNER_IMAGES.customSoftware,
    alt: 'Enterprise software architecture, ERP dashboards, and full-stack web engineering workstation',
    ctaLabel: 'Request Custom Quote',
    ctaHref: ROUTES.GET_A_QUOTE,
  },
  industries: {
    image: BANNER_IMAGES.steelIron,
    alt: 'Industrial steel plant, manufacturing machinery, and enterprise digital systems across India',
    ctaLabel: 'Discuss Your Sector',
    ctaHref: ROUTES.GET_A_QUOTE,
  },
  locations: {
    image: BANNER_IMAGES.bhilaiChhattisgarh,
    alt: 'Aerial twilight view of Bhilai and Chhattisgarh industrial and commercial business corridors',
    ctaLabel: 'Schedule Consultation',
    ctaHref: ROUTES.CONTACT,
  },
  ourWork: {
    image: BANNER_IMAGES.innerArchitecture,
    alt: 'Architectural enterprise software infrastructure and digital solution blueprints',
    ctaLabel: 'Plan Your Architecture',
    ctaHref: ROUTES.GET_A_QUOTE,
  },
  insights: {
    image: BANNER_IMAGES.seoGeoAnalytics,
    alt: 'Search analytics, AI visibility curves, and digital engineering strategy displays',
    ctaLabel: 'Consult Our Team',
    ctaHref: ROUTES.CONTACT,
  },
  contact: {
    image: BANNER_IMAGES.teamConsultation,
    alt: 'Direct business technology consultation workspace at Klyia Technology in Bhilai',
  },
  quote: {
    image: BANNER_IMAGES.erpDashboard,
    alt: 'Enterprise ERP and project scoping analytics workstation for technical quotation requests',
  },
  privacy: {
    image: BANNER_IMAGES.obsidianArchitecture,
    alt: 'Obsidian architectural corporate facade representing data security and privacy stewardship',
  },
  terms: {
    image: BANNER_IMAGES.professionalAdvisory,
    alt: 'Executive corporate governance and consulting boardroom environment',
  },
  sitemap: {
    image: BANNER_IMAGES.cloudServers,
    alt: 'Structured enterprise server corridor and indexed site architecture topology',
  },
  notFound: {
    image: BANNER_IMAGES.heroObsidianTech,
    alt: 'Obsidian enterprise software interface and navigation recovery view',
    ctaLabel: 'Back to Home',
    ctaHref: ROUTES.HOME,
  },
};

export function resolveServiceBanner(
  slug: string,
  categoryId: ServiceCategoryId,
  serviceName: string,
): {image: string; alt: string} {
  if (slug === 'solar-erp-software') {
    return {
      image: BANNER_IMAGES.solarErpDashboard,
      alt: `${serviceName} dashboards tracking kW milestones, BOM stock, and solar EPC project execution`,
    };
  }
  if (slug === 'manufacturing-erp') {
    return {
      image: BANNER_IMAGES.manufacturing,
      alt: `${serviceName} production scheduling, BOM control, and automated factory operations`,
    };
  }
  if (slug === 'wholesale-distribution-erp' || slug === 'inventory-management-software') {
    return {
      image: BANNER_IMAGES.wholesale,
      alt: `${serviceName} multi-godown warehouse stock, batch control, and dispatch workflows`,
    };
  }
  if (slug === 'mandi-fruit-trading-software') {
    return {
      image: BANNER_IMAGES.fruitVegetableMandi,
      alt: `${serviceName} rapid mandi auction billing, farmer patti ledgers, and crate tracking`,
    };
  }
  if (slug === 'ecommerce-website-development' || slug === 'ecommerce-seo') {
    return {
      image: BANNER_IMAGES.retailEcommerce,
      alt: `${serviceName} fast omnichannel storefronts, inventory sync, and checkout performance`,
    };
  }
  if (slug === 'website-speed-optimization' || slug === 'website-maintenance-support') {
    return {
      image: BANNER_IMAGES.cloudServers,
      alt: `${serviceName} Core Web Vitals tuning, server caching, and uptime monitoring infrastructure`,
    };
  }
  if (slug === 'crm-software-development') {
    return {
      image: BANNER_IMAGES.crmDashboard,
      alt: `${serviceName} lead pipelines, quotation tracking, and automated dealer follow-up dashboards`,
    };
  }
  if (slug === 'whatsapp-business-automation') {
    return {
      image: BANNER_IMAGES.whatsappAutomation,
      alt: `${serviceName} automated order alerts, dispatch notifications, and customer qualification workflows`,
    };
  }
  if (slug === 'workflow-automation' || slug === 'business-management-software') {
    return {
      image: BANNER_IMAGES.workflowAutomation,
      alt: `${serviceName} integrated business process dashboards, approvals, and automated ERP workflows`,
    };
  }
  if (
    slug === 'geo-generative-engine-optimization' ||
    slug === 'aeo-answer-engine-optimization'
  ) {
    return {
      image: BANNER_IMAGES.geoAiSearch,
      alt: `${serviceName} AI search visibility analytics, semantic entity graphs, and structured citations`,
    };
  }
  if (
    slug === 'responsive-web-design' ||
    slug === 'ui-ux-design' ||
    slug === 'web-portal-development' ||
    slug === 'professional-landing-pages'
  ) {
    return {
      image: BANNER_IMAGES.mobilePortalUi,
      alt: `${serviceName} responsive desktop, tablet, and smartphone web application interfaces`,
    };
  }
  if (
    slug === 'erp-software-development' ||
    slug === 'billing-accounting-software'
  ) {
    return {
      image: BANNER_IMAGES.erpDashboard,
      alt: `${serviceName} unified ledgers, enterprise dashboards, and approval workflows`,
    };
  }
  if (
    slug === 'digital-marketing-services' ||
    slug === 'social-media-marketing' ||
    slug === 'google-ads-management' ||
    slug === 'content-marketing'
  ) {
    return {
      image: BANNER_IMAGES.digitalMarketing,
      alt: `${serviceName} high-intent buyer acquisition campaigns and conversion analytics`,
    };
  }
  if (
    slug === 'custom-web-application-development' ||
    slug === 'react-website-development'
  ) {
    return {
      image: BANNER_IMAGES.customSoftware,
      alt: `${serviceName} scalable TypeScript and React enterprise application engineering`,
    };
  }

  switch (categoryId) {
    case 'web-solutions':
      return {
        image: BANNER_IMAGES.webDesignUi,
        alt: `${serviceName} responsive corporate web architecture and modern UI layout`,
      };
    case 'software-development':
      return {
        image: BANNER_IMAGES.customSoftware,
        alt: `${serviceName} modular enterprise engineering, relational SQL databases, and API architecture`,
      };
    case 'seo-digital-growth':
      return {
        image: BANNER_IMAGES.seoGeoAnalytics,
        alt: `${serviceName} search analytics, technical crawl hygiene, and AI engine visibility`,
      };
    case 'ai-automation':
      return {
        image: BANNER_IMAGES.aiAutomation,
        alt: `${serviceName} intelligent enterprise workflow nodes and automated routing systems`,
      };
    case 'creative-branding':
      return {
        image: BANNER_IMAGES.creativeBranding,
        alt: `${serviceName} corporate visual identity systems, typography grids, and brand design`,
      };
    case 'it-cloud-support':
      return {
        image: BANNER_IMAGES.cloudServers,
        alt: `${serviceName} dependable cloud deployment, DNS governance, and security hardening`,
      };
  }
}

export function resolveLocationBanner(
  slug: string,
  city: string,
  serviceFocus: string,
): {image: string; alt: string} {
  if (city === 'Raipur' || city === 'India') {
    return {
      image: BANNER_IMAGES.raipurIndiaHub,
      alt: `${serviceFocus} for enterprise and commercial organizations in ${city}`,
    };
  }

  if (slug === 'erp-software-development-in-bhilai') {
    return {
      image: BANNER_IMAGES.bhilaiChhattisgarh,
      alt: `${serviceFocus} serving industrial plants, steel yards, and commercial hubs in ${city}`,
    };
  }

  return {
    image: BANNER_IMAGES.bhilaiChhattisgarh,
    alt: `${serviceFocus} serving businesses and industrial corridors across ${city}, Chhattisgarh`,
  };
}
