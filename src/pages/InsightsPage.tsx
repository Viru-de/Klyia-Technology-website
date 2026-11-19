import React, {useState} from 'react';
import {ArrowRight, BookOpen, Calendar, Clock} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {ALL_BLOG_ARTICLES} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface InsightsPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function InsightsPage({breadcrumbs}: InsightsPageProps) {
  const categories = ['All Topics', ...Array.from(new Set(ALL_BLOG_ARTICLES.map((post) => post.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All Topics');

  const visibleArticles =
    selectedCategory === 'All Topics'
      ? ALL_BLOG_ARTICLES
      : ALL_BLOG_ARTICLES.filter((post) => post.category === selectedCategory);

  return (
    <>
      <InnerPageBanner
        title="Blog & Engineering Knowledge Centre"
        subtitle="Practical, honest guides on website pricing factors, Steel & Solar ERP, SEO vs GEO vs AEO, Google Business Profile optimization, and automation."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.insights.image}
        backgroundAlt={STATIC_PAGE_BANNERS.insights.alt}
        ctaLabel={STATIC_PAGE_BANNERS.insights.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.insights.ctaHref}
      />

      <section className="bg-[#080808] py-14 sm:py-18 border-b border-[#303030]">
        <Container className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>{ALL_BLOG_ARTICLES.length} Comprehensive Guides</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Technology, ERP &amp; Digital Growth Resources
              </h2>
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'border-[#D41514] bg-[#D41514] text-white'
                        : 'border-[#303030] bg-[#141414] text-[#CDCBCA] hover:border-[#D41514]/60 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article) => (
              <article
                key={article.slug}
                className="relative group flex flex-col justify-between rounded-xl border border-[#303030] bg-[#111111] p-6 transition-all duration-200 hover:border-[#D41514] hover:shadow-[0_14px_34px_-16px_rgba(212,21,20,0.24)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#D41514]">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{article.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#969696]">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold leading-snug text-white group-hover:text-[#D41514] transition-colors">
                    <Link href={article.canonicalPath} className="after:absolute after:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.65] text-[#969696]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#303030] flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[#969696]">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <time dateTime={article.updatedAt}>{article.updatedAt}</time>
                  </span>
                  <span aria-hidden="true" className="inline-flex items-center gap-1 font-semibold text-white">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
