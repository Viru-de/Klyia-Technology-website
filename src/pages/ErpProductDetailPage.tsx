import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  Workflow,
} from 'lucide-react';
import {ErpConsultationForm} from '../components/erp/ErpConsultationForm.tsx';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {VisibleFaqBlock} from '../components/shared/VisibleFaqBlock.tsx';
import {MediaFrame} from '../components/ui/MediaFrame.tsx';
import {toWebpAssetPath} from '../config/banners.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  ERP_PRODUCTS,
  getIndustryBySlug,
  getServiceBySlug,
} from '../data/index.ts';
import type {ErpProductData} from '../data/types.ts';
import {Link} from '../lib/router.tsx';

interface ErpProductDetailPageProps {
  product: ErpProductData;
  breadcrumbs: BreadcrumbEntry[];
}

export function ErpProductDetailPage({product, breadcrumbs}: ErpProductDetailPageProps) {
  const relatedProducts = ERP_PRODUCTS.filter((p) => product.relatedErpSlugs.includes(p.slug));
  const relatedServices = product.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedIndustry = getIndustryBySlug(product.relatedIndustrySlug);

  return (
    <div className="bg-[#080808] text-[#CDCBCA]">
      <InnerPageBanner
        title={product.h1}
        subtitle={product.heroSubtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={product.heroImage}
        backgroundAlt={product.heroImageAlt}
        ctaLabel={`Request ${product.shortTitle} Demo`}
        ctaHref="#product-consultation-form"
        headingClassName="text-[#CDCBCA]"
      />

      {/* Overview & Workflow-First Philosophy */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#303030] pb-4">
            <Link
              href={ROUTES.ERP_HUB}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
              <span>Back to All ERP Software Solutions</span>
            </Link>
            <span className="text-xs font-bold uppercase tracking-wider text-[#969696]">
              Category {product.code} · {product.industryLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>Custom Workflow Fit</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#CDCBCA]">
                Engineered Around Real {product.industryLabel} Workflows
              </h2>
              {product.overview.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base leading-relaxed text-[#CDCBCA]">
                  {paragraph}
                </p>
              ))}
              <div className="rounded-xl border border-[#D41514]/40 bg-[#141414] p-4 text-sm text-[#CDCBCA] leading-relaxed">
                <strong className="text-white">Why Custom Build:</strong> {product.workflowFitNote}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#303030] bg-[#141414] p-2.5 shadow-[0_14px_38px_rgba(0,0,0,0.45)]">
                <MediaFrame
                  src={product.heroImage}
                  webpSrc={toWebpAssetPath(product.heroImage)}
                  alt={product.heroImageAlt}
                  width={960}
                  height={540}
                  lazy={false}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Operational Workflow */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D41514]">
              <Workflow className="w-4 h-4" aria-hidden="true" />
              <span>End-to-End Execution</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#CDCBCA]">
              How {product.name} Works Step by Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#D41514] text-xs font-bold text-white">
                  {ws.step}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">{ws.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#969696]">{ws.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Included */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D41514]">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Included Capabilities</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#CDCBCA]">
              Specialized Modules in {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.modules.map((mod) => (
              <div
                key={mod.title}
                className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2 hover:border-[#D41514]/50 transition-colors"
              >
                <h3 className="text-base font-bold text-white">{mod.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#969696]">{mod.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits & Modular Compatibility */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#CDCBCA]">
                Operational Benefits for Your Team
              </h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#CDCBCA]">
                    <CheckCircle2
                      className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-[#D41514] shrink-0" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#CDCBCA]">
                  Standalone &amp; Integrated Compatibility
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#CDCBCA]">
                {product.standaloneVsIntegratedNote}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#D41514]">
                  Compatible Platform Modules
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.compatibleModuleNames.map((modName) => (
                    <Link
                      key={modName}
                      href={`${ROUTES.ERP_HUB}#erp-modules`}
                      className="rounded-lg border border-[#303030] bg-[#141414] px-3 py-2 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                    >
                      {modName}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Industry & Service Contextual Links */}
              <div className="pt-3 border-t border-[#303030] space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#969696]">
                  Related Domain &amp; Engineering Pages
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
                  {relatedIndustry && (
                    <Link
                      href={relatedIndustry.canonicalPath}
                      className="text-[#CDCBCA] hover:text-[#D41514] underline underline-offset-4 transition-colors"
                    >
                      {relatedIndustry.name} Digital Solutions
                    </Link>
                  )}
                  {relatedServices.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={srv.canonicalPath}
                      className="text-[#CDCBCA] hover:text-[#D41514] underline underline-offset-4 transition-colors"
                    >
                      {srv.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Selected Product Consultation Form */}
      <section
        id="product-consultation-form"
        aria-label={`${product.name} Consultation Form`}
        className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030] scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ErpConsultationForm
            variant="dark"
            sourcePage={product.canonicalPath}
            preselectedSolution={product.name}
            heading={`Request a Consultation or Demo for ${product.name}`}
            subheading={`Share your team size, workflows, and preferred deployment for ${product.name}. We scope around your actual process without generic templates.`}
          />
        </div>
      </section>

      {/* Product FAQs */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VisibleFaqBlock
            variant="dark"
            headingClassName="text-[#CDCBCA]"
            heading={`${product.shortTitle} — Frequently Asked Questions`}
            subtitle={`Practical answers about implementing ${product.name} for your business.`}
            faqs={product.faqs}
          />
        </div>
      </section>

      {/* Related ERP Solutions */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#080808] py-12 sm:py-14 border-b border-[#303030]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#CDCBCA]">
              Explore Related ERP Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.canonicalPath}
                  className="group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-3 hover:border-[#D41514] transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D41514]">
                      {rel.industryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#969696] line-clamp-2">
                      {rel.heroSubtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CDCBCA] group-hover:text-white transition-colors">
                    <span>View {rel.shortTitle} Modules</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
