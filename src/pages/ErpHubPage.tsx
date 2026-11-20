import React, {useState} from 'react';
import {
  ArrowRight,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers3,
  MessageSquareText,
} from 'lucide-react';
import {ErpConsultationForm} from '../components/erp/ErpConsultationForm.tsx';
import {ErpDashboardShowcase} from '../components/erp/ErpDashboardShowcase.tsx';
import {ErpModulesSection} from '../components/erp/ErpModulesSection.tsx';
import {ErpResourcesSection} from '../components/erp/ErpResourcesSection.tsx';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {VisibleFaqBlock} from '../components/shared/VisibleFaqBlock.tsx';
import {MediaFrame} from '../components/ui/MediaFrame.tsx';
import {BANNER_IMAGES, toWebpAssetPath} from '../config/banners.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  ERP_DEVELOPMENT_PROCESS,
  ERP_LANDING_FAQS,
  ERP_POSITIONING,
  ERP_PRODUCTS,
  ERP_SHOWCASE_ITEMS,
  ERP_WHY_CHOOSE_POINTS,
} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface ErpHubPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function ErpHubPage({breadcrumbs}: ErpHubPageProps) {
  const [selectedSolution, setSelectedSolution] = useState('Manufacturing & Industrial ERP');

  const scrollToConsultationWithSolution = (solutionName: string) => {
    setSelectedSolution(solutionName);
    if (typeof document !== 'undefined') {
      const target = document.getElementById('erp-consultation-form');
      target?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <>
      {/* Consistent Obsidian Inner Page Banner with Breadcrumbs & Main H1 */}
      <InnerPageBanner
        title={ERP_POSITIONING.heroH1}
        subtitle={ERP_POSITIONING.heroSubheading}
        breadcrumbs={breadcrumbs}
        backgroundImage={BANNER_IMAGES.erpEnterpriseConsole}
        backgroundAlt="Enterprise ERP software platform developed by Klyia Technology showing multi-department workflows"
        ctaLabel="Request Free ERP Consultation"
        ctaHref="#erp-consultation-form"
      />

      {/* Light Enterprise Positioning, Hero Action Bar & Interactive ERP Dashboard Preview */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
                <span>{ERP_POSITIONING.tagline}</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Software Built Around Your Business Workflow — Not Generic Spreadsheets
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                {ERP_POSITIONING.workflowPhilosophy}
              </p>

              {/* Core 3 Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#erp-consultation-form"
                  onClick={() => setSelectedSolution('Custom ERP Development (Tailored Scope)')}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#D41514] px-5 py-3 text-sm font-semibold text-white hover:bg-[#E31E1D] transition-colors whitespace-nowrap"
                >
                  <MessageSquareText className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Request Free ERP Consultation</span>
                </a>
                <a
                  href="#erp-consultation-form"
                  onClick={() => setSelectedSolution('Manufacturing & Industrial ERP')}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition-colors whitespace-nowrap"
                >
                  <CalendarCheck2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Book a Software Demo</span>
                </a>
                <a
                  href="#erp-solutions-catalog"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap"
                >
                  <Layers3 className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                  <span>Explore ERP Solutions</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2.5 shadow-sm">
                <MediaFrame
                  src={BANNER_IMAGES.erpEnterpriseConsole}
                  webpSrc={toWebpAssetPath(BANNER_IMAGES.erpEnterpriseConsole)}
                  alt="Enterprise SaaS ERP workstation displaying production workflow, multi-warehouse stock, and GST ledger analytics"
                  width={1200}
                  height={675}
                  lazy={false}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Interactive Enterprise ERP Dashboard Preview */}
          <ErpDashboardShowcase />
        </div>
      </section>

      {/* Industry-Specific ERP Solutions (All 11 Dedicated Products) */}
      <section
        id="erp-solutions-catalog"
        aria-labelledby="erp-catalog-heading"
        className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
              <span>11 Industry-Specific ERP Systems</span>
            </p>
            <h2
              id="erp-catalog-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
            >
              Industry-Specific ERP &amp; Business Automation Products
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Select a domain-tailored ERP architecture built around your operational vocabulary, billing compliance, unit tracking, and department handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ERP_PRODUCTS.map((product) => (
              <article
                key={product.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-500 transition-colors"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                    <MediaFrame
                      src={product.heroImage}
                      webpSrc={toWebpAssetPath(product.heroImage)}
                      alt={product.heroImageAlt}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {product.code} · {product.industryLabel}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">{product.heroSubtitle}</p>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {product.modules.slice(0, 5).map((mod) => (
                        <li
                          key={mod.title}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700"
                        >
                          <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" aria-hidden="true" />
                          <span>{mod.title}</span>
                        </li>
                      ))}
                      {product.modules.length > 5 && (
                        <li className="text-xs font-semibold text-blue-700 pl-5">
                          + {product.modules.length - 5} more integrated capabilities
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-4 flex items-center justify-between gap-3">
                  <Link
                    href={product.canonicalPath}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>Explore {product.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => scrollToConsultationWithSolution(product.name)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#D41514] whitespace-nowrap cursor-pointer"
                  >
                    Request Demo
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful ERP Modules (16 Modules + Standalone vs Integrated Explanation) */}
      <ErpModulesSection />

      {/* Why Choose Klyia Technology? (12 Genuine Points) */}
      <section
        aria-labelledby="erp-why-choose-heading"
        className="bg-white py-14 sm:py-16 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
              <span>Engineering Advantage</span>
            </p>
            <h2
              id="erp-why-choose-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
            >
              Why Choose Klyia Technology for Custom ERP Development?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Practical software engineering focused on operational control, verifiable security, data accuracy, and long-term adaptability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ERP_WHY_CHOOSE_POINTS.map((point, idx) => (
              <div
                key={point.title}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-700 text-xs font-bold text-white shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{point.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 pl-10">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Development Process (5-Step Timeline) */}
      <section
        aria-labelledby="erp-process-heading"
        className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
              <span>Structured Delivery Methodology</span>
            </p>
            <h2
              id="erp-process-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
            >
              Our 5-Step ERP Development &amp; Rollout Process
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Every custom ERP project follows an auditable 5-phase engineering sequence designed to prevent operational disruption during deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ERP_DEVELOPMENT_PROCESS.map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  {idx < ERP_DEVELOPMENT_PROCESS.length - 1 && (
                    <ChevronRight className="hidden md:block w-4 h-4 text-blue-400" aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Product Showcase (Authentic Klyia Systems Only) */}
      <section
        id="erp-product-showcase"
        aria-labelledby="erp-showcase-heading"
        className="bg-white py-14 sm:py-16 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
              <span>Real Klyia ERP Architectures</span>
            </p>
            <h2
              id="erp-showcase-heading"
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
            >
              ERP Product Showcase
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Dedicated business software platforms engineered by Klyia Technology for Solar EPC teams, wholesale fruit mandis, steel plants, and custom CRM operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ERP_SHOWCASE_ITEMS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-2xs"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                    <MediaFrame
                      src={item.image}
                      webpSrc={toWebpAssetPath(item.image)}
                      alt={item.imageAlt}
                      width={960}
                      height={540}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {item.category}
                      </span>
                      <Cpu className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-600 bg-white border border-slate-200 rounded-md px-3 py-1.5">
                      {item.workflowFocus}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700">{item.summary}</p>

                    <ul className="space-y-1.5 pt-1">
                      {item.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2
                            className="w-4 h-4 text-blue-700 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 bg-white px-6 py-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={item.detailHref}
                    className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => scrollToConsultationWithSolution(item.enquirySolutionValue)}
                    className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-[#D41514] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#E31E1D] transition-colors cursor-pointer"
                  >
                    <span>Request Similar ERP</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Consultation Form */}
      <section
        id="erp-consultation-form"
        aria-label="ERP Consultation Request Form"
        className="bg-blue-50/40 py-14 sm:py-16 border-b border-slate-200 scroll-mt-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ErpConsultationForm
            sourcePage={ROUTES.ERP_HUB}
            preselectedSolution={selectedSolution}
          />
        </div>
      </section>

      {/* ERP Learning & Resources (9 Guides) */}
      <ErpResourcesSection />

      {/* FAQs (10 Questions) */}
      <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VisibleFaqBlock
            variant="light"
            heading="ERP Software Development — Frequently Asked Questions"
            subtitle="Direct answers on customization, standalone module rollout, integrations, deployment choices, migration, and multi-branch support."
            faqs={ERP_LANDING_FAQS}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
