import React from 'react';
import {ArrowRight, Check} from 'lucide-react';
import {TECHNOLOGY_SOLUTIONS} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function SolutionsPreview() {
  const featuredSolutions = TECHNOLOGY_SOLUTIONS.filter((item) => item.featured);
  const standardSolutions = TECHNOLOGY_SOLUTIONS.filter((item) => !item.featured);

  return (
    <section id="solutions" className="bg-[#141414] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="mb-12">
          <SectionHeading
            eyebrow="Integrated Platforms"
            title="Technology Solutions Built for Real Operations"
            description="Modular enterprise systems, industry-specific ERPs, and AI-enabled growth tools designed to unify disconnected workflows."
          />
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Marquee Industrial & Solar ERP Cards */}
          {featuredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-[#303030] bg-[#1B1B1B] p-7 sm:p-8 transition-all duration-200 hover:border-[#D41514]/55 hover:shadow-[0_14px_36px_-16px_rgba(212,21,20,0.28)]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#D41514]">
                  Flagship Solution
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[#CDCBCA]">
                  {solution.summary}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {solution.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-[#CDCBCA]">
                      <Check className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-[#303030] flex items-center justify-between gap-4">
                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors"
                >
                  <span>{solution.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                </Link>
                <Link
                  href={solution.quoteHref || ROUTES.GET_A_QUOTE}
                  className="text-xs font-semibold text-[#969696] hover:text-white transition-colors"
                >
                  {solution.quoteLabel || 'Request Proposal'}
                </Link>
              </div>
            </div>
          ))}

          {/* Four Complementary Platform Cards */}
          {standardSolutions.map((solution) => (
            <div
              key={solution.id}
              className="lg:col-span-3 sm:col-span-1 flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.24)]"
            >
              <div>
                <h3 className="text-lg font-bold text-[#CDCBCA]">
                  {solution.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.6] text-[#969696]">
                  {solution.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {solution.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-xs leading-relaxed text-[#CDCBCA]">
                      <Check className="w-3.5 h-3.5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={solution.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors"
              >
                <span>{solution.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
