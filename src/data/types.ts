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
