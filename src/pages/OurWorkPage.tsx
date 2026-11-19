import React from 'react';
import {ArrowRight, Check} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {TECHNOLOGY_SOLUTIONS} from '../config/homeData.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {saveQuotePrefill} from '../lib/quotePrefill.ts';
import {Link} from '../lib/router.tsx';

interface OurWorkPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function OurWorkPage({breadcrumbs}: OurWorkPageProps) {
  return (
    <>
      <InnerPageBanner
        title="Our Work & Engineering Blueprints"
        subtitle="Explore the software architectures, ERP systems, and search-engineered digital platforms we design for growing businesses."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.ourWork.image}
        backgroundAlt={STATIC_PAGE_BANNERS.ourWork.alt}
        ctaLabel={STATIC_PAGE_BANNERS.ourWork.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.ourWork.ctaHref}
      />

      <section className="bg-[#080808] py-16 sm:py-20 border-b border-[#303030]">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
              <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
              <span>Solution Architecture Focus</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#CDCBCA]">
              Core Systems We Engineer for Enterprise Operations
            </h2>
            <p className="text-base leading-relaxed text-[#969696]">
              Detailed client case studies are added as engagements are cleared for public publication. Below are the core technical architectures our team builds and customizes for client organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECHNOLOGY_SOLUTIONS.map((solution) => (
              <div
                key={solution.id}
                className="flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 sm:p-7 transition-all duration-200 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.24)]"
              >
                <div>
                  <p className="text-xl font-bold text-[#CDCBCA]">{solution.title}</p>
                  <p className="mt-2.5 text-sm leading-[1.65] text-[#969696]">
                    {solution.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {solution.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-[#CDCBCA]">
                        <Check className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#303030] flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors"
                  >
                    <span>Explore {solution.title} Architecture</span>
                    <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                  </Link>
                  <Button
                    href={ROUTES.GET_A_QUOTE}
                    onNavigate={() =>
                      saveQuotePrefill({service: solution.quotePrefillService || solution.title})
                    }
                    variant="outline"
                    size="sm"
                  >
                    <span>Scope {solution.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
