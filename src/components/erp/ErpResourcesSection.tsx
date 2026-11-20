import React, {useState} from 'react';
import {ArrowRight, BookOpen, CheckCircle2} from 'lucide-react';
import {ERP_RESOURCE_GUIDES} from '../../data/index.ts';
import {Link} from '../../lib/router.tsx';

export function ErpResourcesSection() {
  const [selectedSlug, setSelectedSlug] = useState(ERP_RESOURCE_GUIDES[0].slug);
  const activeGuide =
    ERP_RESOURCE_GUIDES.find((g) => g.slug === selectedSlug) ?? ERP_RESOURCE_GUIDES[0];

  return (
    <section
      id="erp-learning-resources"
      aria-labelledby="erp-resources-heading"
      className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <span className="h-px w-5 bg-blue-700" aria-hidden="true" />
            <span>ERP Learning &amp; Decision Guides</span>
          </p>
          <h2
            id="erp-resources-heading"
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-slate-900"
          >
            ERP Learning &amp; Business Automation Resources
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Practical, vendor-neutral engineering guides explaining custom ERP concepts, deployment choices, implementation stages, and sector workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Guide Topics Selector */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {ERP_RESOURCE_GUIDES.map((guide, index) => {
              const isSelected = guide.slug === activeGuide.slug;
              return (
                <button
                  key={guide.slug}
                  type="button"
                  onClick={() => setSelectedSlug(guide.slug)}
                  className={`flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-blue-700 bg-blue-700 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50/40'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        isSelected ? 'text-blue-100' : 'text-blue-700'
                      }`}
                    >
                      0{index + 1} · {guide.category}
                    </span>
                    <p className="text-sm font-bold leading-snug">{guide.title}</p>
                  </div>
                  <BookOpen
                    className={`w-4 h-4 shrink-0 mt-1 ${
                      isSelected ? 'text-white' : 'text-slate-400'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Active Guide Reader Panel */}
          <article className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                {activeGuide.category}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-slate-900">
                {activeGuide.title}
              </h3>
              <p className="text-sm font-medium text-slate-600">{activeGuide.summary}</p>
            </div>

            <div className="space-y-4">
              {activeGuide.fullContent.map((para) => (
                <p key={para} className="text-sm sm:text-base leading-relaxed text-slate-700">
                  {para}
                </p>
              ))}
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Key Engineering Takeaways
              </p>
              <ul className="space-y-2">
                {activeGuide.keyTakeaways.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <CheckCircle2
                      className="w-4 h-4 text-blue-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-200">
              <Link
                href={`/erp/${activeGuide.relatedErpSlug}/`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
              >
                <span>Explore Matching ERP Solution</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              {activeGuide.relatedBlogSlug && (
                <Link
                  href={`/blog/${activeGuide.relatedBlogSlug}/`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  <span>Read In-Depth Article in Knowledge Centre</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
