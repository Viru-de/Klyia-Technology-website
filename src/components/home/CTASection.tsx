import React from 'react';
import {ArrowRight} from 'lucide-react';
import {ROUTES} from '../../config/routes.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#141414] text-[#CDCBCA] py-16 sm:py-20">
      {/* Subtle Crimson Ambient Highlight & Fine Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,21,20,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#D41514]/60 to-transparent"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center space-y-5">
          <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
            Have a Business Idea? <span className="text-[#D41514]">Let&apos;s Make It Happen.</span>
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#CDCBCA] max-w-2xl mx-auto">
            Let&apos;s discuss your business requirements and find the right technology solution.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Button href={ROUTES.GET_A_QUOTE} variant="primary" size="lg">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button href={ROUTES.CONTACT} variant="outline" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
