import React, {useState} from 'react';
import {CheckCircle2, MessageCircle} from 'lucide-react';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import {CORE_SERVICES} from '../config/homeData.ts';
import {INDUSTRIES_MEGA_MENU} from '../config/navigation.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';

interface GetAQuotePageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function GetAQuotePage({breadcrumbs}: GetAQuotePageProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<string>(CORE_SERVICES[0].title);
  const [industry, setIndustry] = useState<string>(INDUSTRIES_MEGA_MENU[0].title);
  const [location, setLocation] = useState('Bhilai / Durg / Raipur');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg(null);

    if (name.trim().length < 2) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }
    if (phone.trim().replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit contact number.');
      return;
    }
    if (details.trim().length < 12) {
      setErrorMsg('Please summarize your project requirements (at least 12 characters).');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'quote',
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service,
          industry,
          location,
          message: details.trim(),
        }),
      });

      const payload = (await response.json()) as {ok?: boolean; referenceId?: string; error?: string};
      if (!response.ok || !payload.ok) {
        setErrorMsg(payload.error || 'Could not submit request. Please try again or contact us directly.');
        return;
      }

      setSubmittedRef(payload.referenceId ?? 'RECEIVED');
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setDetails('');
    } catch {
      setErrorMsg('Network error while submitting quote request. Please call or WhatsApp our team.');
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
                  Structured intake for software, ERP, website, SEO/GEO/AEO, and automation inquiries.
                </p>
              </div>
              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#CDCBCA] hover:text-[#D41514] whitespace-nowrap transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                <span>Quick Chat on WhatsApp</span>
              </a>
            </div>

            {submittedRef ? (
              <div
                role="status"
                className="mt-8 rounded-xl border border-[#D41514]/45 bg-[#1B1B1B] p-6 space-y-3"
              >
                <div className="flex items-center gap-2.5 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                  <span>Quote Request Received</span>
                </div>
                <p className="text-sm text-[#CDCBCA] leading-relaxed">
                  Thank you. Your project request reference is{' '}
                  <span className="font-[family-name:var(--font-mono)] font-semibold text-white">
                    {submittedRef}
                  </span>
                  . Our technical team in Bhilai will review your requirements and follow up to schedule a discovery discussion.
                </p>
                <Button type="button" variant="outline" size="sm" onClick={() => setSubmittedRef(null)}>
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
                      Company / Organization
                    </label>
                    <input
                      id="quote-company"
                      type="text"
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
                      {CORE_SERVICES.map((item) => (
                        <option key={item.id} value={item.title} className="bg-[#111111] text-[#CDCBCA]">
                          {item.title}
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
