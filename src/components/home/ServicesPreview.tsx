import React from 'react';
import {ArrowRight} from 'lucide-react';
import {CORE_SERVICES} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {ServiceIcon} from '../ui/Icon.tsx';
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
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.28)]"
            >
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] text-[#D41514] group-hover:bg-[#D41514] group-hover:text-white group-hover:border-[#D41514] transition-colors duration-200">
                  <ServiceIcon name={service.icon} className="w-5 h-5" />
                </div>

                <h3 className="mt-5 text-[17px] font-bold leading-snug text-[#CDCBCA] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm leading-[1.65] text-[#969696]">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#CDCBCA] group-hover:text-[#D41514] transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight
                  className="w-4 h-4 text-[#D41514] transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
