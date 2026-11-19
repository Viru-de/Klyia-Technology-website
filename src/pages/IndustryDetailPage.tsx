import React from 'react';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Factory,
  Globe,
  Phone,
  Search,
  Server,
} from 'lucide-react';
import {CTASection} from '../components/home/CTASection.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {ServiceEnquiryForm} from '../components/shared/ServiceEnquiryForm.tsx';
import {VisibleFaqBlock} from '../components/shared/VisibleFaqBlock.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {MediaFrame} from '../components/ui/MediaFrame.tsx';
import {WhatsAppIcon} from '../components/ui/WhatsAppIcon.tsx';
import {toWebpAssetPath} from '../config/banners.ts';
import {BRAND, buildWhatsAppHref} from '../config/brand.ts';
import {SOLAR_CORE_VISUAL_SERVICES} from '../config/homeData.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {
  getBlogArticleBySlug,
  getServiceBySlug,
  type IndustryPageData,
} from '../data/index.ts';
import {saveQuotePrefill} from '../lib/quotePrefill.ts';
import {Link} from '../lib/router.tsx';

interface IndustryDetailPageProps {
  industry: IndustryPageData;
  breadcrumbs: BreadcrumbEntry[];
}

const SOLAR_ENQUIRY_OPTIONS = [
  'Solar EPC Website & Local SEO',
  'Solar ERP Software & Project Dashboards',
  'Solar CRM & Site Survey Pipeline',
  'Rooftop Solar & Subsidy Tracking System',
  'Commercial & Industrial (C&I) Solar Management',
  'Solar AMC, Monitoring & WhatsApp Alerts',
];

