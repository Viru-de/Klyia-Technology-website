import React from 'react';

interface LogoProps {
  variant?: 'full' | 'symbol';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function KlyiaSymbol({
  theme = 'dark',
  className = 'w-9 h-9',
}: {
  theme?: 'dark' | 'light';
  className?: string;
}) {
  const containerFill = theme === 'dark' ? '#141414' : '#080808';
  const strokeColor = '#303030';
  const glyphFill = theme === 'dark' ? '#CDCBCA' : '#FFFFFF';
  const nodeFill = '#D41514';

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="10" fill={containerFill} />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="9.25" stroke={strokeColor} strokeWidth="1.5" />
      {/* Vertical structural spine */}
      <path d="M13.5 10.5H20V37.5H13.5V10.5Z" fill={glyphFill} />
      {/* Precision angled forward arms */}
      <path
        d="M22.2 23.6L34.2 10.5H40.2L27.5 24L40.5 37.5H34L22.2 24.9V23.6Z"
        fill={glyphFill}
      />
      {/* Laser Crimson connectivity nexus node */}
      <rect x="20" y="21.25" width="5.5" height="5.5" rx="1.25" fill={nodeFill} />
    </svg>
  );
}

export function Logo({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
}: LogoProps) {
  const symbolSizeClass =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';

  if (variant === 'symbol') {
    return (
      <span className={`inline-flex items-center shrink-0 ${className}`}>
        <KlyiaSymbol theme={theme} className={symbolSizeClass} />
      </span>
    );
  }

  const primaryTextColor = theme === 'dark' ? 'text-[#CDCBCA]' : 'text-[#080808]';
  const secondaryTextColor = theme === 'dark' ? 'text-[#969696]' : 'text-[#D41514]';
  const titleSizeClass =
    size === 'sm' ? 'text-[17px]' : size === 'lg' ? 'text-[22px]' : 'text-[19px]';
  const subSizeClass =
    size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px]';

  return (
    <span className={`inline-flex items-center gap-2.5 shrink-0 whitespace-nowrap select-none ${className}`}>
      <KlyiaSymbol theme={theme} className={symbolSizeClass} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-[family-name:var(--font-display)] font-extrabold tracking-[0.05em] ${titleSizeClass} ${primaryTextColor}`}
        >
          KLYIA
        </span>
        <span
          className={`font-[family-name:var(--font-display)] font-semibold tracking-[0.22em] mt-0.5 ${subSizeClass} ${secondaryTextColor}`}
        >
          TECHNOLOGY
        </span>
      </span>
    </span>
  );
}
