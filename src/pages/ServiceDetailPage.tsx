import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
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
  STANDARD_WORK_PROCESS,
  getBlogArticleBySlug,
  getServiceBySlug,
  type ServicePageData,
} from '../data/index.ts';
import {saveQuotePrefill} from '../lib/quotePrefill.ts';
import {Link} from '../lib/router.tsx';

interface ServiceDetailPageProps {
  service: ServicePageData;
  breadcrumbs: BreadcrumbEntry[];
}

export function ServiceDetailPage({service, breadcrumbs}: ServiceDetailPageProps) {
  const isSolarService = service.slug === 'solar-erp-software';

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is ServicePageData => Boolean(item));

  const relatedBlogs = (service.relatedBlogSlugs ?? [])
    .map((slug) => getBlogArticleBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const whatsappUrl = buildWhatsAppHref(
    `Hello Klyia Technology, I would like a consultation regarding ${service.name}.`,
  );

  const prefillQuote = () =>
    saveQuotePrefill({
      service: service.name,
      industry: isSolarService ? 'Solar & Renewable Energy' : undefined,
    });

  const serviceOptions = Array.from(
    new Set([
      service.name,
      ...relatedServices.map((rel) => rel.name),
      'Custom Software Development',
      'ERP Software',
      'Solar ERP Software',
      'Website Development Services',
    ]),
  );

  return (
    <>
      <InnerPageBanner
        title={service.h1}
        subtitle={service.heroSubtitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={service.heroImage}
        backgroundAlt={service.heroImageAlt}
        ctaLabel={`Scope ${service.name}`}
        ctaHref={ROUTES.GET_A_QUOTE}
        onCtaNavigate={prefillQuote}
      />

      {/* Section 1 & 2: Service Introduction & Immediate Consultation Strip */}
      <section className="bg-[#080808] py-14 sm:py-16 border-b border-[#303030]">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                <span>{service.categoryLabel}</span>
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                Why Modern Businesses Invest in {service.name}
              </h2>
              <div className="space-y-3 text-base leading-[1.7] text-[#CDCBCA]">
                {service.introduction.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              {service.complianceNote ? (
                <div className="mt-4 rounded-xl border border-[#D41514]/40 bg-[#141414] p-4 text-sm text-[#CDCBCA]">
                  <strong className="text-white">Integrity &amp; Scope Note: </strong>
                  {service.complianceNote}
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-4 rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <p className="text-lg font-bold text-white">Request a Project Consultation</p>
              <p className="text-sm leading-relaxed text-[#969696]">
                Speak with our engineering team in Risali, Bhilai ({BRAND.phoneDisplay}) for honest requirement scoping—serving Bhilai, Durg, Raipur, Chhattisgarh, and all of India.
              </p>
              <div className="flex flex-col gap-3">
                <Button href={ROUTES.GET_A_QUOTE} onNavigate={prefillQuote} variant="primary" size="md" className="w-full">
                  <span>Request Quote for {service.name}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-4 py-3 text-sm font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss on WhatsApp</span>
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

          {/* Dedicated Visual Workflows for Solar ERP */}
          {isSolarService ? (
            <div className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-6">
              <div className="max-w-3xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                  Solar EPC Software Architecture
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Solar ERP Dashboards &amp; Core Services for Solar &amp; Renewable Energy
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#969696]">
                  Built to coordinate solar panel installation, rooftop solar systems, commercial &amp; industrial solar installations, BOM stock, and AMC solar monitoring and maintenance.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {SOLAR_CORE_VISUAL_SERVICES.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-xl border border-[#303030] bg-[#080808]"
                  >
                    <div className="aspect-[16/10] w-full bg-[#141414]">
                      <MediaFrame
                        src={item.image}
                        webpSrc={item.webpImage}
                        alt={item.alt}
                        width={640}
                        height={400}
                        fallbackLabel={item.title}
                        imgClassName="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-xs leading-relaxed text-[#969696]">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}

          {/* Section 3 & 4: Why Needed, Business Challenges & Klyia Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Sparkles className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <p>Why Businesses Need It</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-[#969696]">
                {service.whyNeeded.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D41514] shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <p>Common Operational Challenges</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-[#969696]">
                {service.challenges.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#CDCBCA] shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Wrench className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <p>Our Engineering Solution</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-[#CDCBCA]">
                {service.solutions.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5 & 6: Features, Capabilities, Benefits & Technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                Key Features &amp; Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="rounded-xl border border-[#303030] bg-[#111111] p-5 space-y-2"
                  >
                    <p className="text-base font-bold text-white">{feat.title}</p>
                    <p className="text-sm leading-relaxed text-[#969696]">{feat.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {!isSolarService && service.heroImage ? (
                <figure className="overflow-hidden rounded-xl border border-[#303030] bg-[#111111]">
                  <div className="aspect-[16/9] w-full bg-[#080808]">
                    <MediaFrame
                      src={service.heroImage}
                      webpSrc={toWebpAssetPath(service.heroImage)}
                      alt={service.heroImageAlt}
                      width={800}
                      height={450}
                      fallbackLabel={service.name}
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#969696] border-t border-[#303030]">
                    {service.heroImageAlt}
                  </figcaption>
                </figure>
              ) : null}

              <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  Practical Business Benefits
                </h2>
                <ul className="space-y-2.5 text-sm leading-relaxed text-[#CDCBCA]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#303030] bg-[#141414] p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Cpu className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                  <p>Technologies &amp; Standards Used</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#303030] bg-[#080808] px-3 py-1.5 text-xs font-medium text-[#CDCBCA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: 6-Step Working Process */}
          <div className="rounded-2xl border border-[#303030] bg-[#141414] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D41514]">
                Delivery Methodology
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                How We Deliver {service.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STANDARD_WORK_PROCESS.map((stage) => (
                <div
                  key={stage.step}
                  className="rounded-xl border border-[#303030] bg-[#080808] p-5 space-y-2"
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[#D41514]">
                    {stage.step}
                  </span>
                  <p className="text-base font-bold text-white">{stage.title}</p>
                  <p className="text-sm leading-relaxed text-[#969696]">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8 & 9: Industries Benefiting & Why Choose Klyia */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Industries That Benefit Most
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.industriesBenefiting.map((ind) => (
                  <article
                    key={ind.slug}
                    className="relative group rounded-xl border border-[#303030] bg-[#111111] p-5 hover:border-[#D41514] transition-colors space-y-2"
                  >
                    <p className="text-sm font-bold text-white group-hover:text-[#D41514] transition-colors">
                      <Link href={`/industries/${ind.slug}/`} className="after:absolute after:inset-0">
                        {ind.label}
                      </Link>
                    </p>
                    <p className="text-xs leading-relaxed text-[#969696]">{ind.note}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-4">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                Why Choose Klyia Technology
              </h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-[#CDCBCA]">
                {service.whyChooseKlyia.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 10: Related Services & Helpful Guides */}
          {(relatedServices.length > 0 || relatedBlogs.length > 0) ? (
            <div className="space-y-6">
              {relatedServices.length > 0 ? (
                <div className="space-y-4">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    Related Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {relatedServices.map((rel) => (
                      <article
                        key={rel.slug}
                        className="relative group rounded-xl border border-[#303030] bg-[#111111] p-5 hover:border-[#D41514] transition-colors flex flex-col justify-between gap-3"
                      >
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D41514]">
                            {rel.categoryLabel}
                          </span>
                          <p className="mt-1 text-base font-bold text-white group-hover:text-[#D41514] transition-colors">
                            <Link href={rel.canonicalPath} className="after:absolute after:inset-0">
                              {rel.name}
                            </Link>
                          </p>
                        </div>
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CDCBCA]"
                        >
                          <span>Explore {rel.name}</span>
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
                    Recommended Reading
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
            </div>
          ) : null}

          {/* Embedded Service Enquiry Form -> Emails klyiatechnology@gmail.com */}
          <ServiceEnquiryForm
            type={isSolarService ? 'solar' : 'service'}
            heading={`Enquire About ${service.name}`}
            subtitle={`Share your project goals for ${service.name}. All enquiries are delivered directly to klyiatechnology@gmail.com.`}
            defaultService={service.name}
            serviceOptions={serviceOptions}
            industry={isSolarService ? 'Solar & Renewable Energy' : undefined}
            sourceSection={`${service.name} Service Page Form`}
            submitLabel={`Request ${service.name} Consultation`}
            whatsappContextMessage={`Hello Klyia Technology, I would like to discuss ${service.name}.`}
          />

          {/* Section 11: Visible Crawlable FAQs */}
          <VisibleFaqBlock
            heading={`${service.name} — Frequently Asked Questions`}
            faqs={service.faqs}
          />
        </Container>
      </section>

      {/* Section 12: Bottom Conversion CTA */}
      <CTASection />
    </>
  );
}

