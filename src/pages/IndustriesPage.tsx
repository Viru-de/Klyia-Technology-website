import React from 'react';
import {ArrowRight} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Container} from '../components/ui/Container.tsx';
import {MediaFrame} from '../components/ui/MediaFrame.tsx';
import {STATIC_PAGE_BANNERS, toWebpAssetPath} from '../config/banners.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {ALL_INDUSTRIES} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface IndustriesPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function IndustriesPage({breadcrumbs}: IndustriesPageProps) {
  const priorityIndustries = ALL_INDUSTRIES.filter((item) => Boolean(item.priorityBadge));
  const otherIndustries = ALL_INDUSTRIES.filter((item) => !item.priorityBadge);

  return (
    <>
      <InnerPageBanner
        title="Industries We Serve"
        subtitle="Specialized software, ERP platforms, B2B websites, WhatsApp automation, and search growth across 13 Indian industrial and commercial sectors."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.industries.image}
        backgroundAlt={STATIC_PAGE_BANNERS.industries.alt}
        ctaLabel={STATIC_PAGE_BANNERS.industries.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.industries.ctaHref}
      />

      <section className="bg-[#080808] py-14 sm:py-18 border-b border-[#303030]">
        <Container className="space-y-14">
          {/* Priority Sectors */}
          <div className="space-y-6">
            <div className="max-w-3xl space-y-2">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>Priority Sector Deep Expertise</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Steel &amp; Iron, Solar EPC &amp; Manufacturing
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {priorityIndustries.map((industry) => (
                <article
                  key={industry.slug}
                  className="relative group flex flex-col overflow-hidden rounded-xl border border-[#303030] bg-[#141414] transition-all duration-200 hover:border-[#D41514] hover:shadow-[0_16px_38px_-16px_rgba(212,21,20,0.28)]"
                >
                  <div className="aspect-[16/10] w-full bg-[#111111]">
                    <MediaFrame
                      src={industry.heroImage || '/src/assets/images/industry_steel_iron_1795005438477.jpg'}
                      webpSrc={toWebpAssetPath(industry.heroImage || '/src/assets/images/industry_steel_iron_1795005438477.jpg')}
                      alt={industry.heroImageAlt || industry.name}
                      width={800}
                      height={500}
                      fallbackLabel={industry.name}
                      imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D41514]">
                        {industry.priorityBadge}
                      </span>
                      <p className="text-xl font-bold text-white group-hover:text-[#D41514] transition-colors">
                        <Link href={industry.canonicalPath} className="after:absolute after:inset-0">
                          {industry.name}
                        </Link>
                      </p>
                      <p className="text-sm leading-relaxed text-[#969696]">
                        {industry.heroSubtitle}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white pt-3 border-t border-[#303030]"
                    >
                      <span>Explore {industry.name} Playbook</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Additional Industries */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Commercial, Institutional &amp; Regional Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherIndustries.map((industry) => (
                <article
                  key={industry.slug}
                  className="relative group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-[#303030] bg-[#111111] transition-all duration-200 hover:border-[#D41514]"
                >
                  <div className="sm:w-48 shrink-0 bg-[#141414] aspect-[4/3] sm:aspect-auto">
                    <MediaFrame
                      src={industry.heroImage || '/src/assets/images/banner_obsidian_architecture_1795006490317.jpg'}
                      webpSrc={toWebpAssetPath(industry.heroImage || '/src/assets/images/banner_obsidian_architecture_1795006490317.jpg')}
                      alt={industry.heroImageAlt || industry.name}
                      width={600}
                      height={450}
                      fallbackLabel={industry.name}
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                    <div>
                      <p className="text-lg font-bold text-white group-hover:text-[#D41514] transition-colors">
                        <Link href={industry.canonicalPath} className="after:absolute after:inset-0">
                          {industry.name}
                        </Link>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#969696]">
                        {industry.heroSubtitle}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA] pt-3 border-t border-[#303030]"
                    >
                      <span>View {industry.name} Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