export function IndustryDetailPage({industry, breadcrumbs}: IndustryDetailPageProps) {
  const isSolar = industry.slug === 'solar-renewable-energy';

  const relatedServices = industry.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedBlogs = (industry.relatedBlogSlugs ?? [])
    .map((slug) => getBlogArticleBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const whatsappUrl = buildWhatsAppHref(
    `Hello Klyia Technology, we want to discuss software, website, or ERP solutions for the ${industry.name} sector.`,
  );

  const prefillQuote = () =>
    saveQuotePrefill({
      industry: industry.name,
      service: isSolar ? 'Solar ERP' : 'Industry-Specific ERP / Software',
    });

  const serviceOptions = isSolar
    ? SOLAR_ENQUIRY_OPTIONS
    : [
        `${industry.name} Website & SEO`,
        `${industry.name} Custom ERP Software`,
        `${industry.name} CRM & Billing Automation`,
        'WhatsApp Business Automation',
        'Custom Software Consultation',
      ];

  return (
    <>
      <InnerPageBanner
        title={industry.h1}
        subtitle={industry.heroSubtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={industry.heroImage}
        backgroundAlt={industry.heroImageAlt}
        ctaLabel={`Discuss ${industry.name} Scope`}
        ctaHref={ROUTES.GET_A_QUOTE}
        onCtaNavigate={prefillQuote}
      />

      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-14">
          {/* Overview + Action Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              {industry.priorityBadge ? (
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                  <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                  <span>{industry.priorityBadge}</span>
                </p>
              ) : null}
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                How Klyia Technology Supports {industry.name}
              </h2>
              <div className="space-y-3 text-base leading-[1.7] text-[#CDCBCA]">
                {industry.introduction.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[#D41514]/40 bg-[#141414] p-4 text-sm text-[#CDCBCA]">
                <strong className="text-white">Custom Development &amp; Hardware Note: </strong>
                {industry.customDevelopmentNote}
              </div>
            </div>

            <aside className="lg:col-span-4 rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Factory className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <span>Sector Consultation</span>
              </div>
              <p className="text-sm leading-relaxed text-[#969696]">
                Speak with our Bhilai engineering team about custom websites, ERP workflows, dealer portals, or search growth tailored to {industry.name}.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  href={ROUTES.GET_A_QUOTE}
                  onNavigate={prefillQuote}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  <span>Request {industry.name} Proposal</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-4 py-3 text-sm font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Our Team</span>
                </a>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-4 py-3 text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                  <span>Call Now ({BRAND.phoneDisplay})</span>
                </a>
              </div>
            </aside>
          </div>

          {/* Dedicated Visual Showcase for Solar & Renewable Energy */}
          {isSolar ? (
            <div className="space-y-6 rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8">
              <div className="max-w-3xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                  Solar EPC Digital &amp; Software Architecture
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                  Visual Guide: Solar Panel Installation, EPC Execution &amp; Solar ERP Systems
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                  From rooftop solar systems and commercial &amp; industrial (C&amp;I) solar installations to Solar ERP dashboards and scheduled solar monitoring and maintenance, every workflow is supported by purpose-built digital infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SOLAR_CORE_VISUAL_SERVICES.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-xl border border-[#303030] bg-[#080808]"
                  >
                    <div className="aspect-[16/9] w-full bg-[#141414]">
                      <MediaFrame
                        src={item.image}
                        webpSrc={item.webpImage}
                        alt={item.alt}
                        width={800}
                        height={450}
                        fallbackLabel={item.title}
                        imgClassName="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
                      <div className="space-y-2">
                        <p className="text-lg font-bold text-white">{item.title}</p>
                        <p className="text-sm leading-relaxed text-[#969696]">{item.summary}</p>
                        <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-[#CDCBCA]">
                          {item.highlights.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {item.href !== industry.canonicalPath ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA] hover:text-[#D41514] transition-colors pt-2 border-t border-[#303030]"
                        >
                          <span>{item.ctaLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : industry.heroImage ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch rounded-2xl border border-[#303030] bg-[#111111] overflow-hidden">
              <div className="lg:col-span-6 aspect-[16/10] w-full bg-[#080808]">
                <MediaFrame
                  src={industry.heroImage}
                  webpSrc={toWebpAssetPath(industry.heroImage)}
                  alt={industry.heroImageAlt}
                  width={800}
                  height={500}
                  fallbackLabel={industry.name}
                  imgClassName="h-full w-full object-cover"
                />
              </div>
              <div className="lg:col-span-6 flex flex-col justify-center p-6 sm:p-8 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                  Industry Digital Blueprint
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Built Around Real {industry.name} Workflows
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                  {industry.heroSubtitle}
                </p>
              </div>
            </div>
          ) : null}

          {/* Sector Operational Challenges */}
          <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-4">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Operational &amp; Digital Challenges in {industry.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.challenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#CDCBCA]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D41514] shrink-0" aria-hidden="true" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Product Categories / Core Module Matrix */}
          {industry.modulesOrCatalogueHighlight && industry.modulesOrCatalogueHighlight.length > 0 ? (
            <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 sm:p-8 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Supported Product Categories &amp; Workflow Coverage
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {industry.modulesOrCatalogueHighlight.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-lg border border-[#303030] bg-[#080808] p-3.5 text-sm text-[#CDCBCA]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* Website Solutions vs Custom Software & ERP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-5">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <Globe className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                <h2>Website &amp; Portal Solutions</h2>
              </div>
              <div className="space-y-4">
                {industry.websiteSolutions.map((item) => (
                  <div key={item.title} className="border-t border-[#303030] pt-4 first:border-t-0 first:pt-0 space-y-1">
                    <p className="text-base font-bold text-white">{item.title}</p>
                    <p className="text-sm leading-relaxed text-[#969696]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-5">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <Server className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                <h2>Custom Software &amp; ERP Modules</h2>
              </div>
              <div className="space-y-4">
                {industry.softwareAndErpSolutions.map((item) => (
                  <div key={item.title} className="border-t border-[#303030] pt-4 first:border-t-0 first:pt-0 space-y-1">
                    <p className="text-base font-bold text-white">{item.title}</p>
                    <p className="text-sm leading-relaxed text-[#969696]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search (SEO/GEO/AEO) + WhatsApp Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <Search className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                <h2>SEO, Local SEO, GEO &amp; AEO Visibility</h2>
              </div>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[#CDCBCA]">
                {industry.seoGeoAeoAndMarketing.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <Bot className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                <h2>WhatsApp &amp; Workflow Automation</h2>
              </div>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[#CDCBCA]">
                {industry.whatsappAndAutomation.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deep Priority Extended Sections (e.g., Steel 15-section depth) */}
          {industry.extendedSections && industry.extendedSections.length > 0 ? (
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Detailed Engineering &amp; Industry Playbook
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {industry.extendedSections.map((sec) => (
                  <article
                    key={sec.heading}
                    className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-3"
                  >
                    <h3 className="text-lg font-bold text-white">{sec.heading}</h3>
                    {sec.paragraphs.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-[#969696]">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && sec.bullets.length > 0 ? (
                      <ul className="space-y-2 pt-1 text-sm text-[#CDCBCA]">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {/* Core Services for {industry.name} */}
          {relatedServices.length > 0 ? (
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Core Services for {industry.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServices.map((srv) => (
                  <article
                    key={srv.slug}
                    className="relative group rounded-xl border border-[#303030] bg-[#111111] p-5 hover:border-[#D41514] transition-colors flex flex-col justify-between gap-2"
                  >
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D41514]">
                        {srv.categoryLabel}
                      </span>
                      <p className="mt-1 text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                        <Link href={srv.canonicalPath} className="after:absolute after:inset-0">
                          {srv.name}
                        </Link>
                      </p>
                      <p className="mt-1 text-xs text-[#969696] line-clamp-2">{srv.heroSubtitle}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA] pt-2"
                    >
                      <span>Explore {srv.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {relatedBlogs.length > 0 ? (
            <div className="space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Related Industry Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedBlogs.map((post) => (
                  <article
                    key={post.slug}
                    className="relative group rounded-xl border border-[#303030] bg-[#141414] p-5 hover:border-[#D41514] transition-colors space-y-2"
                  >
                    <span className="text-xs font-semibold text-[#D41514]">{post.category}</span>
                    <p className="text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                      <Link href={post.canonicalPath} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </p>
                    <p className="text-sm text-[#969696]">{post.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {/* Embedded Solar / Industry Enquiry Form -> Emails klyiatechnology@gmail.com */}
          <ServiceEnquiryForm
            type={isSolar ? 'solar' : 'service'}
            heading={
              isSolar
                ? 'Solar & Renewable Energy Enquiry Form'
                : `${industry.name} Project Enquiry`
            }
            subtitle={
              isSolar
                ? 'Submit your rooftop solar EPC, C&I project management, Solar ERP, or local SEO requirements. Enquiries are emailed directly to klyiatechnology@gmail.com.'
                : `Share your operational software, website, or automation goals for ${industry.name}. Your enquiry goes straight to our Bhilai engineering team.`
            }
            defaultService={serviceOptions[0]}
            serviceOptions={serviceOptions}
            industry={industry.name}
            sourceSection={isSolar ? 'Solar & Renewable Energy Page Form' : `${industry.name} Page Form`}
            submitLabel={isSolar ? 'Send Solar Enquiry' : `Send ${industry.name} Enquiry`}
            whatsappContextMessage={`Hello Klyia Technology, we are interested in ${serviceOptions[0]} for the ${industry.name} sector.`}
          />

          <VisibleFaqBlock
            heading={`${industry.name} — Frequently Asked Questions`}
            faqs={industry.faqs}
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}

