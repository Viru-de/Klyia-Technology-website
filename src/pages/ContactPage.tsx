import React, {useState} from 'react';
import {CheckCircle2, Mail, MapPin, MessageCircle, Phone} from 'lucide-react';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';

interface ContactPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function ContactPage({breadcrumbs}: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (trimmedPhone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMsg('Please provide a brief description of your inquiry (at least 10 characters).');
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
          email: trimmedEmail,
          phone: trimmedPhone,
          subject: subject.trim() || 'General Business Inquiry',
          message: trimmedMessage,
        }),
      });

      const payload = (await response.json()) as {ok?: boolean; referenceId?: string; error?: string};
      if (!response.ok || !payload.ok) {
        setErrorMsg(payload.error || 'Unable to submit inquiry right now. Please try email or phone.');
        return;
      }

      setSubmittedRef(payload.referenceId ?? 'RECEIVED');
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch {
      setErrorMsg('Network issue while sending inquiry. Please call or message us directly on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <InnerPageBanner
        title="Contact Klyia Technology"
        subtitle="Connect with our team in Bhilai to discuss custom software, ERP systems, websites, SEO, GEO, AEO, or automation."
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
                  Speak Directly With Our Team
                </h2>
                <p className="text-sm leading-relaxed text-[#969696]">
                  Reach us by phone, WhatsApp, or email, or visit our Bhilai office for an in-person consultation.
                </p>
              </div>

              <div className="rounded-xl border border-[#303030] bg-[#111111] p-6 space-y-5">
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
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#969696]">
                      Office Address
                    </p>
                    <address className="not-italic text-sm leading-relaxed text-[#CDCBCA] mt-0.5">
                      {BRAND.address.line1}
                      <br />
                      {BRAND.address.line2}
                      <br />
                      {BRAND.address.cityStateCountry}
                    </address>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={BRAND.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#1B1B1B] px-4 py-2.5 text-sm font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514] hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D41514] group-hover:text-white" aria-hidden="true" />
                    <span>Message on WhatsApp</span>
                  </a>
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

              {submittedRef ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-[#D41514]/45 bg-[#1B1B1B] p-6 space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-white font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#D41514]" aria-hidden="true" />
                    <span>Inquiry Submitted Successfully</span>
                  </div>
                  <p className="text-sm text-[#CDCBCA]">
                    Thank you for contacting Klyia Technology. Your reference ID is{' '}
                    <span className="font-[family-name:var(--font-mono)] font-semibold text-white">
                      {submittedRef}
                    </span>
                    . Our team will reach out shortly via phone or email.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmittedRef(null)}
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
                      <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Phone / WhatsApp *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Work Email *
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
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#CDCBCA] mb-1.5">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="ERP, Website, SEO, or Automation"
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

                  <Button type="submit" variant="primary" size="md" disabled={submitting}>
                    {submitting ? 'Sending Message...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
