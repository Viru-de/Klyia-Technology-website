import React from 'react';
import {ArrowRight} from 'lucide-react';
import {toWebpAssetPath} from '../../config/banners.ts';
import {CORE_SERVICES} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {ServiceIcon} from '../ui/Icon.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function ServicesPreview() {
  return (
    <section className="bg-[#141414] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Software, ERP & Digital Growth Services"
            description="End-to-end engineering and search growth capabilities built to modernize operations and expand customer reach."
          />
          <Button href={ROUTES.SERVICES} variant="outline" size="md" className="self-start md:self-auto">
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_SERVICES.map((service) => (
            <article
              key={service.id}
              className="relative group flex flex-col overflow-hidden rounded-xl border border-[#303030] bg-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.28)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080808]">
                <MediaFrame
                  src={service.image}
                  webpSrc={service.webpImage ?? toWebpAssetPath(service.image)}
                  alt={service.alt}
                  width={640}
                  height={400}
                  fallbackLabel={service.title}
                  imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] text-[#D41514] group-hover:bg-[#D41514] group-hover:text-white group-hover:border-[#D41514] transition-colors duration-200">
                      <ServiceIcon name={service.icon} className="w-4 h-4" />
                    </div>
                    <h3 className="text-[17px] font-bold leading-snug text-[#CDCBCA] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-[1.65] text-[#969696]">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="mt-5 pt-3.5 border-t border-[#303030]/70 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] group-hover:text-[#D41514] transition-colors after:absolute after:inset-0"
                >
                  <span>{service.ctaLabel}</span>
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
