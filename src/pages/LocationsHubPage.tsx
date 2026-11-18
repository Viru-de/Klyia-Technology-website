import React from 'react';
import {ArrowRight, MapPin} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {ALL_LOCATIONS} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface LocationsHubPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

const REGION_GROUPS = [
  {city: 'Bhilai', subtitle: 'Headquarters & Immediate Plant/Commercial Visits'},
  {city: 'Durg', subtitle: 'Twin-City On-Site & Mandi/Institutional Support'},
  {city: 'Raipur', subtitle: 'Capital Belt Industrial, Solar & Enterprise Delivery'},
  {city: 'Chhattisgarh', subtitle: 'Statewide Across Bilaspur, Korba, Raigarh & Rajnandgaon'},
  {city: 'India', subtitle: 'Pan-India Remote Engineering & Digital Transformation'},
];

export function LocationsHubPage({breadcrumbs}: LocationsHubPageProps) {
  return (
    <>
      <InnerPageBanner
        title="Locations We Serve"
        subtitle="Headquartered in Risali, Bhilai — partnering on-site across Bhilai, Durg, and Raipur, and delivering software, web, and search growth nationwide."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.locations.image}
        backgroundAlt={STATIC_PAGE_BANNERS.locations.alt}
        ctaLabel={STATIC_PAGE_BANNERS.locations.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.locations.ctaHref}
      />

      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-12">
          <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h2 className="text-base font-bold text-white">Verified Physical Office</h2>
                <p className="text-sm text-[#CDCBCA]">{BRAND.address.full}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-[#969696]">
              On-site Bhilai, Durg &amp; Raipur | Pan-India Remote Delivery
            </span>
          </div>

          <div className="space-y-10">
            {REGION_GROUPS.map((group) => {
              const items = ALL_LOCATIONS.filter((loc) => loc.city === group.city);
              if (items.length === 0) return null;

              return (
                <div key={group.city} className="space-y-4">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      {group.city}
                    </h2>
                    <p className="text-sm text-[#969696]">{group.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {items.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={loc.canonicalPath}
                        className="group rounded-xl border border-[#303030] bg-[#111111] p-5 hover:border-[#D41514] transition-colors flex flex-col justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                            {loc.regionLabel}
                          </span>
                          <h3 className="text-lg font-bold text-white group-hover:text-[#D41514] transition-colors">
                            {loc.serviceFocus} in {loc.city}
                          </h3>
                          <p className="text-sm text-[#969696] leading-relaxed">{loc.heroSubtitle}</p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA]">
                          <span>Open City Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
