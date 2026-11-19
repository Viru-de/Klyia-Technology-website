import React from 'react';
import {TRUST_PILLARS} from '../../config/homeData.ts';
import {Container} from '../ui/Container.tsx';

export function TrustSection() {
  return (
    <section className="bg-[#141414] py-14 sm:py-16 lg:py-20 border-b border-[#303030]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
              <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
              <span>Long-Term Engineering Partnership</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-[#CDCBCA]">
              Your Technology Partner for the Next Stage of Growth
            </h2>
            <p className="text-base leading-[1.7] text-[#969696]">
              Klyia Technology works alongside manufacturers, industrial suppliers, service providers, and growing commercial enterprises across Bhilai, Chhattisgarh, and India to build practical, scalable digital systems.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#303030] rounded-xl overflow-hidden bg-[#111111]">
            {TRUST_PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 bg-[#111111] border-r border-b border-[#303030] transition-colors duration-150 hover:bg-[#161616]"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[#D41514] tabular-nums">
                  0{index + 1}
                </span>
                <p className="mt-2 text-lg font-bold text-[#CDCBCA]">
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm leading-[1.65] text-[#969696]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
