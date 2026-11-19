import React from 'react';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';

const PRIORITY_SPOTLIGHTS = [
  {
    badge: 'Priority Focus 01 · Bhilai Industrial Core',
    title: 'Steel & Iron Industry Solutions',
    summary:
      'Comprehensive websites, structural steel grade catalogs, rolling yield & dual-unit (MT + bundles) Steel ERP, weighbridge-ready billing, and WhatsApp dispatch alerts.',
    image: '/src/assets/images/industry_steel_iron_1795005438477.jpg',
    alt: 'Steel rolling mill and structural steel yard technology solutions',
    href: '/industries/steel-iron-industry/',
    ctaLabel: 'Steel Industry Solutions',
    secondaryLabel: 'View Industry Solutions',
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
    alt: 'Commercial and rooftop solar EPC engineering software and portals',
    href: '/industries/solar-renewable-energy/',
    ctaLabel: 'Solar Industry Solutions',
    secondaryLabel: 'Solar ERP Software',
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
      <Container className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
            <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
            <span>Specialized Sector Focus</span>
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white leading-[1.18]">
            Deep Engineering for Steel &amp; Solar EPC Enterprises
          </h2>
          <p className="text-base leading-relaxed text-[#969696]">
            Beyond general IT websites, our Bhilai team designs deeply tailored digital workflows for Chhattisgarh’s industrial backbone and fast-growing solar EPC sector.
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
      </Container>
    </section>
  );
}
