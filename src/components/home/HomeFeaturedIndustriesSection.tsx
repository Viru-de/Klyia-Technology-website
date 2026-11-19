import React from 'react';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {SOLAR_CORE_VISUAL_SERVICES} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {saveQuotePrefill} from '../../lib/quotePrefill.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';

const PRIORITY_SPOTLIGHTS = [
  {
    badge: 'Priority Focus 01 · Bhilai Industrial Core',
    title: 'Steel & Iron Industry Solutions',
    summary:
      'Comprehensive websites, structural steel grade catalogs, rolling yield & dual-unit (MT + bundles) Steel ERP, weighbridge-ready billing, and WhatsApp dispatch tracking.',
    image: '/src/assets/images/industry_steel_iron_1795005438477.jpg',
    webpImage: '/src/assets/images/industry_steel_iron_1795005438477.webp',
    alt: 'Steel rolling mill and structural steel yard ERP and tracking solutions in Bhilai',
    href: '/industries/steel-iron-industry/',
    ctaLabel: 'Explore Steel & Iron Playbook',
    secondaryLabel: 'Compare Industry Capabilities',
    secondaryHref: '/industries/',
    bullets: [
      'TMT Bars, Structural Steel, MS Plates, Angles, Channels, Beams, Pipes & Coils',
      'Dual weight (MT/kg) & bundle/piece inventory plus credit limit controls',
      'Dealer rate portals & B2B industrial SEO/GEO',
    ],
  },
  {
    badge: 'Priority Focus 02 · Clean Energy EPC',
    title: 'Solar & Renewable Energy Systems',
    summary:
      'Lead-to-commissioning Solar EPC websites, mobile site-survey CRMs, kW proposal/BOM generators, DISCOM net-metering status logs, serial tracking, and AMC schedules.',
    image: '/src/assets/images/industry_solar_energy_1795005439181.jpg',
    webpImage: '/src/assets/images/industry_solar_energy_1795005439181.webp',
    alt: 'Commercial and rooftop Solar EPC engineering software and Solar ERP portals',
    href: '/industries/solar-renewable-energy/',
    ctaLabel: 'Explore Solar EPC Playbook',
    secondaryLabel: 'Inspect Solar ERP Features',
    secondaryHref: '/services/solar-erp-software/',
    bullets: [
      'Residential Rooftop & Commercial C&I project trackers',
      'Panel/Inverter serial & warranty BOM inventory control',
      'Local SEO, GBP visibility & automated WhatsApp stage alerts',
    ],
  },
];

export function HomeFeaturedIndustriesSection() {
  return (
    <section className="bg-[#141414] py-16 sm:py-20 border-b border-[#303030]">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
            <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
            <span>Specialized Sector Focus</span>
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white leading-[1.18]">
            Deep Engineering for Steel &amp; Solar EPC Enterprises
          </h2>
          <p className="text-base leading-relaxed text-[#969696]">
            Beyond general IT websites, our Bhilai team designs deeply tailored digital workflows for Chhattisgarh’s industrial backbone and fast-growing Solar EPC sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {PRIORITY_SPOTLIGHTS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#303030] bg-[#111111]"
            >
              <div className="aspect-[16/9] w-full bg-[#080808]">
                <MediaFrame
                  src={item.image}
                  webpSrc={item.webpImage}
                  alt={item.alt}
                  width={960}
                  height={540}
                  fallbackLabel={item.title}
                  imgClassName="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 space-y-5">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                    {item.badge}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                    {item.summary}
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-[#CDCBCA]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#303030] flex flex-wrap items-center justify-between gap-3">
                  <Button href={item.href} variant="primary" size="md">
                    <span>{item.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Link
                    href={item.secondaryHref}
                    className="text-xs font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors"
                  >
                    {item.secondaryLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dedicated Core Services for Solar & Renewable Energy Visual Grid */}
        <div className="pt-8 border-t border-[#303030] space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                Solar EPC Software &amp; Digital Infrastructure
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Core Services for Solar &amp; Renewable Energy
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                Dedicated engineering covering solar panel installation pipelines, commercial &amp; industrial Solar EPC execution, Solar ERP project dashboards, and post-commissioning monitoring and maintenance tracking.
              </p>
            </div>
            <Button
              href={ROUTES.GET_A_QUOTE}
              onNavigate={() => saveQuotePrefill({service: 'Solar ERP', industry: 'Solar & Renewable Energy'})}
              variant="outline"
              size="md"
              className="self-start md:self-auto"
            >
              <span>Request Solar EPC Quote</span>
              <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SOLAR_CORE_VISUAL_SERVICES.map((solarItem) => (
              <article
                key={solarItem.id}
                className="relative group flex flex-col justify-between overflow-hidden rounded-xl border border-[#303030] bg-[#111111] transition-all duration-200 hover:border-[#D41514]/65 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.26)]"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#080808]">
                    <MediaFrame
                      src={solarItem.image}
                      webpSrc={solarItem.webpImage}
                      alt={solarItem.alt}
                      width={640}
                      height={400}
                      fallbackLabel={solarItem.title}
                      imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5 space-y-2.5">
                    <h4 className="text-[16px] font-bold leading-snug text-white group-hover:text-[#D41514] transition-colors">
                      {solarItem.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#969696]">
                      {solarItem.summary}
                    </p>
                    <ul className="space-y-1.5 pt-1 text-xs text-[#CDCBCA]">
                      {solarItem.highlights.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-[#303030]/70">
                  <Link
                    href={solarItem.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA] group-hover:text-white after:absolute after:inset-0"
                  >
                    <span>{solarItem.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

