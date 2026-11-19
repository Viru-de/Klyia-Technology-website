import React from 'react';
import {ArrowRight} from 'lucide-react';
import {HOME_INDUSTRIES} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function IndustriesPreview() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Industries We Serve"
            description="Practical software, ERP, and digital growth systems shaped around the operational realities of core industrial and commercial sectors."
          />
          <Button href={ROUTES.INDUSTRIES} variant="outline" size="md" className="self-start md:self-auto">
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_INDUSTRIES.map((industry) => (
            <article
              key={industry.id}
              className="relative group flex flex-col overflow-hidden rounded-xl border border-[#303030] bg-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.28)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#141414]">
                <MediaFrame
                  src={industry.image}
                  alt={industry.alt}
                  width={800}
                  height={600}
                  fallbackLabel={industry.title}
                  imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#CDCBCA] group-hover:text-white transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-[#969696]">
                    {industry.summary}
                  </p>
                </div>

                <Link
                  href={industry.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] group-hover:text-[#D41514] transition-colors after:absolute after:inset-0"
                >
                  <span>{industry.ctaLabel}</span>
                  <ArrowRight
                    className="w-4 h-4 text-[#D41514] transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
