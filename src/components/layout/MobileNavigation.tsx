import React, {useEffect, useState} from 'react';
import {ChevronDown, MessageCircle, Phone, X} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';
import {
  HEADER_CTA,
  INDUSTRIES_MEGA_MENU,
  MAIN_NAVIGATION,
  SERVICES_MEGA_MENU,
} from '../../config/navigation.ts';
import {ROUTES, normalizePathname} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';
import {Logo} from '../ui/Logo.tsx';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({isOpen, onClose}: MobileNavigationProps) {
  const {pathname} = useRouter();
  const currentPath = normalizePathname(pathname);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Obsidian Drawer */}
      <div className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[#080808] border-l border-[#303030] shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030]">
          <Link href={ROUTES.HOME} onNavigate={onClose} aria-label="Klyia Technology Home">
            <Logo size="sm" theme="dark" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile Menu Links" className="flex-1 px-5 py-4 space-y-1">
          {MAIN_NAVIGATION.map((item) => {
            const isActive = currentPath === normalizePathname(item.href);

            if (item.hasMegaMenu === 'services') {
              return (
                <div key={item.label} className="border-b border-[#303030] pb-1">
                  <button
                    type="button"
                    aria-expanded={servicesExpanded}
                    onClick={() => setServicesExpanded((prev) => !prev)}
                    className="flex w-full min-h-[44px] items-center justify-between py-2.5 text-left text-[15px] font-semibold text-[#CDCBCA] hover:text-white cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-150 ${
                        servicesExpanded ? 'rotate-180 text-[#D41514]' : 'text-[#969696]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesExpanded ? (
                    <div className="pl-3 pb-3 space-y-4">
                      <Link
                        href={ROUTES.SERVICES}
                        onNavigate={onClose}
                        className="block text-sm font-semibold text-[#D41514]"
                      >
                        All Services Overview
                      </Link>
                      {SERVICES_MEGA_MENU.map((group) => (
                        <div key={group.heading} className="space-y-1.5">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#969696]">
                            {group.heading}
                          </p>
                          <ul className="space-y-1">
                            {group.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  onNavigate={onClose}
                                  className="block py-1.5 text-sm text-[#CDCBCA] hover:text-[#D41514]"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            if (item.hasMegaMenu === 'industries') {
              return (
                <div key={item.label} className="border-b border-[#303030] pb-1">
                  <button
                    type="button"
                    aria-expanded={industriesExpanded}
                    onClick={() => setIndustriesExpanded((prev) => !prev)}
                    className="flex w-full min-h-[44px] items-center justify-between py-2.5 text-left text-[15px] font-semibold text-[#CDCBCA] hover:text-white cursor-pointer"
                  >
                    <span>Industries</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-150 ${
                        industriesExpanded ? 'rotate-180 text-[#D41514]' : 'text-[#969696]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {industriesExpanded ? (
                    <div className="pl-3 pb-3 space-y-2">
                      <Link
                        href={ROUTES.INDUSTRIES}
                        onNavigate={onClose}
                        className="block py-1 text-sm font-semibold text-[#D41514]"
                      >
                        All Industries Overview
                      </Link>
                      {INDUSTRIES_MEGA_MENU.map((industry) => (
                        <Link
                          key={industry.title}
                          href={industry.href}
                          onNavigate={onClose}
                          className="block py-1.5 text-sm text-[#CDCBCA] hover:text-[#D41514]"
                        >
                          {industry.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onNavigate={onClose}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[44px] items-center py-2.5 border-b border-[#303030] text-[15px] ${
                  isActive ? 'font-semibold text-[#D41514]' : 'font-medium text-[#CDCBCA] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={ROUTES.LOCATIONS}
            onNavigate={onClose}
            aria-current={currentPath === ROUTES.LOCATIONS ? 'page' : undefined}
            className={`flex min-h-[44px] items-center py-2.5 border-b border-[#303030] text-[15px] ${
              currentPath === ROUTES.LOCATIONS ? 'font-semibold text-[#D41514]' : 'font-medium text-[#CDCBCA] hover:text-white'
            }`}
          >
            Locations Served
          </Link>
          <Link
            href={ROUTES.SITEMAP}
            onNavigate={onClose}
            aria-current={currentPath === ROUTES.SITEMAP ? 'page' : undefined}
            className={`flex min-h-[44px] items-center py-2.5 border-b border-[#303030] text-[15px] ${
              currentPath === ROUTES.SITEMAP ? 'font-semibold text-[#D41514]' : 'font-medium text-[#CDCBCA] hover:text-white'
            }`}
          >
            HTML Sitemap
          </Link>
        </nav>

        <div className="border-t border-[#303030] bg-[#141414] p-5 space-y-3">
          <Link
            href={HEADER_CTA.href}
            onNavigate={onClose}
            className="flex w-full min-h-[44px] items-center justify-center rounded-lg bg-[#D41514] px-4 py-3 text-sm font-semibold text-white hover:bg-[#E31E1D] transition-colors"
          >
            {HEADER_CTA.label}
          </Link>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={BRAND.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-3 py-2.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BRAND.phoneHref}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-3 py-2.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
              <span>Call Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
