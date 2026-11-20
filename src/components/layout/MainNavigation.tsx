import React from 'react';
import {ChevronDown} from 'lucide-react';
import {MAIN_NAVIGATION} from '../../config/navigation.ts';
import {normalizePathname} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';

export type ActiveMegaMenu = 'erp' | 'services' | 'industries' | null;

interface MainNavigationProps {
  activeMenu: ActiveMegaMenu;
  onOpenMenu: (menu: ActiveMegaMenu) => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
  onCloseImmediate: () => void;
}

export function MainNavigation({
  activeMenu,
  onOpenMenu,
  onScheduleClose,
  onCancelClose,
  onCloseImmediate,
}: MainNavigationProps) {
  const {pathname} = useRouter();
  const currentPath = normalizePathname(pathname);

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
      {MAIN_NAVIGATION.map((item) => {
        const normalizedHref = normalizePathname(item.href);
        const isErpRoute =
          item.hasMegaMenu === 'erp' &&
          (currentPath === normalizedHref || currentPath.startsWith('/erp/'));
        const isActive = currentPath === normalizedHref || isErpRoute;

        if (item.hasMegaMenu) {
          const menuKey = item.hasMegaMenu;
          const isMenuOpen = activeMenu === menuKey;
          const menuId =
            menuKey === 'erp'
              ? 'erp-mega-menu'
              : menuKey === 'services'
                ? 'services-mega-menu'
                : 'industries-mega-menu';

          return (
            <div
              key={item.label}
              className="relative flex items-center"
              onMouseEnter={() => {
                onCancelClose();
                onOpenMenu(menuKey);
              }}
              onMouseLeave={onScheduleClose}
            >
              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => onOpenMenu(isMenuOpen ? null : menuKey)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    onCloseImmediate();
                  } else if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    onOpenMenu(menuKey);
                  }
                }}
                className={`relative inline-flex items-center gap-1 py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                  isActive || isMenuOpen
                    ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D41514] after:shadow-[0_0_8px_rgba(212,21,20,0.6)]'
                    : 'text-[#CDCBCA] hover:text-white hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-[#D41514]/70'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-150 ${
                    isMenuOpen ? 'rotate-180 text-[#D41514]' : 'text-[#969696]'
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            onNavigate={onCloseImmediate}
            aria-current={isActive ? 'page' : undefined}
            className={`relative py-2 text-[13px] xl:text-sm whitespace-nowrap shrink-0 transition-colors duration-150 ${
              isActive
                ? 'font-semibold text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D41514] after:shadow-[0_0_8px_rgba(212,21,20,0.6)]'
                : 'font-medium text-[#CDCBCA] hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D41514]/70 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 after:origin-left'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
