import React from 'react';
import {ArrowRight, Compass, MapPin, Search, Sparkles} from 'lucide-react';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

const SEARCH_PILLARS = [
  {
    title: 'SEO & Technical Crawlability',
    description:
      'Server-rendered HTML, fast mobile Core Web Vitals, clean canonical URLs, and structured internal architecture built to earn sustained Google Search visibility.',
    href: '/services/search-engine-optimization/',
    ctaLabel: 'Explore SEO Services',
    icon: Search,
  },
  {
    title: 'Local SEO & Google Business Profile',
    description:
      'Capture regional buyers searching across Bhilai, Durg, Raipur, and Chhattisgarh through accurate NAP signals, optimized Maps categories, and verified location pages.',
    href: '/services/local-seo-services/',
    ctaLabel: 'Local SEO Services',
    icon: MapPin,
  },
  {
    title: 'GEO (Generative Engine Optimization)',
    description:
      'Structure clear company facts, entity context, and service authority so AI-assisted search summaries recognize and cite your business accurately.',
    href: '/services/geo-generative-engine-optimization/',
    ctaLabel: 'GEO Optimization Services',
    icon: Sparkles,
  },
  {
    title: 'AEO (Answer Engine Optimization)',
    description:
      'Publish concise definitions, comparison tables, and visible Schema-backed FAQs helping answer engines surface direct answers about your offerings.',
    href: '/services/aeo-answer-engine-optimization/',
    ctaLabel: 'AEO Optimization Services',
    icon: Compass,
  },
];

export function HomeSeoGeoAeoSection() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 border-b border-[#303030]">
      <Container className="space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
              <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
              <span>Modern Search Architecture</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white leading-[1.18]">
              Engineered for Google Search, Local Maps &amp; AI Discovery (SEO, GEO &amp; AEO)
            </h2>
            <p className="text-base leading-relaxed text-[#969696]">
              Modern buyers research suppliers across Google links, Map packs, and conversational AI tools. We build every digital platform from scratch for all three layers—ethically and transparently without fake ranking guarantees.
            </p>
          </div>
          <Link
            href="/blog/seo-vs-geo-vs-aeo-difference-explained/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors shrink-0"
          >
            <span>Compare SEO vs GEO vs AEO</span>
            <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEARCH_PILLARS.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.title}
                className="relative group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 transition-all duration-200 hover:border-[#D41514]"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303030] bg-[#141414] text-[#D41514]">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D41514] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#969696]">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="mt-5 pt-3 border-t border-[#303030] inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA] group-hover:text-white after:absolute after:inset-0"
                >
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#303030] bg-[#141414] px-6 py-4 text-sm">
          <span className="text-[#CDCBCA]">
            Need stronger local calls across Bhilai, Durg &amp; Raipur? Explore our{' '}
            <Link
              href="/services/google-business-profile-optimization/"
              className="font-semibold text-white underline underline-offset-4 hover:text-[#D41514]"
            >
              Google Business Profile Optimization
            </Link>{' '}
            or browse{' '}
            <Link
              href={ROUTES.LOCATIONS}
              className="font-semibold text-white underline underline-offset-4 hover:text-[#D41514]"
            >
              Regional SEO City Pages
            </Link>
            .
          </span>
        </div>
      </Container>
    </section>
  );
}
