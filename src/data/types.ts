export type ServiceCategoryId =
  | 'web-solutions'
  | 'software-development'
  | 'seo-digital-growth'
  | 'ai-automation'
  | 'creative-branding'
  | 'it-cloud-support';

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ServiceFeatureItem {
  title: string;
  detail: string;
}

export interface ServiceIndustryLink {
  slug: string;
  label: string;
  note: string;
}

export interface ServiceCrossLink {
  slug: string;
  name: string;
  primaryCategoryNote: string;
}

export interface ServiceCategoryMeta {
  id: ServiceCategoryId;
  anchorId: string;
  title: string;
  shortTitle: string;
  summary: string;
  crossLinkedSlugs?: ServiceCrossLink[];
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  name: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  canonicalPath: string;
  categoryId: ServiceCategoryId;
  categoryLabel: string;
  seoTitle: string;
  metaDescription: string;
  indexable?: boolean;
  updatedAt: string;
  introduction: string[];
  complianceNote?: string;
  whyNeeded: string[];
  challenges: string[];
  solutions: string[];
  features: ServiceFeatureItem[];
  benefits: string[];
  technologies: string[];
  industriesBenefiting: ServiceIndustryLink[];
  whyChooseKlyia: string[];
  relatedServiceSlugs: string[];
  relatedBlogSlugs?: string[];
  faqs: FaqEntry[];
}

export interface IndustrySolutionItem {
  title: string;
  detail: string;
}

export interface IndustryExtendedSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface IndustryPageData {
  slug: string;
  name: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  canonicalPath: string;
  priorityBadge?: string;
  seoTitle: string;
  metaDescription: string;
  indexable?: boolean;
  updatedAt: string;
  introduction: string[];
  customDevelopmentNote: string;
  challenges: string[];
  modulesOrCatalogueHighlight?: string[];
  websiteSolutions: IndustrySolutionItem[];
  softwareAndErpSolutions: IndustrySolutionItem[];
  seoGeoAeoAndMarketing: string[];
  whatsappAndAutomation: string[];
  extendedSections?: IndustryExtendedSection[];
  relatedServiceSlugs: string[];
  relatedBlogSlugs?: string[];
  faqs: FaqEntry[];
}

export interface LocationDeliveredService {
  title: string;
  detail: string;
  serviceSlug: string;
}

export interface LocationPageData {
  slug: string;
  city: string;
  regionLabel: string;
  serviceFocus: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  canonicalPath: string;
  seoTitle: string;
  metaDescription: string;
  indexable?: boolean;
  updatedAt: string;
  localContext: string[];
  officeTransparencyNote: string;
  businessRequirements: string[];
  deliveredServices: LocationDeliveredService[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: FaqEntry[];
}

export interface BlogArticleTable {
  headers: string[];
  rows: string[][];
}

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: BlogArticleTable;
}

export interface BlogArticleData {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  canonicalPath: string;
  seoTitle: string;
  metaDescription: string;
  indexable?: boolean;
  sections: BlogArticleSection[];
  practicalChecklist?: string[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  faqs: FaqEntry[];
}

export type ErpModuleArchitecture =
  | 'Standalone or Integrated'
  | 'Unified Core Module'
  | 'Automation & Extension';

export interface ErpModuleItem {
  id: string;
  name: string;
  summary: string;
  architecture: ErpModuleArchitecture;
  standaloneCapable: boolean;
  capabilities: string[];
  recommendedErpSlugs: string[];
}

export interface ErpProductWorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface ErpProductData {
  slug: string;
  code: string;
  name: string;
  shortTitle: string;
  h1: string;
  heroSubtitle: string;
  industryLabel: string;
  heroImage: string;
  heroImageAlt: string;
  canonicalPath: string;
  seoTitle: string;
  metaDescription: string;
  indexable?: boolean;
  updatedAt: string;
  overview: string[];
  workflowFitNote: string;
  workflowSteps: ErpProductWorkflowStep[];
  modules: ServiceFeatureItem[];
  benefits: string[];
  standaloneVsIntegratedNote: string;
  compatibleModuleNames: string[];
  relatedErpSlugs: string[];
  relatedServiceSlugs: string[];
  relatedIndustrySlug: string;
  faqs: FaqEntry[];
}

export interface ErpShowcaseItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  workflowFocus: string;
  detailHref: string;
  enquirySolutionValue: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface ErpResourceGuide {
  slug: string;
  title: string;
  category: string;
  summary: string;
  fullContent: string[];
  keyTakeaways: string[];
  relatedErpSlug: string;
  relatedBlogSlug?: string;
}

export interface ErpWhyChooseItem {
  title: string;
  detail: string;
}

