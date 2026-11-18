import React from 'react';
import {Mail, MapPin, MessageCircle, Phone} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';
import {FOOTER_COLUMNS} from '../../config/navigation.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';
import {Logo} from '../ui/Logo.tsx';
import {VisitorCounter} from './VisitorCounter.tsx';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-[#969696] border-t border-[#303030]">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Intro & Office Contact */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href={ROUTES.HOME}
              aria-label="Klyia Technology Home"
              className="inline-flex rounded-md"
            >
              <Logo size="md" theme="dark" />
            </Link>
            <p className="text-sm leading-relaxed text-[#969696] max-w-sm">
              {BRAND.footerSummary}
            </p>
            <p className="text-xs font-semibold tracking-wide text-[#D41514]">
              {BRAND.tagline}
            </p>

            <ul className="pt-2 space-y-2.5 text-sm text-[#969696]">
              <li className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#D41514] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D41514] shrink-0" aria-hidden="true" />
                  <span className="tabular-nums text-[#CDCBCA] hover:text-[#D41514]">
                    {BRAND.phoneDisplay}
                  </span>
                </a>
                <a
                  href={BRAND.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#D41514] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#D41514] shrink-0" aria-hidden="true" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#D41514] transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#D41514] shrink-0" aria-hidden="true" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 pt-0.5">
                <MapPin className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic text-xs leading-relaxed text-[#969696]">
                  {BRAND.address.full}
                </address>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#CDCBCA] tracking-wide mb-4">
              Main Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_COLUMNS.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#969696] hover:text-[#D41514] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#CDCBCA] tracking-wide mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_COLUMNS.industries.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#969696] hover:text-[#D41514] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Served Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#CDCBCA] tracking-wide mb-4">
              Locations Served
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_COLUMNS.locations.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#969696] hover:text-[#D41514] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#CDCBCA] tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_COLUMNS.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#969696] hover:text-[#D41514] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Website Visitor Counter */}
        <div className="mt-12">
          <VisitorCounter />
        </div>

        {/* Bottom Legal & Sitemap Row */}
        <div className="mt-8 pt-7 border-t border-[#303030] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-[#969696]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {currentYear} {BRAND.name}. All Rights Reserved.</p>
            <span className="text-[#303030]" aria-hidden="true">·</span>
            <Link href={ROUTES.PRIVACY_POLICY} className="hover:text-[#D41514] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#303030]" aria-hidden="true">·</span>
            <Link href={ROUTES.TERMS} className="hover:text-[#D41514] transition-colors">
              Terms and Conditions
            </Link>
            <span className="text-[#303030]" aria-hidden="true">·</span>
            <Link href={ROUTES.SITEMAP} className="hover:text-[#D41514] transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="text-[#969696]">
            Designed &amp; Developed by <span className="font-semibold text-[#CDCBCA]">{BRAND.name}</span> · Risali, Bhilai.
          </p>
        </div>
      </Container>
    </footer>
  );
}
