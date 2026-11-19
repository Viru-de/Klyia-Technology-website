import React from 'react';
import {ArrowRight, BookOpen} from 'lucide-react';
import {ROUTES} from '../../config/routes.ts';
import {ALL_BLOG_ARTICLES} from '../../data/index.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

const FEATURED_SLUGS = [
  'website-development-cost-in-india-what-affects-pricing',
  'erp-software-for-steel-trading-and-manufacturing',
  'seo-vs-geo-vs-aeo-difference-explained',
  'solar-epc-erp-and-crm-software-guide',
  'custom-software-vs-ready-made-software',
  'how-whatsapp-business-automation-helps-increase-lead-response',
];

export function HomeBlogPreviewSection() {
  const featured = FEATURED_SLUGS.map((slug) =>
    ALL_BLOG_ARTICLES.find((item) => item.slug === slug),
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="bg-[#141414] py-16 sm:py-20 border-b border-[#303030]">
      <Container className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
              <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
              <span>Knowledge Centre</span>
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white leading-[1.18]">
              Practical Technology &amp; Growth Guides for Indian Businesses
            </h2>
            <p className="text-base leading-relaxed text-[#969696]">
              Transparent articles helping founders, plant directors, and marketing leads compare software costs, Steel &amp; Solar ERPs, and SEO vs GEO vs AEO.
            </p>
          </div>
          <Link
            href={ROUTES.INSIGHTS}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D41514] transition-colors shrink-0"
          >
            <span>Browse All {ALL_BLOG_ARTICLES.length} Articles</span>
            <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((article) => (
            <article
              key={article.slug}
              className="relative group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 hover:border-[#D41514] transition-colors"
            >
              <div className="space-y-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D41514]">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{article.category}</span>
                </span>
                <h3 className="text-lg font-bold leading-snug text-white group-hover:text-[#D41514] transition-colors">
                  <Link href={article.canonicalPath} className="after:absolute after:inset-0">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed text-[#969696]">{article.excerpt}</p>
              </div>
              <span
                aria-hidden="true"
                className="mt-5 pt-3 border-t border-[#303030] inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA]"
              >
                <span>Read Guide ({article.readTime})</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
