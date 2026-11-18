import React from 'react';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {BRAND} from '../config/brand.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
  breadcrumbs: BreadcrumbEntry[];
}

export function LegalPage({mode, breadcrumbs}: LegalPageProps) {
  const isPrivacy = mode === 'privacy';
  const banner = isPrivacy ? STATIC_PAGE_BANNERS.privacy : STATIC_PAGE_BANNERS.terms;

  return (
    <>
      <InnerPageBanner
        title={isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
        subtitle={
          isPrivacy
            ? 'How Klyia Technology handles contact details and project inquiry information.'
            : 'Terms governing website usage and consultation inquiries with Klyia Technology.'
        }
        breadcrumbs={breadcrumbs}
        backgroundImage={banner.image}
        backgroundAlt={banner.alt}
      />

      <section className="bg-[#080808] py-16">
        <Container className="max-w-4xl">
          <div className="space-y-6 text-[15px] leading-[1.75] text-[#CDCBCA]">
            {isPrivacy ? (
              <>
                <h2 className="text-xl font-bold text-white">1. Information Collected</h2>
                <p className="text-[#969696]">
                  When you submit a contact or project quote inquiry on {BRAND.domain}, Klyia Technology collects only the contact details and project description you voluntarily provide (such as your name, company name, email address, phone number, and requirement summary).
                </p>
                <h2 className="text-xl font-bold text-white">2. Purpose of Use</h2>
                <p className="text-[#969696]">
                  Submitted details are used solely to respond to your consultation request, prepare project proposals, and communicate regarding software, ERP, website, or digital growth services. We do not sell or rent inquiry data to third parties.
                </p>
                <h2 className="text-xl font-bold text-white">3. Contact for Data Requests</h2>
                <p className="text-[#969696]">
                  For questions or deletion requests regarding any submitted inquiry, write to{' '}
                  <a href={`mailto:${BRAND.email}`} className="font-semibold text-[#D41514] underline">
                    {BRAND.email}
                  </a>{' '}
                  or call {BRAND.phoneDisplay}.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-white">1. Website Information</h2>
                <p className="text-[#969696]">
                  This website provides information regarding IT solutions, custom software development, ERP systems, web engineering, SEO, GEO, AEO, and automation services offered by Klyia Technology, located at {BRAND.address.full}
                </p>
                <h2 className="text-xl font-bold text-white">2. Project Scope &amp; Proposals</h2>
                <p className="text-[#969696]">
                  Submitting an inquiry or quote request initiates a consultation discussion and does not constitute a binding service contract until a formal written scope, timeline, and commercial agreement are executed by both parties.
                </p>
                <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
                <p className="text-[#969696]">
                  The Klyia Technology brand name, logo mark, and website content are the property of Klyia Technology and may not be reproduced without written permission.
                </p>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
