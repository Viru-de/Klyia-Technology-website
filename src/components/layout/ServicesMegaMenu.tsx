import React from 'react';
import {ArrowRight} from 'lucide-react';
import {SERVICES_MEGA_MENU} from '../../config/navigation.ts';
import {ROUTES, normalizePathname} from '../../config/routes.ts';
import {Link, useRouter} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({isOpen, onClose}: ServicesMegaMenuProps) {
  const {pathname} = useRouter();
  const currentPath = normalizePathname(pathname);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="services-mega-menu"
      role="region"
      aria-label="Services Menu"
      className="absolute left-0 right-0 top-full z-[80] max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-[#303030] bg-[#0D0D0D] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.92)]"
    >
      <Container className="py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES_MEGA_MENU.map((column) => (
            <div
              key={column.heading}
              className="rounded-xl border border-[#303030] bg-[#141414] p-4 space-y-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
            >
              <Link
                href={column.href}
                onNavigate={onClose}
                className="text-xs font-bold uppercase tracking-[0.08em] text-[#CDCBCA] hover:text-white pb-2.5 border-b border-[#303030] flex items-center gap-2 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-xs bg-[#D41514]" aria-hidden="true" />
                <span>{column.heading}</span>
              </Link>
              <ul className="space-y-1 bg-[#141414]">
                {column.items.map((item) => {
                  const isItemActive = currentPath === normalizePathname(item.href);

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onNavigate={onClose}
                        aria-current={isItemActive ? 'page' : undefined}
                        className={`group flex items-center justify-between rounded-md px-2.5 py-1.5 text-[13px] transition-colors duration-150 ${
                          isItemActive
                            ? 'bg-[#2A1010] border-l-2 border-[#D41514] text-white font-semibold'
                            : 'bg-[#141414] text-[#CDCBCA] font-medium hover:bg-[#222222] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 text-[#D41514] transition-all duration-150 shrink-0 ${
                            isItemActive
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-[#303030] flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-[#969696]">
            Need an integrated software, ERP, and digital growth roadmap tailored to your operations?
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              href={ROUTES.SERVICES}
              onNavigate={onClose}
              className="text-sm font-semibold text-[#CDCBCA] hover:text-white bg-[#141414] hover:bg-[#1B1B1B] border border-[#303030] rounded-lg px-3.5 py-2 inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
            </Link>
            <Link
              href={ROUTES.GET_A_QUOTE}
              onNavigate={onClose}
              className="rounded-lg bg-[#D41514] px-4 py-2 text-xs font-semibold text-white hover:bg-[#E31E1D] transition-colors whitespace-nowrap"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
