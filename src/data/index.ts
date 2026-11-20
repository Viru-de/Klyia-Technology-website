export * from './types.ts';
export {
  ALL_SERVICES,
  SERVICE_CATEGORIES,
  STANDARD_WORK_PROCESS,
  getServiceBySlug,
  getServicesByCategory,
} from './services.ts';
export {ALL_INDUSTRIES, getIndustryBySlug} from './industries.ts';
export {ALL_LOCATIONS, getLocationBySlug} from './locations.ts';
export {ALL_BLOG_ARTICLES, getBlogArticleBySlug} from './blog.ts';
export {
  ERP_CONSULTATION_INDUSTRY_OPTIONS,
  ERP_CONSULTATION_SOLUTION_OPTIONS,
  ERP_DEVELOPMENT_PROCESS,
  ERP_LANDING_FAQS,
  ERP_MODULES,
  ERP_POSITIONING,
  ERP_PRODUCTS,
  ERP_RESOURCE_GUIDES,
  ERP_SHOWCASE_ITEMS,
  ERP_WHY_CHOOSE_POINTS,
  getErpProductBySlug,
} from './erpProducts.ts';

