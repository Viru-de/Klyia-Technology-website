import React, {useState} from 'react';
import {AlertCircle, CheckCircle2, Phone} from 'lucide-react';
import {BRAND, buildWhatsAppHref} from '../../config/brand.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {WhatsAppIcon} from '../ui/WhatsAppIcon.tsx';

export interface ServiceEnquiryFormProps {
  type?: 'service' | 'solar' | 'contact';
  heading: string;
  subtitle: string;
  defaultService: string;
  serviceOptions: string[];
  industry?: string;
  sourceSection: string;
  submitLabel?: string;
  whatsappContextMessage?: string;
}

export function ServiceEnquiryForm({
  type = 'service',
  heading,
  subtitle,
  defaultService,
  serviceOptions,
  industry,
  sourceSection,
  submitLabel = 'Send Enquiry',
  whatsappContextMessage,
}: ServiceEnquiryFormProps) {
  const {pathname} = useRouter();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
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

  const whatsappUrl = buildWhatsAppHref(
    whatsappContextMessage ||
      `Hello Klyia Technology, I visited your website and would like to enquire about ${service}.`,
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submitting) {
      return;
    }
    setErrorMsg(null);

    const trimmedName = name.trim();
    const trimmedCompany = company.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
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
    if (
      digits.length < 10 ||
      digits.length > 15 ||
      (digits.length === 10 && !/^[6-9]\d{9}$/.test(digits))
    ) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMsg('Please describe your requirement (at least 10 characters).');
      return;
    }
    if (!consent) {
      setErrorMsg('Please agree to the privacy notice so our team can respond to your enquiry.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type,
          name: trimmedName,
          company: trimmedCompany,
          phone: trimmedPhone,
          email: trimmedEmail,
          service,
          industry,
          message: trimmedMessage,
          sourcePage: pathname || '/',
          sourceSection,
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
      setPhone('');
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch {
      setErrorMsg('Your enquiry could not be submitted. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[#303030] bg-[#111111] p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#303030]">
        <div className="space-y-1.5">
          <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white">
            {heading}
          </h2>
          <p className="text-sm text-[#969696] leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
          <a
            href={BRAND.phoneHref}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {submissionResult ? (
        <div
          role="status"
          className="rounded-xl border border-[#D41514]/45 bg-[#1B1B1B] p-6 space-y-3"
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
            {submissionResult.statusMessage}{' '}
            Reference ID:{' '}
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
            Send Another Enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {errorMsg ? (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-4 py-3 text-sm font-medium text-white"
            >
              <AlertCircle className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{errorMsg}</span>
            </div>
          ) : null}

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor={`honeypot-${sourceSection}`}>Leave empty</label>
            <input
              id={`honeypot-${sourceSection}`}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`enq-name-${type}`}
                className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
              >
                Full Name *
              </label>
              <input
                id={`enq-name-${type}`}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor={`enq-company-${type}`}
                className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
              >
                Company / Business Name *
              </label>
              <input
                id={`enq-company-${type}`}
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company or solar EPC firm"
                className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor={`enq-phone-${type}`}
                className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
              >
                Mobile Number *
              </label>
              <input
                id={`enq-phone-${type}`}
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98XXXXXXXX"
                className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor={`enq-email-${type}`}
                className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
              >
                Email Address *
              </label>
              <input
                id={`enq-email-${type}`}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor={`enq-service-${type}`}
                className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
              >
                Selected Service *
              </label>
              <select
                id={`enq-service-${type}`}
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3 py-2.5 text-sm text-[#CDCBCA] focus:border-[#D41514] focus:outline-none"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#111111] text-[#CDCBCA]">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor={`enq-message-${type}`}
              className="block text-sm font-semibold text-[#CDCBCA] mb-1.5"
            >
              Project or Requirement Details *
            </label>
            <textarea
              id={`enq-message-${type}`}
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your workflow, project capacity, city, or digital goals."
              className="w-full rounded-lg border border-[#303030] bg-[#080808] px-3.5 py-2.5 text-sm text-[#CDCBCA] placeholder:text-[#969696]/60 focus:border-[#D41514] focus:outline-none"
            />
          </div>

          <div className="space-y-2 rounded-lg border border-[#303030] bg-[#080808] p-3.5">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs leading-relaxed text-[#CDCBCA]">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[#303030] bg-[#141414] accent-[#D41514] shrink-0"
              />
              <span>
                I consent to share these details with Klyia Technology strictly so your team can respond to my enquiry.{' '}
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
            {submitting ? 'Sending Enquiry...' : submitLabel}
          </Button>
        </form>
      )}
    </div>
  );
}
