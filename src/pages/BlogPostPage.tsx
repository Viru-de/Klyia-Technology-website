import React from 'react';
import {ArrowRight, Calendar, CheckCircle2, Clock, User} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {VisibleFaqBlock} from '../components/shared/VisibleFaqBlock.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  getBlogArticleBySlug,
  getIndustryBySlug,
  getServiceBySlug,
  type BlogArticleData,
} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface BlogPostPageProps {
  article: BlogArticleData;
  breadcrumbs: BreadcrumbEntry[];
}

export function BlogPostPage({article, breadcrumbs}: BlogPostPageProps) {
  const relatedServices = article.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug) ?? getIndustryBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedArticles = article.relatedArticleSlugs
    .map((slug) => getBlogArticleBySlug(slug))
    .filter((item): item is BlogArticleData => Boolean(item));

  return (
    <>
      <InnerPageBanner
        title={article.h1}
        subtitle={article.excerpt}
        breadcrumbs={breadcrumbs}
        backgroundImage={article.heroImage}
        backgroundAlt={article.heroImageAlt}
      />

      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-12">
          {/* Article Metadata Strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#303030] pb-5 text-xs sm:text-sm text-[#969696]">
            <span className="font-semibold text-[#D41514]">{article.category}</span>
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#CDCBCA]" aria-hidden="true" />
              <span>
                {article.authorName} ({article.authorRole})
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#CDCBCA]" aria-hidden="true" />
              <time dateTime={article.updatedAt}>Updated {article.updatedAt}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#CDCBCA]" aria-hidden="true" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <article className="lg:col-span-8 space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-[1.75] text-[#CDCBCA]">
                      {p}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="space-y-3 rounded-xl border border-[#303030] bg-[#111111] p-5 text-sm sm:text-base text-[#CDCBCA]">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-1" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.table ? (
                    <div className="overflow-x-auto rounded-xl border border-[#303030] bg-[#111111]">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-[#303030] bg-[#141414]">
                            {section.table.headers.map((header) => (
                              <th
                                key={header}
                                className="px-4 py-3 font-semibold text-white whitespace-nowrap"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join('|')} className="border-b border-[#303030] last:border-b-0">
                              {row.map((cell, idx) => (
                                <td
                                  key={`${idx}-${cell}`}
                                  className={`px-4 py-3 align-top leading-relaxed ${
                                    idx === 0 ? 'font-semibold text-white' : 'text-[#CDCBCA]'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}

              {article.practicalChecklist && article.practicalChecklist.length > 0 ? (
                <div className="rounded-xl border border-[#D41514]/45 bg-[#141414] p-6 space-y-3">
                  <h2 className="text-lg font-bold text-white">Actionable Checklist</h2>
                  <ul className="space-y-2.5 text-sm text-[#CDCBCA]">
                    {article.practicalChecklist.map((step) => (
                      <li key={step} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
                <h2 className="text-lg font-bold text-white">Need Practical Implementation?</h2>
                <p className="text-sm leading-relaxed text-[#969696]">
                  Speak directly with Klyia Technology in Risali, Bhilai (+91 8296887643) to plan custom software, ERP, website architecture, or SEO/GEO/AEO execution.
                </p>
                <Button href={ROUTES.GET_A_QUOTE} variant="primary" size="md" className="w-full">
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>

              {relatedServices.length > 0 ? (
                <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-3">
                  <h2 className="text-base font-bold text-white">Related Services</h2>
                  <ul className="space-y-2">
                    {relatedServices.map((srv) => (
                      <li key={srv.slug}>
                        <Link
                          href={srv.canonicalPath}
                          className="flex items-center justify-between text-sm text-[#CDCBCA] hover:text-[#D41514] transition-colors py-1"
                        >
                          <span>{srv.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {relatedArticles.length > 0 ? (
                <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-3">
                  <h2 className="text-base font-bold text-white">Keep Reading</h2>
                  <ul className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={rel.canonicalPath}
                          className="block space-y-1 group"
                        >
                          <span className="text-[11px] font-semibold text-[#D41514]">{rel.category}</span>
                          <p className="text-sm font-semibold text-[#CDCBCA] group-hover:text-white transition-colors">
                            {rel.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>

          <VisibleFaqBlock
            heading="Key Questions About This Topic"
            faqs={article.faqs}
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
