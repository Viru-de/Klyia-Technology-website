import React, {useState} from 'react';
import {Building2, CheckCircle2, ExternalLink, Mail, MapPin, MessageSquare, Phone} from 'lucide-react';
import {OfficeLeafletMap} from '../components/contact/OfficeLeafletMap.tsx';
import {OPEN_CHATBOX_EVENT} from '../components/layout/FloatingSupportDock.tsx';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {SocialLinks} from '../components/ui/SocialLinks.tsx';
import {WhatsAppIcon} from '../components/ui/WhatsAppIcon.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import {CORE_SERVICES} from '../config/homeData.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';
import {Link, useRouter} from '../lib/router.tsx';

interface ContactPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function ContactPage({breadcrumbs}: ContactPageProps) {
  const {pathname} = useRouter();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<string>(CORE_SERVICES[0].title);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    emailDelivered: boolean;
    statusMessage: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) {
      return;
    }
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();
    const digits = trimmedPhone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (trimmedCompany.length < 2) {
      setErrorMsg('Please enter your company or business name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (
      digits.length < 10 ||
      digits.length > 15 ||
      (digits.length === 10 && !/^[6-9]\d{9}$/.test(digits))
    ) {
      setErrorMsg('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMsg('Please provide a brief description of your inquiry (at least 10 characters).');
      return;
    }
    if (!consent) {
      setErrorMsg('Please confirm your privacy consent before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'contact',
          name: trimmedName,
          company: trimmedCompany,
          email: trimmedEmail,
          phone: trimmedPhone,
          service,
          subject: subject.trim() || `${service} Enquiry`,
          message: trimmedMessage,
          sourcePage: pathname || ROUTES.CONTACT,
          sourceSection: 'Contact Us Form',
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
      setSubject('');
      setMessage('');
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
        title="Contact Klyia Technology"
        subtitle="Connect with our team in Risali, Bhilai for custom software, Solar ERP, Solar EPC systems, website development, Local SEO, GEO, and automation across Bhilai, Durg, Raipur, Chhattisgarh, and India."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.contact.image}
        backgroundAlt={STATIC_PAGE_BANNERS.contact.alt}
      />

      <section className="bg-[#080808] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514]">
                  <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                  <span>Direct Channels</span>
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#CDCBCA]">
                  Speak Directly With Our Bhilai Team
                </h2>
                <p className="text-sm leading-relaxed text-[#969696]">
                  Reach Klyia Technology by phone, WhatsApp, or email for on-site consultations in Bhilai, Durg, and Raipur or remote delivery across India. Need detailed module scoping?{' '}
                  <Link href={ROUTES.GET_A_QUOTE} className="text-white underline underline-offset-4 hover:text-[#D41514]">
                    Request a Project Quote
                  </Link>{' '}
                  or browse{' '}
                  <Link href={ROUTES.SERVICES} className="text-white underline underline-offset-4 hover:text-[#D41514]">
                    Our Services
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Building2 className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                      Business Name
                    </p>
                    <p className="text-base font-bold text-[#CDCBCA]">{BRAND.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={BRAND.phoneHref}
                      className="text-base font-bold text-[#CDCBCA] hover:text-[#D41514] transition-colors tabular-nums"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                      Email
                    </p>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-base font-bold text-[#CDCBCA] hover:text-[#D41514] transition-colors break-all"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                      Office Address
                    </p>
                    <address className="not-italic text-sm leading-relaxed text-[#CDCBCA] mt-0.5">
                      {BRAND.address.full}
                    </address>
                    <a
                      href={BRAND.openStreetMapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get directions to Klyia Technology Bhilai office on OpenStreetMap"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D41514] hover:text-white transition-colors"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={BRAND.whatsappPrefilledHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/50 bg-[#1B1B1B] px-4 py-2.5 text-sm font-semibold text-white hover:border-[#25D366] hover:bg-[#141414] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>Message on WhatsApp</span>
                  </a>
                  <a
                    href={BRAND.phoneHref}
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#1B1B1B] px-4 py-2.5 text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D41514] group-hover:text-white" aria-hidden="true" />
                    <span>Call Now</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event(OPEN_CHATBOX_EVENT))}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-4 py-2.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
                  <span>Open Website Enquiry Chatbox</span>
                </button>

                <div className="pt-4 border-t border-[#303030] space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                    Official Social Profiles
                  </p>
                  <SocialLinks variant="card" />
                </div>
              </div>
            </div>

            {/* Interactive Inquiry Form */}
            <div className="lg:col-span-7 rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#CDCBCA]">
                Send Us a Message
              </h2>
              <p className="mt-1.5 text-sm text-[#969696]">
                Share your requirements and our team will respond with next steps.
              </p>

              {submissionResult ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-[#D41514]/45 bg-[#1B1B1B] p-6 space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-white font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                    <span>
                      {submissionResult.emailDelivered
                        ? 'Enquiry Received Successfully'
                        : 'Enquiry Saved — Notification Delayed'}
                    </span>
                  </div>
                  <p className="text-sm text-[#CDCBCA]">
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
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {errorMsg ? (
                    <div
                      role="alert"
                      className="rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-4 py-3 text-sm font-medium text-white"
                    >
                      {errorMsg}
                    </div>
                  ) : null}

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="contact-honeypot">Leave blank</label>
                    <input
                      id="contact-honeypot"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Company / Business Name *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Business or organization name"
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXXXXXXX"
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Interested Service
                      </label>
                      <select
                        id="contact-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] focus:border-[#D41514] focus:outline-none"
                      >
                        {CORE_SERVICES.map((item) => (
                          <option key={item.id} value={item.title} className="bg-[#111111] text-[#CDCBCA]">
                            {item.title}
                          </option>
                        ))}
                        <option value="Solar ERP / Solar EPC Solutions" className="bg-[#111111] text-[#CDCBCA]">
                          Solar ERP / Solar EPC Solutions
                        </option>
                        <option value="Other" className="bg-[#111111] text-[#CDCBCA]">
                          Other
                        </option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="ERP, Website, Solar EPC, or SEO"
                        className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                      Project or Inquiry Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your business workflow, website goals, or software requirements."
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
                        I consent to Klyia Technology storing and emailing my details strictly to respond to my enquiry.{' '}
                        <Link
                          href={ROUTES.PRIVACY_POLICY}
                          className="underline underline-offset-2 text-white hover:text-[#D41514]"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                <Button type="submit" variant="primary" size="md" disabled={submitting}>
                    {submitting ? 'Sending Message...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive OpenStreetMap Section */}
          <div className="mt-12 sm:mt-16 rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.45)] space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-5 border-b border-[#303030]">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D41514]">
                  <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
                  <span>Office Location</span>
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Visit Our Office
                </h2>
                <div className="text-sm leading-relaxed text-[#CDCBCA]">
                  <p className="font-semibold text-white">{BRAND.name}</p>
                  <address className="not-italic text-[#969696]">
                    {BRAND.address.full}
                  </address>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={BRAND.openStreetMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Directions to Klyia Technology office in Risali, Bhilai on OpenStreetMap"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D41514] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#b51110] transition-colors"
                >
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-xl border border-[#303030] bg-[#080808]">
              <OfficeLeafletMap />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
