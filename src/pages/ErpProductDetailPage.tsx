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
    <>
      <InnerPageBanner
        title={product.h1}
        subtitle={product.heroSubtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={product.heroImage}
        backgroundAlt={product.heroImageAlt}
        ctaLabel={`Request ${product.shortTitle} Demo`}
        ctaHref="#product-consultation-form"
      />

      {/* Overview & Workflow-First Philosophy */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <Link
              href={ROUTES.ERP_HUB}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to All ERP Software Solutions</span>
            </Link>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Category {product.code} · {product.industryLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
                <span>Custom Workflow Fit</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900">
                Engineered Around Real {product.industryLabel} Workflows
              </h2>
              {product.overview.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-slate-800 leading-relaxed">
                <strong className="text-blue-900">Why Custom Build:</strong> {product.workflowFitNote}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2.5 shadow-sm">
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
      <section className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Workflow className="w-4 h-4" aria-hidden="true" />
              <span>End-to-End Execution</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900">
              How {product.name} Works Step by Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {product.workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="rounded-xl border border-slate-200 bg-white p-5 space-y-2.5 shadow-2xs"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-xs font-bold text-white">
                  {ws.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{ws.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{ws.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Included */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Included Capabilities</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900">
              Specialized Modules in {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.modules.map((mod) => (
              <div
                key={mod.title}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2"
              >
                <h3 className="text-base font-bold text-slate-900">{mod.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{mod.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits & Modular Compatibility */}
      <section className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900">
                Operational Benefits for Your Team
              </h2>
              <ul className="space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2
                      className="w-4 h-4 text-blue-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <Database className="w-5 h-5 text-blue-700 shrink-0" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900">
                  Standalone &amp; Integrated Compatibility
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {product.standaloneVsIntegratedNote}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Compatible Platform Modules
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {product.compatibleModuleNames.map((modName) => (
                    <Link
                      key={modName}
                      href={`${ROUTES.ERP_HUB}#erp-modules`}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800 hover:border-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {modName}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Industry & Service Contextual Links */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Related Domain &amp; Engineering Pages
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
                  {relatedIndustry && (
                    <Link
                      href={relatedIndustry.canonicalPath}
                      className="text-blue-700 hover:text-blue-900 underline underline-offset-4"
                    >
                      {relatedIndustry.name} Digital Solutions
                    </Link>
                  )}
                  {relatedServices.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={srv.canonicalPath}
                      className="text-blue-700 hover:text-blue-900 underline underline-offset-4"
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
        className="bg-blue-50/40 py-14 sm:py-16 border-b border-slate-200 scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ErpConsultationForm
            sourcePage={product.canonicalPath}
            preselectedSolution={product.name}
            heading={`Request a Consultation or Demo for ${product.name}`}
            subheading={`Share your team size, workflows, and preferred deployment for ${product.name}. We scope around your actual process without generic templates.`}
          />
        </div>
      </section>

      {/* Product FAQs */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VisibleFaqBlock
            variant="light"
            heading={`${product.shortTitle} — Frequently Asked Questions`}
            subtitle={`Practical answers about implementing ${product.name} for your business.`}
            faqs={product.faqs}
          />
        </div>
      </section>

      {/* Related ERP Solutions */}
      {relatedProducts.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-14 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900">
              Explore Related ERP Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={rel.canonicalPath}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 space-y-3 hover:border-blue-600 transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {rel.industryLabel}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {rel.heroSubtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
                    <span>View {rel.shortTitle} Modules</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
