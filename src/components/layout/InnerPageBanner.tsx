import React, {useEffect, useState} from 'react';
import {ArrowRight, ChevronRight} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';
import {toWebpAssetPath} from '../../config/banners.ts';
import type {BreadcrumbEntry} from '../../config/seo.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbEntry[];
  backgroundImage?: string;
  backgroundWebpImage?: string;
  backgroundAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaNavigate?: () => void;
  headingClassName?: string;
}

const DEFAULT_BANNER_IMAGE = '/src/assets/images/banner_obsidian_architecture_1795006490317.jpg';

export function InnerPageBanner({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = DEFAULT_BANNER_IMAGE,
  backgroundWebpImage,
  backgroundAlt = 'Modern dark architectural glass and brushed graphite facade',
  ctaLabel,
  ctaHref,
  onCtaNavigate,
  headingClassName = 'text-white',
}: InnerPageBannerProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [backgroundImage]);

  const resolvedWebp = backgroundWebpImage ?? toWebpAssetPath(backgroundImage);

  return (
    <section className="relative flex min-h-[240px] sm:min-h-[290px] lg:min-h-[340px] w-full items-center overflow-hidden bg-[#080808] text-[#CDCBCA] border-b border-[#303030]">
      {/* Architectural Resilience Backdrop (prevents layout shift & acts as fallback if image fails) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(212,21,20,0.16),rgba(20,20,20,0.92)_48%,#080808_100%)]"
      />

      {/* Full-Width 16:9 Domain-Specific Background Banner Image */}
      {!imageError && backgroundImage ? (
        <picture>
          {resolvedWebp ? <source srcSet={resolvedWebp} type="image/webp" /> : null}
          <img
            src={backgroundImage}
            alt={backgroundAlt}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          />
        </picture>
      ) : null}

      {/* Obsidian Readability Scrim (Left-Weighted for ≥4.5:1 Contrast) + Crimson Edge Highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#080808]/95 via-[#080808]/80 to-[#080808]/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#080808]/55 via-transparent to-[#080808]/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,21,20,0.18),transparent_52%)]"
      />

      <Container className="relative z-10 w-full py-10 sm:py-12 lg:py-14">
        <motion.div
          initial={prefersReducedMotion ? false : {opacity: 0, y: 8}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-3 sm:mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-[#969696]">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={`${crumb.path}-${crumb.name}`} className="inline-flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="w-3.5 h-3.5 text-[#D41514] shrink-0" aria-hidden="true" />
                    ) : null}
                    {isLast ? (
                      <span aria-current="page" className="font-semibold text-white">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link
                        href={crumb.path}
                        className="text-[#CDCBCA] hover:text-white transition-colors"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1
            className={`font-[family-name:var(--font-display)] text-[26px] sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] [text-wrap:balance] ${headingClassName}`}
          >
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[#CDCBCA] max-w-2xl">
              {subtitle}
            </p>
          ) : null}

          {ctaLabel && ctaHref ? (
            <div className="mt-5 sm:mt-6">
              <Button href={ctaHref} onNavigate={onCtaNavigate} variant="primary" size="md">
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          ) : null}
        </motion.div>
      </Container>

      {/* Fine crimson bottom architectural accent border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-[#D41514]/80 via-[#303030] to-transparent"
      />
    </section>
  );
}
