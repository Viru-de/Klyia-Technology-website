import React from 'react';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  SERVICE_CATEGORIES,
  getServiceBySlug,
  getServicesByCategory,
} from '../data/index.ts';
import {saveQuotePrefill} from '../lib/quotePrefill.ts';
import {Link} from '../lib/router.tsx';

interface ServicesPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function ServicesPage({breadcrumbs}: ServicesPageProps) {
  return (
    <>
      <InnerPageBanner
        title="Technology, Software & Digital Growth Services"
        subtitle="Explore dedicated capabilities across Web Engineering, Custom Software & ERP, SEO/GEO/AEO, AI Automation, Brand Identity, and Cloud Infrastructure."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.services.image}
        backgroundAlt={STATIC_PAGE_BANNERS.services.alt}
        ctaLabel={STATIC_PAGE_BANNERS.services.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.services.ctaHref}
      />

      <section className="bg-[#080808] py-14 sm:py-18 border-b border-[#303030]">
        <Container className="space-y-12">
          {/* Quick Category Jump Links */}
          <nav
            aria-label="Service categories"
            className="flex flex-wrap gap-2.5 rounded-xl border border-[#303030] bg-[#141414] p-4"
          >
            {SERVICE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.anchorId}`}
                className="rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
              >
                {category.title}
              </a>
            ))}
          </nav>

          {/* All 6 Pillars */}
          {SERVICE_CATEGORIES.map((category, categoryIndex) => {
            const items = getServicesByCategory(category.id);

            return (
              <section
                key={category.id}
                id={category.anchorId}
                className="scroll-mt-24 rounded-2xl border border-[#303030] bg-[#141414] p-6 sm:p-8 lg:p-10 space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#303030]">
                  <div className="max-w-3xl space-y-2">
                    <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[#D41514] tabular-nums">
                      0{categoryIndex + 1}
                    </span>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                      {category.summary}
                    </p>
                  </div>
                  <Button
                    href={ROUTES.GET_A_QUOTE}
                    onNavigate={() => saveQuotePrefill({service: category.shortTitle})}
                    variant="outline"
                    size="sm"
                  >
                    <span>Discuss {category.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((service) => (
                    <article
                      key={service.slug}
                      className="relative group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-5 sm:p-6 transition-all duration-200 hover:border-[#D41514] hover:shadow-[0_12px_30px_-14px_rgba(212,21,20,0.24)]"
                    >
                      <div>
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-1" aria-hidden="true" />
                          <p className="text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                            <Link href={service.canonicalPath} className="after:absolute after:inset-0">
                              {service.name}
                            </Link>
                          </p>
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#969696]">
                          {service.heroSubtitle}
                        </p>
                      </div>

                      <div
                        aria-hidden="true"
                        className="mt-4 pt-3 border-t border-[#303030]/60 inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA]"
                      >
                        <span>Explore {service.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D41514] transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </article>
                  ))}
                </div>

                {category.crossLinkedSlugs && category.crossLinkedSlugs.length > 0 ? (
                  <div className="pt-4 border-t border-[#303030] flex flex-wrap items-center gap-3 text-xs text-[#969696]">
                    <span className="font-semibold text-[#CDCBCA]">Closely Connected Capabilities:</span>
                    {category.crossLinkedSlugs.map((cross) => {
                      const target = getServiceBySlug(cross.slug);
                      if (!target) return null;
                      return (
                        <Link
                          key={cross.slug}
                          href={target.canonicalPath}
                          className="rounded-md border border-[#303030] bg-[#080808] px-3 py-1.5 text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                        >
                          {cross.name} ({cross.primaryCategoryNote})
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </section>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
