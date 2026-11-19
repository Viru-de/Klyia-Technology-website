import React, {useState} from 'react';
import {Building2, ExternalLink, Globe2, MapPin} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';
import {LOCATION_COVERAGES} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function LocationsSection() {
  const [selectedId, setSelectedId] = useState<string>(LOCATION_COVERAGES[0].id);
  const activeRegion =
    LOCATION_COVERAGES.find((loc) => loc.id === selectedId) ?? LOCATION_COVERAGES[0];

  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Regional Roots & National Reach"
              title="Rooted in Bhilai. Supporting Businesses Across India."
              description="Our headquarters in Risali, Bhilai enables direct on-site collaboration across Chhattisgarh's industrial corridor alongside structured remote engineering for clients nationwide."
            />

            <div className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#CDCBCA]">
                <Building2 className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <span>{BRAND.name} — Head Office, Bhilai</span>
              </div>
              <address className="not-italic text-sm leading-relaxed text-[#969696]">
                {BRAND.address.full}
              </address>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <a
                  href={BRAND.phoneHref}
                  className="font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors tabular-nums"
                >
                  {BRAND.phoneDisplay}
                </a>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#D41514] hover:text-white transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {/* Interactive Region Selector Tabs */}
            <div
              role="tablist"
              aria-label="Service Coverage Regions"
              className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#111111] border border-[#303030]"
            >
              {LOCATION_COVERAGES.map((loc) => {
                const isSelected = loc.id === activeRegion.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedId(loc.id)}
                    className={`flex-1 min-w-[96px] rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#D41514] text-white shadow-[0_6px_18px_-6px_rgba(212,21,20,0.6)]'
                        : 'text-[#CDCBCA] hover:bg-[#1B1B1B] hover:text-white'
                    }`}
                  >
                    {loc.region}
                  </button>
                );
              })}
            </div>

            {/* Active Coverage Card */}
            <div
              role="tabpanel"
              aria-label={`${activeRegion.region} service coverage`}
              className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] text-[#D41514]">
                    {activeRegion.id === 'india' ? (
                      <Globe2 className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    )}
                  </span>
                  <div>
                    <p className="text-xl font-bold text-white">
                      {activeRegion.region}
                    </p>
                    <p className="text-xs font-semibold text-[#D41514]">
                      {activeRegion.scope}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#CDCBCA]">
                {activeRegion.description}
              </p>

              {/* All 5 Coverage Cards Summary Grid */}
              <div className="mt-6 pt-6 border-t border-[#303030] grid grid-cols-2 sm:grid-cols-5 gap-3">
                {LOCATION_COVERAGES.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedId(loc.id)}
                    className={`text-left rounded-lg border p-3 transition-colors cursor-pointer ${
                      loc.id === activeRegion.id
                        ? 'border-[#D41514] bg-[#1B1B1B]'
                        : 'border-[#303030] bg-[#141414] hover:border-[#D41514]/50'
                    }`}
                  >
                    <span className="block text-sm font-bold text-[#CDCBCA]">
                      {loc.region}
                    </span>
                    <span className="block text-[11px] text-[#969696] mt-0.5">
                      {loc.isHeadquarters ? 'Headquarters' : 'Service Region'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button href={activeRegion.href} variant="primary" size="sm">
                  Explore {activeRegion.region} Solutions
                </Button>
                <Button href={ROUTES.LOCATIONS} variant="outline" size="sm">
                  All Regional Guides
                </Button>
                <Button href={ROUTES.CONTACT} variant="outline" size="sm">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
