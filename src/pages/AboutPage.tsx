import React from 'react';
import {ArrowRight, Building2, CheckCircle2, ExternalLink, MapPin} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {SocialLinks} from '../components/ui/SocialLinks.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';

interface AboutPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

const CORE_PRINCIPLES = [
  {
    title: 'Operational Understanding First',
    detail:
      'We examine real factory, billing, inventory, and sales workflows before recommending software architecture.',
  },
  {
    title: 'Custom-Engineered Reliability',
    detail:
      'Systems are developed in clean, modular TypeScript architectures built to evolve alongside growing business needs.',
  },
  {
    title: 'Search & AI-Era Discoverability',
    detail:
      'Every public web platform integrates semantic HTML, technical SEO, GEO, and AEO clarity from the start.',
  },
  {
    title: 'Long-Term Partnership Model',
    detail:
      'Headquartered in Risali, Bhilai, our team stays accountable through deployment, training, and continuous support.',
  },
];

export function AboutPage({breadcrumbs}: AboutPageProps) {
  return (
    <>
      <InnerPageBanner
        title="About Klyia Technology"
        subtitle="An IT solutions and digital transformation company building custom software, ERP systems, websites, SEO, GEO, AEO, and AI automation from Bhilai for businesses across India."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.about.image}
        backgroundAlt={STATIC_PAGE_BANNERS.about.alt}
        ctaLabel={STATIC_PAGE_BANNERS.about.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.about.ctaHref}
      />

      <section className="bg-[#080808] py-16 sm:py-20 border-b border-[#303030]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>Who We Are</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#CDCBCA]">
                Technology Built Around Real Industrial &amp; Commercial Operations
              </h2>
              <p className="text-base leading-[1.7] text-[#CDCBCA]">
                As an engineering-led IT and software development company in Bhilai, Klyia Technology partners with manufacturers, industrial suppliers, solar EPC companies, distributors, healthcare providers, and service enterprises across Chhattisgarh and India to replace fragmented workflows with dependable digital systems.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#969696]">
                Rather than treating software development and digital visibility as disconnected silos, we align custom ERP and web engineering with technical SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and practical workflow automation.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Button href={ROUTES.SERVICES} variant="primary" size="md">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button href={ROUTES.CONTACT} variant="outline" size="md">
                  Contact Our Team
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] text-[#D41514]">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-[#CDCBCA]">
                      How We Work With Organizations
                    </p>
                    <p className="text-xs text-[#969696]">
                      Core principles guiding every engagement
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {CORE_PRINCIPLES.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-bold text-[#CDCBCA]">{item.title}</p>
                        <p className="text-sm leading-relaxed text-[#969696] mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm space-y-1.5">
                    <p className="font-bold text-[#CDCBCA]">{BRAND.name} — Bhilai Office</p>
                    <address className="not-italic text-[#969696]">
                      {BRAND.address.full}
                    </address>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5 text-xs">
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
                        <span>Directions on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#303030] space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                    Connect With Klyia Technology
                  </p>
                  <SocialLinks variant="card" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
