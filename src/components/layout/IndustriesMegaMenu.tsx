import React from 'react';
import {ArrowRight} from 'lucide-react';
import {INDUSTRIES_MEGA_MENU} from '../../config/navigation.ts';
import {ROUTES, normalizePathname} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IndustriesMegaMenu({isOpen, onClose}: IndustriesMegaMenuProps) {
  const {pathname} = useRouter();
  const currentPath = normalizePathname(pathname);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="industries-mega-menu"
      role="region"
      aria-label="Industries Menu"
      className="absolute left-0 right-0 top-full z-[80] max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-[#303030] bg-[#0D0D0D] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.92)]"
    >
      <Container className="py-8">
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#303030]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#D41514]">
              Domain-Focused Solutions
            </p>
            <p className="text-sm text-[#CDCBCA] mt-0.5">
              Software, ERP, and search growth frameworks built for real operational sectors.
            </p>
          </div>
          <Link
            href={ROUTES.INDUSTRIES}
            onNavigate={onClose}
            className="text-sm font-semibold text-[#CDCBCA] hover:text-white bg-[#141414] hover:bg-[#1B1B1B] border border-[#303030] rounded-lg px-3.5 py-2 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Explore All Industries</span>
            <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          {INDUSTRIES_MEGA_MENU.map((industry) => {
            const isItemActive = currentPath === normalizePathname(industry.href);

            return (
              <Link
                key={industry.title}
                href={industry.href}
                onNavigate={onClose}
                aria-current={isItemActive ? 'page' : undefined}
                className={`group rounded-lg border p-3.5 transition-all duration-150 ${
                  isItemActive
                    ? 'border-[#D41514] bg-[#2A1010] text-white'
                    : 'border-[#303030] bg-[#141414] hover:border-[#D41514]/70 hover:bg-[#222222]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      isItemActive ? 'text-white' : 'text-[#CDCBCA] group-hover:text-white'
                    }`}
                  >
                    {industry.title}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 text-[#D41514] transition-opacity shrink-0 ${
                      isItemActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#969696]">
                  {industry.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
