import React, {useState} from 'react';
import {Building2} from 'lucide-react';

interface MediaFrameProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  fallbackLabel?: string;
  lazy?: boolean;
  className?: string;
  imgClassName?: string;
}

export function MediaFrame({
  src,
  webpSrc,
  alt,
  width,
  height,
  fallbackLabel,
  lazy = true,
  className = '',
  imgClassName = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] to-[#1B1B1B] text-[#D41514] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 mb-2 opacity-85" aria-hidden="true" />
        <span className="text-sm font-semibold text-[#CDCBCA]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  const imgElement = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding={lazy ? 'async' : 'sync'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`block ${imgClassName} ${className}`}
    />
  );

  if (webpSrc) {
    return (
      <picture className="contents">
        <source srcSet={webpSrc} type="image/webp" />
        {imgElement}
      </picture>
    );
  }

  return imgElement;
}
