import React from 'react';
import {ArrowRight} from 'lucide-react';
import {HERO_CONTENT} from '../../config/homeData.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] border-b border-[#303030]">
      {/* Restrained Crimson Ambient Lighting & Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(212,21,20,0.16),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(205,203,202,0.06),transparent_42%)]"
      />

      <Container className="relative z-10 py-14 sm:py-16 lg:py-22 xl:py-26">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          {/* Primary Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#969696]">
              <span className="h-px w-6 bg-[#D41514]" aria-hidden="true" />
              <span>Custom Software</span>
              <span className="text-[#303030]" aria-hidden="true">·</span>
              <span>ERP Systems</span>
              <span className="text-[#303030]" aria-hidden="true">·</span>
              <span>AI &amp; Search Growth</span>
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#CDCBCA]">
              Technology That{' '}
              <span className="text-[#D41514]">Moves Your Business</span>{' '}
              <span className="text-white">Forward.</span>
            </h1>

            <p className="text-lg sm:text-[19px] font-medium leading-[1.55] text-[#CDCBCA] max-w-xl">
              {HERO_CONTENT.supportingText}
            </p>

            <p className="text-[15px] sm:text-base leading-[1.7] text-[#969696] max-w-xl">
              {HERO_CONTENT.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button href={HERO_CONTENT.primaryCta.href} variant="primary" size="lg">
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button href={HERO_CONTENT.secondaryCta.href} variant="outline" size="lg">
                {HERO_CONTENT.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Architectural Obsidian & Crimson 3D Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[#303030] bg-[#111111] p-2.5 sm:p-3.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9),0_0_45px_-22px_rgba(212,21,20,0.3)]">
              <div className="overflow-hidden rounded-xl bg-[#080808] aspect-[16/9]">
                <MediaFrame
                  src={HERO_CONTENT.image}
                  alt={HERO_CONTENT.imageAlt}
                  width={1280}
                  height={720}
                  lazy={false}
                  fallbackLabel="Klyia Enterprise Systems Architecture"
                  imgClassName="h-full w-full object-cover object-center"
                />
              </div>
              <div
                aria-hidden="true"
                className="mt-2.5 h-px w-full bg-gradient-to-r from-transparent via-[#D41514]/60 to-transparent"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
