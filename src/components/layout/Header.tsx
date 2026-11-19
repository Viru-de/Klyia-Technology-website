import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {HEADER_CTA} from '../../config/navigation.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Button} from '../ui/Button.tsx';
import {Container} from '../ui/Container.tsx';
import {Logo} from '../ui/Logo.tsx';
import {IndustriesMegaMenu} from './IndustriesMegaMenu.tsx';
import {MainNavigation, type ActiveMegaMenu} from './MainNavigation.tsx';
import {MobileNavigation} from './MobileNavigation.tsx';
import {ServicesMegaMenu} from './ServicesMegaMenu.tsx';

export function Header() {
  const [activeMenu, setActiveMenu] = useState<ActiveMegaMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current !== null && typeof window !== 'undefined') {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    if (typeof window !== 'undefined') {
      closeTimeoutRef.current = window.setTimeout(() => {
        setActiveMenu(null);
      }, 140);
    }
  }, [cancelClose]);

  const closeImmediate = useCallback(() => {
    cancelClose();
    setActiveMenu(null);
  }, [cancelClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeImmediate();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeImmediate();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
      cancelClose();
    };
  }, [cancelClose, closeImmediate]);

  return (
    <header
      ref={headerRef}
      onMouseLeave={scheduleClose}
      className="sticky top-0 z-[70] w-full bg-[#080808]/95 backdrop-blur-md border-b border-[#303030] shadow-[0_6px_28px_rgba(0,0,0,0.65)]"
    >
      <Container>
        <div className="flex h-16 lg:h-[72px] items-center justify-between gap-6">
          {/* Zone 1: Brand Logo */}
          <Link
            href={ROUTES.HOME}
            onNavigate={closeImmediate}
            aria-label="Klyia Technology Home"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#D41514] rounded-md"
          >
            <Logo size="md" theme="dark" />
          </Link>

          {/* Zone 2: Desktop Navigation */}
          <MainNavigation
            activeMenu={activeMenu}
            onOpenMenu={(menu) => {
              cancelClose();
              setActiveMenu(menu);
            }}
            onScheduleClose={scheduleClose}
            onCancelClose={cancelClose}
            onCloseImmediate={closeImmediate}
          />

          {/* Zone 3: Primary Crimson CTA + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:inline-flex shrink-0">
              <Button
                href={HEADER_CTA.href}
                variant="primary"
                size="sm"
                nowrap
                onNavigate={closeImmediate}
              >
                {HEADER_CTA.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => {
                closeImmediate();
                setMobileMenuOpen((prev) => !prev);
              }}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514]/70 hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Dark Mega Menus */}
      <div onMouseEnter={cancelClose}>
        <ServicesMegaMenu isOpen={activeMenu === 'services'} onClose={closeImmediate} />
        <IndustriesMegaMenu isOpen={activeMenu === 'industries'} onClose={closeImmediate} />
      </div>

      {/* Dark Mobile Navigation Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
