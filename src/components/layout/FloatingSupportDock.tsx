import React, {useEffect, useState} from 'react';
import {MessageSquare, Phone} from 'lucide-react';
import {BRAND} from '../../config/brand.ts';
import {WhatsAppIcon} from '../ui/WhatsAppIcon.tsx';
import {WebsiteChatbox} from './WebsiteChatbox.tsx';

export const OPEN_CHATBOX_EVENT = 'klyia:open-chatbox';

export function FloatingSupportDock() {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setChatOpen(true);
    window.addEventListener(OPEN_CHATBOX_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CHATBOX_EVENT, handleOpen);
  }, []);

  return (
    <>
      {!chatOpen ? (
        <div
          aria-label="Quick Contact Actions"
          className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex items-center sm:flex-col sm:items-end gap-2 rounded-xl sm:rounded-none border border-[#303030] sm:border-0 bg-[#080808]/95 sm:bg-transparent p-1.5 sm:p-0 backdrop-blur-md sm:backdrop-blur-none shadow-[0_12px_30px_rgba(0,0,0,0.65)] sm:shadow-none"
        >
          <a
            href={BRAND.phoneHref}
            aria-label="Call Now on +91 8296887643"
            className="inline-flex h-10 sm:h-11 items-center gap-2 rounded-lg border border-[#303030] bg-[#141414] px-3 sm:px-3.5 text-xs font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white sm:shadow-[0_8px_22px_rgba(0,0,0,0.55)] transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#D41514] shrink-0" aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <a
            href={BRAND.whatsappPrefilledHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Klyia Technology"
            className="inline-flex h-10 sm:h-11 items-center gap-2 rounded-lg border border-[#25D366]/45 bg-[#141414] px-3 sm:px-3.5 text-xs font-semibold text-white hover:border-[#25D366] hover:bg-[#1B1B1B] sm:shadow-[0_8px_22px_rgba(0,0,0,0.55)] transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setChatOpen(true)}
            aria-label="Open Klyia Technology Chatbox"
            className="inline-flex h-10 sm:h-11 items-center gap-2 rounded-lg bg-[#D41514] px-3.5 sm:px-4 text-xs font-semibold text-white hover:bg-[#E31E1D] sm:shadow-[0_10px_26px_-6px_rgba(212,21,20,0.65)] transition-colors whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Enquiry Chat</span>
          </button>
        </div>
      ) : null}

      <WebsiteChatbox isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
