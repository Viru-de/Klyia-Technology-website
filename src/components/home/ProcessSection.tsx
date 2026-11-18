import React from 'react';
import {PROCESS_STEPS} from '../../config/homeData.ts';
import {Container} from '../ui/Container.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function ProcessSection() {
  return (
    <section className="bg-[#141414] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Structured Delivery"
            title="Our Six-Stage Working Process"
            description="From operational discovery through production deployment and ongoing technical support, every engagement follows clear engineering milestones."
          />
        </div>

        <div className="relative">
          {/* Desktop Horizontal Connecting Track */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-8 right-8 h-px bg-[#303030]"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-5 relative">
            {PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="relative flex flex-col rounded-xl border border-[#303030] bg-[#111111] p-5 lg:border-0 lg:bg-transparent lg:p-0"
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#D41514]/50 bg-[#111111] font-[family-name:var(--font-mono)] text-sm font-bold text-[#D41514] tabular-nums shadow-[0_0_20px_-6px_rgba(212,21,20,0.45)]">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#CDCBCA] lg:mt-5">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-[1.6] text-[#969696]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
