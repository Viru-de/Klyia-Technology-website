import React from 'react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  ALL_BLOG_ARTICLES,
  ALL_INDUSTRIES,
  ALL_LOCATIONS,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface HtmlSitemapPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

const CORE_LINKS = [
  {label: 'Home', href: ROUTES.HOME},
  {label: 'About Us', href: ROUTES.ABOUT},
  {label: 'Services Hub', href: ROUTES.SERVICES},
  {label: 'Industries Hub', href: ROUTES.INDUSTRIES},
  {label: 'Locations Hub', href: ROUTES.LOCATIONS},
  {label: 'Our Work & Architecture', href: ROUTES.OUR_WORK},
  {label: 'Blog & Knowledge Centre', href: ROUTES.INSIGHTS},
  {label: 'Contact Us', href: ROUTES.CONTACT},
  {label: 'Get a Quote', href: ROUTES.GET_A_QUOTE},
  {label: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY},
  {label: 'Terms & Conditions', href: ROUTES.TERMS},
];

export function HtmlSitemapPage({breadcrumbs}: HtmlSitemapPageProps) {
  return (
    <>
      <InnerPageBanner
        title="Website Sitemap & Directory"
        subtitle="Complete human-friendly navigation across all services, industry pages, location guides, and Knowledge Centre articles."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.sitemap.image}
        backgroundAlt={STATIC_PAGE_BANNERS.sitemap.alt}
      />

      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-12">
          {/* Core Pages */}
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Core Company Pages
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              {CORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg border border-[#303030] bg-[#111111] px-4 py-3 text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All 6 Service Categories */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Specialized Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_CATEGORIES.map((category) => {
                const items = getServicesByCategory(category.id);
                return (
                  <div
                    key={category.id}
                    className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-3"
                  >
                    <h3 className="text-base font-bold text-[#D41514]">{category.title}</h3>
                    <ul className="space-y-1.5 text-sm">
                      {items.map((srv) => (
                        <li key={srv.slug}>
                          <Link
                            href={srv.canonicalPath}
                            className="text-[#CDCBCA] hover:text-white hover:underline underline-offset-4 transition-colors"
                          >
                            {srv.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Industries & Locations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Industries We Serve ({ALL_INDUSTRIES.length})
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                {ALL_INDUSTRIES.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={ind.canonicalPath}
                      className="text-[#CDCBCA] hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {ind.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Locations Served ({ALL_LOCATIONS.length})
              </h2>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {ALL_LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={loc.canonicalPath}
                      className="text-[#CDCBCA] hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {loc.serviceFocus} in {loc.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Articles */}
          <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
              Knowledge Centre &amp; Educational Guides ({ALL_BLOG_ARTICLES.length})
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {ALL_BLOG_ARTICLES.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={post.canonicalPath}
                    className="text-[#CDCBCA] hover:text-white hover:underline underline-offset-4 transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
