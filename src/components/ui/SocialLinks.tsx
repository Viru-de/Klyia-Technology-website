import React from 'react';
import {BRAND, type SocialPlatformId} from '../../config/brand.ts';

interface SocialLinksProps {
  variant?: 'footer' | 'card';
  className?: string;
}

function SocialPlatformIcon({id}: {id: SocialPlatformId}) {
  if (id === 'facebook') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.5-1.46H16.5V4.45c-.26-.03-1.15-.11-2.18-.11-2.16 0-3.64 1.32-3.64 3.74V10.5H8.2v3h2.48V21h2.82Z" />
      </svg>
    );
  }

  if (id === 'instagram') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M12.05 3.5c-4.7 0-8.05 3.35-8.05 7.98 0 4.65 3.35 7.98 8.05 7.98 1.4 0 2.68-.3 3.78-.85.85 1.32 1.84 2.19 3.19 2.19.62 0 1.15-.16 1.56-.42l-.5-1.5c-.22.08-.44.12-.66.12-.66 0-1.15-.48-1.6-1.36 1.37-1.44 2.18-3.6 2.18-6.16 0-4.63-3.3-7.98-7.95-7.98Zm0 2.4c2.88 0 4.73 2.26 4.73 5.58 0 1.84-.54 3.43-1.51 4.41-.73-.96-1.64-1.57-2.8-1.57-.78 0-1.45.27-1.92.65l.52 1.4c.32-.16.65-.24.98-.24.85 0 1.48.55 2.02 1.33-.6.22-1.28.34-2.02.34-2.9 0-4.8-2.25-4.8-5.58 0-3.32 1.9-5.58 4.8-5.58Z" />
    </svg>
  );
}

export function SocialLinks({variant = 'footer', className = ''}: SocialLinksProps) {
  if (variant === 'card') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {BRAND.socialProfiles.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={profile.ariaLabel}
            className="inline-flex items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3.5 py-2 text-xs sm:text-sm font-medium text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514]/15 hover:text-white transition-colors"
          >
            <span className="text-[#D41514]">
              <SocialPlatformIcon id={profile.id} />
            </span>
            <span>{profile.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {BRAND.socialProfiles.map((profile) => (
        <a
          key={profile.id}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.ariaLabel}
          title={profile.label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303030] bg-[#141414] text-[#CDCBCA] hover:border-[#D41514] hover:bg-[#D41514]/15 hover:text-white transition-colors"
        >
          <SocialPlatformIcon id={profile.id} />
          <span className="sr-only">{profile.ariaLabel}</span>
        </a>
      ))}
    </div>
  );
}
