import React, {useRef, useState} from 'react';
import {AlertCircle, ArrowRight, CheckCircle2, Phone, ShieldCheck} from 'lucide-react';
import {BANNER_IMAGES} from '../../config/banners.ts';
import {BRAND} from '../../config/brand.ts';
import {ROUTES} from '../../config/routes.ts';
import {saveQuotePrefill} from '../../lib/quotePrefill.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';

function isValidCallbackPhone(raw: string): boolean {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^0[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^91[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^0091[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (trimmed.startsWith('+')) {
    if (digits.startsWith('91')) {
      return /^91[6-9]\d{9}$/.test(digits);
    }
    return digits.length >= 10 && digits.length <= 15 && !/^(\d)\1{6,}$/.test(digits);
  }
  return false;
}

export function HeroSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submitState, setSubmitState] = useState<{
    kind: 'success' | 'error';
    message: string;
    referenceId?: string;
  } | null>(null);
  const lastSubmittedKeyRef = useRef<string | null>(null);

  const handleCallbackSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) {
      return;
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    setValidationError(null);

    if (trimmedName.length < 2) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!isValidCallbackPhone(trimmedPhone)) {
      setValidationError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const submissionKey = `${trimmedName.toLowerCase()}::${trimmedPhone.replace(/\D/g, '')}`;
    if (lastSubmittedKeyRef.current === submissionKey && submitState?.kind === 'success') {
      return;
    }

    setSubmitting(true);
    setSubmitState(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          type: 'callback',
          name: trimmedName,
          phone: trimmedPhone,
          sourcePage: '/',
          sourceSection: 'Homepage Hero Callback Form',
          website_url: websiteUrl,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        saved?: boolean;
        referenceId?: string;
        emailDelivered?: boolean;
      };

      if (!response.ok || !payload.ok || payload.saved === false) {
        setSubmitState({
          kind: 'error',
          message: 'Unable to submit your request. Please try again or call us directly.',
        });
        return;
      }

      lastSubmittedKeyRef.current = submissionKey;
      setSubmitState({
        kind: 'success',
        message: 'Thank you! Our team will contact you shortly.',
        referenceId: payload.referenceId,
      });
      setName('');
      setPhone('');
    } catch {
      setSubmitState({
        kind: 'error',
        message: 'Unable to submit your request. Please try again or call us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      aria-label="Klyia Technology — Custom ERP, Software Development and Business Automation"
      className="relative w-full overflow-hidden bg-[#080808] border-b border-[#303030]"
    >
      {/* Full-Width Edge-to-Edge Background Image */}
      <img
        src={BANNER_IMAGES.heroFullwidthBanner}
        alt="Enterprise software development, custom ERP analytics, AI automation, and digital transformation at Klyia Technology"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover object-center select-none pointer-events-none"
      />

      {/* Dark Scrim Overlays for High Text & Form Contrast Across Desktop, Tablet & Mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#080808]/42 sm:bg-[#080808]/38"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/62 to-[#080808]/42"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(212,21,20,0.16),transparent_52%)]"
      />

      <Container className="relative z-10 py-14 sm:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Left Column: Brand Value Proposition, Highlights & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#CDCBCA]">
              <span className="h-px w-7 bg-[#D41514] shrink-0" aria-hidden="true" />
              <span>Klyia Technology · Bhilai · Custom ERP, Software &amp; AI Automation</span>
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.025em] text-white [text-wrap:balance]">
              Custom Software &amp; ERP Solutions Engineered Around Your Business
            </h1>

            <p className="text-base sm:text-[18px] font-medium leading-[1.6] text-[#CDCBCA] max-w-2xl">
              We build custom ERP software, Solar EPC platforms, business automation systems, and high-converting websites tailored to how Indian enterprises operate — without forcing your team into rigid templates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-2xl">
              <div className="rounded-xl border border-[#303030]/90 bg-[#111111]/85 backdrop-blur-sm px-3.5 py-2.5">
                <p className="text-xs font-bold text-white">Custom ERP &amp; Solar EPC</p>
                <p className="text-[11px] text-[#969696] mt-0.5">
                  Manufacturing, steel, mandi &amp; GST billing
                </p>
              </div>
              <div className="rounded-xl border border-[#303030]/90 bg-[#111111]/85 backdrop-blur-sm px-3.5 py-2.5">
                <p className="text-xs font-bold text-white">AI &amp; WhatsApp Automation</p>
                <p className="text-[11px] text-[#969696] mt-0.5">
                  Workflow routing &amp; automated dispatch alerts
                </p>
              </div>
              <div className="rounded-xl border border-[#303030]/90 bg-[#111111]/85 backdrop-blur-sm px-3.5 py-2.5">
                <p className="text-xs font-bold text-white">Web, SEO &amp; GEO Growth</p>
                <p className="text-[11px] text-[#969696] mt-0.5">
                  Server-rendered speed &amp; AI search clarity
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button href={ROUTES.SERVICES} variant="primary" size="lg">
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Button>
              <Button
                href={ROUTES.GET_A_QUOTE}
                onNavigate={() =>
                  saveQuotePrefill({
                    service: 'Custom Software Development',
                  })
                }
                variant="outline"
                size="lg"
              >
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Right Column: Clean 2-Field Callback Lead Form Card + Call Us Now */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-[#303030] bg-[#111111]/95 backdrop-blur-md p-6 sm:p-7 shadow-[0_24px_64px_-18px_rgba(0,0,0,0.92),0_0_45px_-22px_rgba(212,21,20,0.28)]">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D41514] to-transparent"
              />

              <div className="space-y-1.5 mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D41514]">
                  Quick Consultation
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white">
                  Request a Call Back
                </h2>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#969696]">
                  Leave your name and phone number. Our team will reach out directly to discuss your requirements.
                </p>
              </div>

              {validationError ? (
                <div
                  role="alert"
                  className="mb-4 flex items-start gap-2 rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-3 py-2.5 text-xs font-medium text-white"
                >
                  <AlertCircle className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{validationError}</span>
                </div>
              ) : null}

              {submitState ? (
                <div
                  role={submitState.kind === 'error' ? 'alert' : 'status'}
                  className={`mb-4 rounded-xl border px-3.5 py-3 text-xs leading-relaxed ${
                    submitState.kind === 'success'
                      ? 'border-[#25D366]/50 bg-[#25D366]/10 text-white'
                      : 'border-[#D41514]/60 bg-[#D41514]/15 text-white'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {submitState.kind === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="space-y-1">
                      <p className="font-semibold text-white">{submitState.message}</p>
                      {submitState.referenceId ? (
                        <p className="text-[11px] text-[#CDCBCA]">
                          Reference ID:{' '}
                          <span className="font-[family-name:var(--font-mono)] text-white">
                            {submitState.referenceId}
                          </span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleCallbackSubmit} className="space-y-4" noValidate>
                {/* Honeypot anti-spam trap (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hero-callback-website">Website URL</label>
                  <input
                    id="hero-callback-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-callback-name"
                    className="block text-xs font-semibold text-[#CDCBCA] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="hero-callback-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (validationError) setValidationError(null);
                    }}
                    placeholder="Enter your full name"
                    className="w-full h-11 rounded-lg border border-[#303030] bg-[#080808] px-3.5 text-sm text-white placeholder:text-[#969696]/75 focus:border-[#D41514] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-callback-phone"
                    className="block text-xs font-semibold text-[#CDCBCA] mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="hero-callback-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (validationError) setValidationError(null);
                    }}
                    placeholder="Enter your mobile number"
                    className="w-full h-11 rounded-lg border border-[#303030] bg-[#080808] px-3.5 text-sm text-white placeholder:text-[#969696]/75 focus:border-[#D41514] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full h-11 items-center justify-center gap-2 rounded-lg bg-[#D41514] px-5 text-sm font-semibold text-white hover:bg-[#E31E1D] active:bg-[#B8100F] disabled:opacity-60 transition-colors cursor-pointer"
                >
                  <span>{submitting ? 'Sending Request...' : 'Request a Call Back'}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-[#303030] space-y-2.5">
                <a
                  href={BRAND.phoneHref}
                  className="flex w-full h-11 items-center justify-center gap-2.5 rounded-lg border border-[#303030] bg-[#1B1B1B] px-4 text-sm font-semibold text-white hover:border-[#D41514] hover:bg-[#D41514] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D41514] group-hover:text-white shrink-0" aria-hidden="true" />
                  <span>Call Us Now</span>
                  <span className="text-xs font-normal text-[#CDCBCA] font-[family-name:var(--font-mono)]">
                    {BRAND.phoneDisplay}
                  </span>
                </a>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#969696]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D41514] shrink-0" aria-hidden="true" />
                  <span>Direct response from our Bhilai engineering desk · No spam</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
