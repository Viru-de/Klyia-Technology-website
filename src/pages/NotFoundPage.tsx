import React from 'react';
import {ArrowLeft} from 'lucide-react';
import {InnerPageBanner} from '../components/layout/InnerPageBanner.tsx';
import {Button} from '../components/ui/Button.tsx';
import {Container} from '../components/ui/Container.tsx';
import {STATIC_PAGE_BANNERS} from '../config/banners.ts';
import {ROUTES} from '../config/routes.ts';
import type {BreadcrumbEntry} from '../config/seo.ts';

interface NotFoundPageProps {
  breadcrumbs: BreadcrumbEntry[];
}

export function NotFoundPage({breadcrumbs}: NotFoundPageProps) {
  return (
    <>
      <InnerPageBanner
        title="Page Not Found"
        subtitle="The page you requested is unavailable or has moved. Use the links below to explore Klyia Technology."
        breadcrumbs={breadcrumbs}
        backgroundImage={STATIC_PAGE_BANNERS.notFound.image}
        backgroundAlt={STATIC_PAGE_BANNERS.notFound.alt}
        ctaLabel={STATIC_PAGE_BANNERS.notFound.ctaLabel}
        ctaHref={STATIC_PAGE_BANNERS.notFound.ctaHref}
      />

      <section className="bg-[#080808] py-16 sm:py-20">
        <Container className="text-center max-w-xl space-y-5">
          <p className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#D41514]">
            HTTP 404
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#CDCBCA]">
            We couldn&apos;t locate that route
          </h2>
          <p className="text-base text-[#969696]">
            Return to the homepage or browse our services and industries to find what you need.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3.5">
            <Button href={ROUTES.HOME} variant="primary" size="md">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Button>
            <Button href={ROUTES.SERVICES} variant="outline" size="md">
              Explore Services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
