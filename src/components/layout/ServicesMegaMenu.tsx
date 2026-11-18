import React from 'react';
import {ArrowRight} from 'lucide-react';
import {SERVICES_MEGA_MENU} from '../../config/navigation.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({isOpen, onClose}: ServicesMegaMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="services-mega-menu"
      role="region"
      aria-label="Services Menu"
      className="absolute left-0 right-0 top-full z-50 border-b border-[#303030] bg-[#0D0D0D]/98 backdrop-blur-lg shadow-[0_24px_60px_-16px_rgba(0,0,0,0.85)]"
    >
      <Container className="py-7">
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          {SERVICES_MEGA_MENU.map((column) => (
            <div key={column.heading} className="space-y-2.5">
              <Link
                href={column.href}
                onNavigate={onClose}
                className="text-xs font-bold uppercase tracking-[0.08em] text-[#CDCBCA] hover:text-[#D41514] pb-2 border-b border-[#303030] flex items-center gap-2 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-xs bg-[#D41514]" aria-hidden="true" />
                <span>{column.heading}</span>
              </Link>
              <ul className="space-y-1">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onNavigate={onClose}
                      className="group flex items-center justify-between rounded-md px-2 py-1 -mx-2 text-[13px] font-medium text-[#969696] transition-colors duration-150 hover:bg-[#1B1B1B] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 text-[#D41514]"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-7 pt-5 border-t border-[#303030] flex items-center justify-between gap-6">
          <p className="text-sm text-[#969696]">
            Need an integrated software, ERP, and digital growth roadmap tailored to your operations?
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <Link
              href={ROUTES.SERVICES}
              onNavigate={onClose}
              className="text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
