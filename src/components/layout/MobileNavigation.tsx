import React, {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {ChevronDown, Phone, X} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';
import {
  HEADER_CTA,
  INDUSTRIES_MEGA_MENU,
  MAIN_NAVIGATION,
  SERVICES_MEGA_MENU,
} from '../../config/navigation.ts';
import {ROUTES, normalizePathname} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';
import {WhatsAppIcon} from '../ui/WhatsAppIcon.tsx';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({isOpen, onClose}: MobileNavigationProps) {
  const {pathname} = useRouter();
  const currentPath = normalizePathname(pathname);
  const prevPathRef = useRef(currentPath);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Coordinate lightweight mount/unmount transitions cleanly
  useEffect(() => {
    if (!mounted) {
      return;
    }
    if (isOpen) {
      setRendered(true);
      const frame = window.requestAnimationFrame(() => {
        setAnimateIn(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    setAnimateIn(false);
    const timer = window.setTimeout(() => {
      setRendered(false);
    }, 200);
    return () => window.clearTimeout(timer);
  }, [isOpen, mounted]);

  // Close drawer automatically on route changes (e.g., browser Back/Forward)
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      if (isOpen) {
        onClose();
      }
    }
  }, [currentPath, isOpen, onClose]);

  // Lock background scroll, bind Escape, and close automatically on desktop breakpoint
  useEffect(() => {
    if (!isOpen || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const desktopMq = window.matchMedia('(min-width: 1024px)');
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) {
        onClose();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    desktopMq.addEventListener('change', handleBreakpoint);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopMq.removeEventListener('change', handleBreakpoint);
    };
  }, [isOpen, onClose]);

  if (!mounted || !rendered || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      id="mobile-navigation-drawer"
      className="fixed inset-x-0 top-16 bottom-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop — covers page content and z-40 floating support dock cleanly */}
      <div
        className={`absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-200 ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Obsidian Slide-Over Drawer */}
      <div
        className={`relative ml-auto flex h-full w-[88vw] max-w-sm flex-col bg-[#080808] border-l border-[#303030] shadow-2xl overflow-y-auto overscroll-contain transition-transform duration-200 ease-out ${
          animateIn ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#303030] bg-[#111111]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#969696]">
            Navigation Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303030] bg-[#080808] text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
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
              href={BRAND.whatsappPrefilledHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-3 py-2.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a
              href={BRAND.phoneHref}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#303030] bg-[#111111] px-3 py-2.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
