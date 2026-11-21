import React from 'react';
import {HelpCircle} from 'lucide-react';
import type {FaqEntry} from '../../data/types.ts';

interface VisibleFaqBlockProps {
  heading?: string;
  subtitle?: string;
  faqs: FaqEntry[];
  variant?: 'dark' | 'light';
  headingClassName?: string;
}

export function VisibleFaqBlock({
  heading = 'Frequently Asked Questions',
  subtitle = 'Clear, straightforward answers covering scope, engineering workflow, and business suitability.',
  faqs,
  variant = 'dark',
  headingClassName,
}: VisibleFaqBlockProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const isLight = variant === 'light';

  return (
    <section aria-labelledby="faq-section-heading" className="space-y-6">
      <div className="max-w-3xl space-y-2">
        <p
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase ${
            isLight ? 'text-blue-700' : 'text-[#D41514]'
          }`}
        >
          <span
            className={`h-px w-5 ${isLight ? 'bg-blue-700' : 'bg-[#D41514]'}`}
            aria-hidden="true"
          />
          <span>Questions &amp; Clarity</span>
        </p>
        <h2
          id="faq-section-heading"
          className={`font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold ${
            headingClassName ?? (isLight ? 'text-slate-900' : 'text-white')
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-[#969696]'
          }`}
        >
          {subtitle}
        </p>
      </div>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((item) => (
          <div
            key={item.question}
            className={
              isLight
                ? 'rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-2.5'
                : 'rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2.5'
            }
          >
            <dt
              className={`flex items-start gap-2.5 text-base font-semibold leading-snug ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              <HelpCircle
                className={`w-4 h-4 shrink-0 mt-1 ${
                  isLight ? 'text-blue-700' : 'text-[#D41514]'
                }`}
                aria-hidden="true"
              />
              <span>{item.question}</span>
            </dt>
            <dd
              className={`pl-6 text-sm leading-[1.65] ${
                isLight ? 'text-slate-600' : 'text-[#969696]'
              }`}
            >
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
