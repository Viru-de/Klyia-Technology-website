import React, {useEffect, useState} from 'react';
import {CheckCircle2, Phone} from 'lucide-react';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {WhatsAppIcon} from '../components/ui/WhatsAppIcon.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import {CORE_SERVICES} from '../config/homeData.ts';
import {INDUSTRIES_MEGA_MENU} from '../config/navigation.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {consumeQuotePrefill} from '../lib/quotePrefill.ts';
import {Link, useRouter} from '../lib/router.tsx';

interface GetAQuotePageProps {
  breadcrumbs: BreadcrumbEntry[];
}

const EXTRA_QUOTE_SERVICES = [
  'Industrial ERP',
  'Solar ERP Software',
  'Solar EPC Solutions',
  'Website Redesign & Performance Optimization',
  'Other',
];

export function GetAQuotePage({breadcrumbs}: GetAQuotePageProps) {
  const {pathname} = useRouter();
  const serviceOptions = [...CORE_SERVICES.map((s) => s.title), ...EXTRA_QUOTE_SERVICES];

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<string>(CORE_SERVICES[0].title);
  const [industry, setIndustry] = useState<string>(INDUSTRIES_MEGA_MENU[0].title);
  const [location, setLocation] = useState('Bhilai / Durg / Raipur');
  const [details, setDetails] = useState('');
  const [consent, setConsent] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    emailDelivered: boolean;
    statusMessage: string;
  } | null>(null);

  useEffect(() => {
    const prefill = consumeQuotePrefill();
    if (!prefill) {
      return;
    }
    if (prefill.service) {
      const matched = serviceOptions.find(
        (opt) => opt.toLowerCase() === prefill.service?.toLowerCase(),
      );
      if (matched) {
        setService(matched);
      } else {
        setService(prefill.service);
      }
    }
    if (prefill.industry) {
      setIndustry(prefill.industry);
    }
    if (prefill.city) {
      setLocation(prefill.city);
    }
  }, []);

  const allSelectableServices = serviceOptions.includes(service)
    ? serviceOptions
    : [service, ...serviceOptions];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) {
      return;
    }
    setErrorMsg(null);

    const trimmedPhone = phone.trim();
    const digits = trimmedPhone.replace(/\D/g, '');

    if (name.trim().length < 2) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (company.trim().length < 2) {
      setErrorMsg('Please enter your company or organization name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (
      digits.length < 10 ||
      digits.length > 15 ||
      (digits.length === 10 && !/^[6-9]\d{9}$/.test(digits))
    ) {
      setErrorMsg('Please enter a valid 10-digit contact number.');
      return;
    }
    if (details.trim().length < 12) {
      setErrorMsg('Please summarize your project requirements (at least 12 characters).');
      return;
    }
    if (!consent) {
      setErrorMsg('Please accept the privacy notice before submitting your quote request.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'quote',
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: trimmedPhone,
          service,
          industry,
          city: location.trim(),
          subject: `Quote Request: ${service}`,
          message: details.trim(),
          sourcePage: pathname || ROUTES.GET_A_QUOTE,
          sourceSection: 'Request a Project Quote Form',
          consent,
          website_url: websiteUrl,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        saved?: boolean;
        emailDelivered?: boolean;
        referenceId?: string;
        statusMessage?: string;
        error?: string;
      };
      const isSaved = Boolean(response.ok && payload.ok && payload.saved !== false && payload.referenceId);
      if (!isSaved) {
        setErrorMsg(
          payload.error ||
            'Your enquiry could not be submitted. Please try again or contact us directly.',
        );
        return;
      }

      const delivered = payload.emailDelivered === true;
      setSubmissionResult({
        referenceId: payload.referenceId ?? 'RECEIVED',
        emailDelivered: delivered,
        statusMessage:
          payload.statusMessage ||
          (delivered
            ? 'Your enquiry has been received successfully. Our team will contact you shortly.'
            : 'Your enquiry has been received, but email notification is temporarily delayed. Our team will still be able to access your enquiry.'),
      });
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setDetails('');
      setConsent(false);
    } catch {
      setErrorMsg('Your enquiry could not be submitted. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <InnerPageBanner
        title="Request a Project Quote"
        subtitle="Share your business goals and operational scope. We will prepare a structured consultation and technical recommendation."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.quote.image}
        backgroundAlt={STATIC_PAGE_BANNERS.quote.alt}
      />

      <section className="bg-[#080808] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-10">
            <div className="pb-6 border-b border-[#303030] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#CDCBCA]">
                  Project Scoping Form
                </h2>
                <p className="text-sm text-[#969696] mt-1">
                  Structured intake for software, ERP, Solar EPC, website, SEO/GEO/AEO, and automation inquiries.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <a
                  href={BRAND.whatsappPrefilledHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3 text-xs font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white whitespace-nowrap transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Quick Chat on WhatsApp</span>
                </a>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white whitespace-nowrap transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {submissionResult ? (
              <div
                role="status"
                className="mt-8 rounded-xl border border-[#D41514]/45 bg-[#1B1B1B] p-6 space-y-3"
              >
                <div className="flex items-center gap-2.5 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                  <span>
                    {submissionResult.emailDelivered
                      ? 'Enquiry Received Successfully'
                      : 'Enquiry Saved — Notification Delayed'}
                  </span>
                </div>
                <p className="text-sm text-[#CDCBCA] leading-relaxed">
                  {submissionResult.statusMessage} Reference ID:{' '}
                  <span className="font-[family-name:var(--font-mono)] font-semibold text-white">
                    {submissionResult.referenceId}
                  </span>
                  .
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmissionResult(null)}
                >
                  Submit Another Scope
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
                {errorMsg ? (
                  <div
                    role="alert"
                    className="rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-4 py-3 text-sm font-medium text-white"
                  >
                    {errorMsg}
                  </div>
                ) : null}

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="quote-honeypot">Leave blank</label>
                  <input
                    id="quote-honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-company" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Business name"
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quote-email" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="quote-service" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Primary Service
                    </label>
                    <select
                      id="quote-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3 py-2.5 text-sm text-[#CDCBCA] focus:border-[#D41514] focus:outline-none"
                    >
                      {allSelectableServices.map((item) => (
                        <option key={item} value={item} className="bg-[#111111] text-[#CDCBCA]">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-industry" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      id="quote-industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3 py-2.5 text-sm text-[#CDCBCA] focus:border-[#D41514] focus:outline-none"
                    >
                      {INDUSTRIES_MEGA_MENU.map((item) => (
                        <option key={item.title} value={item.title} className="bg-[#111111] text-[#CDCBCA]">
                          {item.title}
                        </option>
                      ))}
                      <option value="Other Industry" className="bg-[#111111] text-[#CDCBCA]">
                        Other Industry
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-location" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      City / Region
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] focus:border-[#D41514] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-details" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                    Project Requirements &amp; Goals *
                  </label>
                  <textarea
                    id="quote-details"
                    rows={5}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Outline the workflows, modules, pages, integrations, or timelines you are planning."
                    className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                  />
                </div>

                <div className="rounded-lg border border-[#303030] bg-[#080808] p-3.5">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs leading-relaxed text-[#CDCBCA]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-[#303030] bg-[#141414] accent-[#D41514] shrink-0"
                    />
                    <span>
                      I consent to share my contact details with Klyia Technology strictly to prepare a proposal and respond to this request.{' '}
                      <Link
                        href={ROUTES.PRIVACY_POLICY}
                        className="underline underline-offset-2 text-white hover:text-[#D41514]"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <div className="pt-1">
                  <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                    {submitting ? 'Submitting Request...' : 'Submit Quote Request'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
