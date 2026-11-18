import React from 'react';
import {ShieldCheck} from 'lucide-react';
import {WHY_CHOOSE_ITEMS} from '../../config/homeData.ts';
import {Container} from '../ui/Container.tsx';
import {SectionHeading} from '../ui/SectionHeading.tsx';

export function WhyChooseUs() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="mb-12">
          <SectionHeading
            eyebrow="Why Klyia Technology"
            title="More Than a Technology Provider. Your Digital Growth Partner."
            description="We focus on dependable engineering, domain clarity, and search-ready web systems built for long-term commercial value."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-xl border border-[#303030] bg-[#111111] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D41514]/55 hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.26)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] text-[#D41514] group-hover:bg-[#D41514] group-hover:text-white group-hover:border-[#D41514] transition-colors">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[#969696] tabular-nums">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#CDCBCA] group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-[#969696]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
