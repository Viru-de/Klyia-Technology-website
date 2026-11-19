import React from 'react';
import {Link} from '../../lib/router.tsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'outline-white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  nowrap?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    onNavigate?: () => void;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#D41514] text-white border border-[#D41514] hover:bg-[#E31E1D] hover:border-[#E31E1D] shadow-[0_8px_24px_-8px_rgba(212,21,20,0.5)]',
  secondary:
    'bg-[#1B1B1B] text-[#CDCBCA] border border-[#303030] hover:bg-[#242424] hover:border-[#CDCBCA]/40 hover:text-white',
  outline:
    'bg-transparent text-[#CDCBCA] border border-[#CDCBCA]/45 hover:border-[#D41514] hover:text-white hover:bg-[#141414]',
  white:
    'bg-[#FFFFFF] text-[#080808] border border-[#FFFFFF] hover:bg-[#CDCBCA] hover:border-[#CDCBCA] shadow-sm',
  'outline-white':
    'bg-transparent text-[#CDCBCA] border border-[#303030] hover:border-[#CDCBCA] hover:text-white hover:bg-[#1B1B1B]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[38px] px-4 py-2 text-xs',
  md: 'min-h-[44px] px-5 py-2.5 text-sm',
  lg: 'min-h-[48px] px-7 py-3.5 text-[15px]',
};

export function Button(props: ButtonProps) {
  const {variant = 'primary', size = 'md', nowrap = false, className = '', children, ...rest} = props;
  const classes = [
    'inline-flex max-w-full items-center justify-center gap-2 rounded-lg font-semibold leading-[1.35] text-center',
    nowrap ? 'whitespace-nowrap' : 'whitespace-normal',
    '[&_svg]:shrink-0 transition-all duration-150 ease-out cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D41514]',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(' ');

  if ('href' in props && typeof props.href === 'string') {
    const {href, onNavigate, ...linkRest} = rest as Omit<ButtonAsLink, keyof BaseProps>;
    return (
      <Link href={href} onNavigate={onNavigate} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
