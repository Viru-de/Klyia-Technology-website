import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#D41514] mb-3">
          <span className="h-px w-5 bg-[#D41514]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-[#CDCBCA]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-[17px] leading-[1.65] text-[#969696]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
