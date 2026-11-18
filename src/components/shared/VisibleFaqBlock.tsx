import React from 'react';
import {HelpCircle} from 'lucide-react';
import type {FaqEntry} from '../../data/types.ts';

interface VisibleFaqBlockProps {
  heading?: string;
  subtitle?: string;
  faqs: FaqEntry[];
}

export function VisibleFaqBlock({
  heading = 'Frequently Asked Questions',
  subtitle = 'Clear, straightforward answers covering scope, engineering workflow, and business suitability.',
  faqs,
}: VisibleFaqBlockProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="faq-section-heading" className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
          <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
          <span>Questions &amp; Clarity</span>
        </p>
        <h2
          id="faq-section-heading"
          className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white"
        >
          {heading}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#969696]">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2.5"
          >
            <h3 className="flex items-start gap-2.5 text-base font-semibold leading-snug text-white">
              <HelpCircle className="w-4 h-4 text-[#D41514] shrink-0 mt-1" aria-hidden="true" />
              <span>{item.question}</span>
            </h3>
            <p className="pl-6 text-sm leading-[1.65] text-[#969696]">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
