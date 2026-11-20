import React from 'react';
import {ArrowRight, Layers3} from 'lucide-react';
import {ERP_MEGA_MENU_CTA, ERP_MEGA_MENU_GROUPS} from '../../config/navigation.ts';
import {ROUTES} from '../../config/routes.ts';
import {Link} from '../../lib/router.tsx';
import {Container} from '../ui/Container.tsx';

interface ErpMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ErpMegaMenu({isOpen, onClose}: ErpMegaMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="erp-mega-menu"
      role="region"
      aria-label="ERP and Software Solutions Menu"
      className="absolute left-0 right-0 top-full z-50 border-b border-[#303030] bg-[#0D0D0D]/98 backdrop-blur-lg shadow-[0_24px_60px_-16px_rgba(0,0,0,0.85)]"
    >
      <Container className="py-7">
        <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#303030]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#303030] bg-[#141414] text-[#D41514]">
              <Layers3 className="w-4 h-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#D41514]">
                Custom ERP Software &amp; Business Automation
              </p>
              <p className="text-sm text-[#969696] mt-0.5">
                Software engineered around each business’s actual workflow across 11 industry-specific ERP suites.
              </p>
            </div>
          </div>
          <Link
            href={ERP_MEGA_MENU_CTA.href}
            onNavigate={onClose}
            className="text-sm font-semibold text-[#CDCBCA] hover:text-[#D41514] inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors"
          >
            <span>{ERP_MEGA_MENU_CTA.label}</span>
            <ArrowRight className="w-4 h-4 text-[#D41514]" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          {ERP_MEGA_MENU_GROUPS.map((group) => (
            <div key={group.heading} className="space-y-2.5">
              <Link
                href={group.href}
                onNavigate={onClose}
                className="text-xs font-bold uppercase tracking-[0.08em] text-[#CDCBCA] hover:text-[#D41514] pb-2 border-b border-[#303030] flex items-center gap-2 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-xs bg-[#D41514]" aria-hidden="true" />
                <span>{group.heading}</span>
              </Link>
              <ul className="space-y-1">
                {group.items.map((item) => (
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
            Modular standalone rollout or unified multi-branch ERP — consult with Klyia ERP architects before scoping.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href={ERP_MEGA_MENU_CTA.href}
              onNavigate={onClose}
              className="rounded-lg border border-[#303030] bg-[#141414] px-4 py-2 text-xs font-semibold text-white hover:border-[#D41514] transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
            >
              <span>{ERP_MEGA_MENU_CTA.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
            </Link>
            <Link
              href={`${ROUTES.ERP_HUB}#erp-consultation-form`}
              onNavigate={onClose}
              className="rounded-lg bg-[#D41514] px-4 py-2 text-xs font-semibold text-white hover:bg-[#E31E1D] transition-colors whitespace-nowrap shrink-0"
            >
              Request Free ERP Consultation
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
