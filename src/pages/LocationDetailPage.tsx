import React from 'react';
import {ArrowRight, CheckCircle2, MapPin, MessageCircle} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {VisibleFaqBlock} from '../components/shared/VisibleFaqBlock.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {BRAND} from '../config/brand.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  getIndustryBySlug,
  getLocationBySlug,
  getServiceBySlug,
  type LocationPageData,
} from '../data/index.ts';
import {Link} from '../lib/router.tsx';

interface LocationDetailPageProps {
  location: LocationPageData;
  breadcrumbs: BreadcrumbEntry[];
}

export function LocationDetailPage({location, breadcrumbs}: LocationDetailPageProps) {
  const relatedServices = location.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug) ?? getIndustryBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedLocations = location.relatedLocationSlugs
    .map((slug) => getLocationBySlug(slug))
    .filter((item): item is LocationPageData => Boolean(item));

  const whatsappUrl = `${BRAND.whatsappHref}?text=${encodeURIComponent(
    `Hello Klyia Technology, we are looking for ${location.serviceFocus} in ${location.city}.`,
  )}`;

  return (
    <>
      <InnerPageBanner
        title={location.h1}
        subtitle={location.heroSubtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={location.heroImage}
        backgroundAlt={location.heroImageAlt}
        ctaLabel={`Consult for ${location.city}`}
        ctaHref={`${ROUTES.GET_A_QUOTE}?city=${encodeURIComponent(location.city)}&service=${encodeURIComponent(location.serviceFocus)}`}
      />

      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>{location.regionLabel}</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Serving {location.city} With Engineering Reliability
              </h2>
              <div className="space-y-3 text-base leading-[1.7] text-[#CDCBCA]">
                {location.localContext.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#303030] bg-[#141414] p-4 text-sm text-[#CDCBCA] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{location.officeTransparencyNote}</span>
              </div>
            </div>

            <aside className="lg:col-span-4 rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Consult Our Team for {location.city}
              </h3>
              <p className="text-sm leading-relaxed text-[#969696]">
                Call or WhatsApp {BRAND.phoneDisplay} or submit your project brief to arrange an on-site (Bhilai/Durg/Raipur) or online consultation.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  href={`${ROUTES.GET_A_QUOTE}?city=${encodeURIComponent(location.city)}&service=${encodeURIComponent(location.serviceFocus)}`}
                  variant="primary"
                  size="md"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-4 py-3 text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </aside>
          </div>

          <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              What Businesses in {location.city} Typically Require
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#CDCBCA]">
              {location.businessRequirements.map((reqItem) => (
                <li
                  key={reqItem}
                  className="rounded-lg border border-[#303030] bg-[#080808] p-4 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{reqItem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Core Solutions Delivered for {location.city} Organizations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {location.deliveredServices.map((item) => (
                <article
                  key={item.title}
                  className="relative group rounded-xl border border-[#303030] bg-[#111111] p-5 hover:border-[#D41514] transition-colors flex flex-col justify-between gap-3"
                >
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                      <Link href={`/services/${item.serviceSlug}/`} className="after:absolute after:inset-0">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-[#969696]">{item.detail}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA]"
                  >
                    <span>View {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
                  </span>
                </article>
              ))}
            </div>
          </div>

          {relatedServices.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={srv.canonicalPath}
                    className="rounded-lg border border-[#303030] bg-[#141414] px-4 py-2 text-sm font-medium text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                  >
                    {srv.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {relatedLocations.length > 0 ? (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Nearby &amp; Regional Service Pages</h2>
              <div className="flex flex-wrap gap-3">
                {relatedLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={loc.canonicalPath}
                    className="rounded-lg border border-[#303030] bg-[#111111] px-4 py-2 text-sm font-medium text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                  >
                    {loc.serviceFocus} in {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <VisibleFaqBlock
            heading={`${location.serviceFocus} in ${location.city} — FAQs`}
            faqs={location.faqs}
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
