import React from 'react';
import {ArrowRight, MapPin} from 'lucide-react';
import {ABOUT_PREVIEW_POINTS} from '../../config/homeData.ts';
import {ROUTES} from '../../config/routes.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';

export function AboutPreview() {
  return (
    <section className="bg-[#080808] py-16 sm:py-20 lg:py-24 border-b border-[#303030]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editorial Intro Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
              <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
              <span>About Klyia Technology</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#CDCBCA]">
              Technology Built Around <span className="text-white">Your Business.</span>
            </h2>
            <p className="text-base leading-[1.7] text-[#CDCBCA]">
              Every growing organization reaches a point where disconnected spreadsheets, generic websites, and manual coordination hold back daily execution.
            </p>
            <p className="text-[15px] leading-[1.7] text-[#969696]">
              We combine software engineering, operational ERP architecture, and modern search visibility into one cohesive technology practice—helping businesses run cleanly today and scale confidently tomorrow.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button href={ROUTES.ABOUT} variant="primary" size="md">
                <span>Discover Klyia Technology</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="pt-4 border-t border-[#303030] flex items-start gap-2.5 text-xs text-[#969696]">
              <MapPin className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Based in Risali, Bhilai, Chhattisgarh — serving enterprises regionally and across India.
              </span>
            </div>
          </div>

          {/* 5 Structured Focus Points */}
          <div className="lg:col-span-7 bg-[#111111] rounded-2xl border border-[#303030] divide-y divide-[#303030]">
            {ABOUT_PREVIEW_POINTS.map((point, index) => (
              <div key={point.title} className="p-6 sm:p-7 flex items-start gap-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1B1B1B] border border-[#303030] font-[family-name:var(--font-mono)] text-xs font-semibold text-[#D41514] tabular-nums">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-base sm:text-lg font-bold text-[#CDCBCA]">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-[1.65] text-[#969696]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
