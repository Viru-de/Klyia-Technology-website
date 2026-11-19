import React, {useCallback, useEffect, useState} from 'react';
import {ArrowRight, ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';
import {useReducedMotion} from 'motion/react';
import {HERO_SLIDES} from '../../config/homeData.ts';
import {saveQuotePrefill} from '../../lib/quotePrefill.ts';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {MediaFrame} from '../ui/MediaFrame.tsx';

const AUTO_ADVANCE_MS = 6000;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);

  const slideCount = HERO_SLIDES.length;
  const shouldPause = Boolean(prefersReducedMotion) || isHovered || isFocusWithin || isPausedByUser;

  const goToSlide = useCallback(
    (index: number, pauseAutoAdvance: boolean) => {
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
      if (pauseAutoAdvance) {
        setIsPausedByUser(true);
      }
    },
    [slideCount],
  );

  const handleNext = useCallback(() => {
    goToSlide(activeIndex + 1, true);
  }, [activeIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide(activeIndex - 1, true);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (shouldPause) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [shouldPause, slideCount]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrev();
    }
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Klyia Technology featured solutions showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocusWithin(false);
        }
      }}
      onKeyDown={handleKeyDown}
      className="relative overflow-hidden bg-[#080808] border-b border-[#303030]"
    >
      {/* Restrained Crimson Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(212,21,20,0.16),transparent_52%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(205,203,202,0.06),transparent_42%)]"
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        {/* Stacked CSS grid keeps container height fixed across all 4 slides (0 layout shift) */}
        <div className="grid grid-cols-1 grid-rows-1">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            const transitionClass = prefersReducedMotion
              ? ''
              : 'transition-opacity duration-500 ease-out';

            return (
              <div
                key={slide.id}
                aria-hidden={!isActive}
                className={`col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 ${transitionClass} ${
                  isActive
                    ? 'opacity-100 z-10 pointer-events-auto'
                    : 'opacity-0 z-0 pointer-events-none select-none'
                }`}
              >
                {/* Primary Copy Column */}
                <div className="lg:col-span-6 space-y-5">
                  <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#CDCBCA]">
                    <span className="h-px w-6 bg-[#D41514] shrink-0" aria-hidden="true" />
                    <span>{slide.eyebrow}</span>
                  </p>

                  {isActive ? (
                    <h1 className="font-[family-name:var(--font-display)] text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold leading-[1.12] tracking-[-0.025em] text-white [text-wrap:balance]">
                      {slide.headline}
                    </h1>
                  ) : (
                    <p
                      aria-hidden="true"
                      className="font-[family-name:var(--font-display)] text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold leading-[1.12] tracking-[-0.025em] text-white [text-wrap:balance]"
                    >
                      {slide.headline}
                    </p>
                  )}

                  <p className="text-lg sm:text-[19px] font-medium leading-[1.55] text-[#CDCBCA] max-w-xl">
                    {slide.description}
                  </p>

                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#969696] max-w-xl">
                    {slide.supportingContext}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <Button
                      href={slide.primaryCta.href}
                      tabIndex={isActive ? undefined : -1}
                      onNavigate={
                        slide.primaryCta.quotePrefillService
                          ? () =>
                              saveQuotePrefill({
                                service: slide.primaryCta.quotePrefillService,
                                industry: slide.primaryCta.quotePrefillIndustry,
                              })
                          : undefined
                      }
                      variant="primary"
                      size="lg"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Button>
                    <Button
                      href={slide.secondaryCta.href}
                      tabIndex={isActive ? undefined : -1}
                      onNavigate={
                        slide.secondaryCta.quotePrefillService
                          ? () =>
                              saveQuotePrefill({
                                service: slide.secondaryCta.quotePrefillService,
                                industry: slide.secondaryCta.quotePrefillIndustry,
                              })
                          : undefined
                      }
                      variant="outline"
                      size="lg"
                    >
                      {slide.secondaryCta.label}
                    </Button>
                  </div>
                </div>

                {/* Framed Visual Column */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl border border-[#303030] bg-[#111111] p-2.5 sm:p-3.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9),0_0_45px_-22px_rgba(212,21,20,0.3)]">
                    <div className="relative overflow-hidden rounded-xl bg-[#080808] aspect-[16/9]">
                      <MediaFrame
                        src={slide.image}
                        webpSrc={slide.webpImage}
                        alt={slide.imageAlt}
                        width={1280}
                        height={720}
                        lazy={index !== 0}
                        fallbackLabel={slide.headline}
                        imgClassName="h-full w-full object-cover object-center"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent"
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="mt-2.5 h-px w-full bg-gradient-to-r from-transparent via-[#D41514]/65 to-transparent"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slider Controls Bar: Indicators + Prev/Next + Auto-Advance Toggle */}
        <div className="mt-8 pt-5 border-t border-[#303030]/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((slide, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Slide ${index + 1}: ${slide.headline}`}
                  onClick={() => goToSlide(index, true)}
                  className={`group inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#D41514] bg-[#1B1B1B] text-white'
                      : 'border-[#303030] bg-[#111111] text-[#969696] hover:border-[#CDCBCA]/40 hover:text-white'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 rounded-full transition-all ${
                      isSelected ? 'w-5 bg-[#D41514]' : 'w-1.5 bg-[#969696]/60 group-hover:bg-[#CDCBCA]'
                    }`}
                  />
                  <span className="font-[family-name:var(--font-mono)] tabular-nums">
                    0{index + 1}
                  </span>
                </button>
              );
            })}
            <span className="hidden sm:inline-block ml-2 text-xs text-[#969696] font-[family-name:var(--font-mono)] tabular-nums">
              0{activeIndex + 1} / 0{slideCount}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!prefersReducedMotion ? (
              <button
                type="button"
                onClick={() => setIsPausedByUser((prev) => !prev)}
                aria-label={isPausedByUser ? 'Resume slide auto-advance' : 'Pause slide auto-advance'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
              >
                {isPausedByUser ? (
                  <Play className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Pause className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            ) : null}

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
