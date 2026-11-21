import React, {useEffect, useRef, useState} from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react';
import {BRAND, buildWhatsAppHref} from '../../config/brand.ts';
import {useRouter} from '../../lib/router.tsx';
import {WhatsAppIcon} from '../ui/WhatsAppIcon.tsx';

interface ChatMessageItem {
  id: number | string;
  sender: 'visitor' | 'system';
  message: string;
  emailStatus: 'sending' | 'sent' | 'failed' | 'pending';
  createdAt: string;
}

interface StoredChatSession {
  sessionId: string;
  sessionToken: string;
  referenceId: string;
  name: string;
  company?: string;
  service?: string;
  initialRequirement?: string;
  emailNotice: string;
}

interface WebsiteChatboxProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAT_STORAGE_KEY = 'klyia_website_chat_session_v1';

function isValidIndianOrIntlPhone(raw: string): boolean {
  const trimmed = raw.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^0[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^91[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (/^0091[6-9]\d{9}$/.test(digits)) {
    return true;
  }
  if (trimmed.startsWith('+')) {
    if (digits.startsWith('91')) {
      return /^91[6-9]\d{9}$/.test(digits);
    }
    return digits.length >= 10 && digits.length <= 15 && !/^(\d)\1{6,}$/.test(digits);
  }
  return false;
}

export function WebsiteChatbox({isOpen, onClose}: WebsiteChatboxProps) {
  const {pathname} = useRouter();
  const [step, setStep] = useState<'form' | 'chat'>('form');

  // Step 1 Visitor Information Fields (Strictly Full Name + Phone Number)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [startingChat, setStartingChat] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Step 2 Active Conversation State
  const [activeSession, setActiveSession] = useState<StoredChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [draftMessage, setDraftMessage] = useState('');
  const [sendingMsg, setSendingMsg] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);

  const messageEndRef = useRef<HTMLDivElement | null>(null);

  // Restore saved active session for current browser tab if available
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const raw = window.sessionStorage.getItem(CHAT_STORAGE_KEY);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw) as StoredChatSession;
      if (!parsed?.sessionId || !parsed?.sessionToken) {
        return;
      }

      void fetch('/api/chat/session', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          sessionId: parsed.sessionId,
          sessionToken: parsed.sessionToken,
        }),
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data: {ok?: boolean; messages?: ChatMessageItem[]} | null) => {
          if (data?.ok && Array.isArray(data.messages)) {
            setActiveSession(parsed);
            setMessages(data.messages);
            setStep('chat');
          } else {
            window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
          }
        })
        .catch(() => {
          // Ignore network error during background restore
        });
    } catch {
      // Ignore parse errors
    }
  }, []);

  useEffect(() => {
    if (isOpen && step === 'chat') {
      messageEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }
  }, [isOpen, step, messages.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const whatsappUrl = buildWhatsAppHref(
    activeSession
      ? `Hello Klyia Technology, my name is ${activeSession.name}. I started enquiry ${activeSession.referenceId} on your website and would like to discuss my requirements.`
      : name.trim()
        ? `Hello Klyia Technology, my name is ${name.trim()} and I would like to discuss my project requirements.`
        : undefined,
  );

  const handleStartChat = async (event: React.FormEvent) => {
    event.preventDefault();
    if (startingChat) {
      return;
    }
    setFormError(null);

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!isValidIndianOrIntlPhone(trimmedPhone)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setStartingChat(true);
    try {
      const response = await fetch('/api/chat/start', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          sourcePage: pathname || '/',
          website_url: websiteUrl,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        sessionId?: string;
        sessionToken?: string;
        referenceId?: string;
        emailNotice?: string;
        messages?: ChatMessageItem[];
        error?: string;
      };

      if (!response.ok || !payload.ok || !payload.sessionId || !payload.sessionToken) {
        setFormError(
          payload.error || 'Could not start enquiry chat. Please contact us via WhatsApp or Call Now.',
        );
        return;
      }

      const nextSession: StoredChatSession = {
        sessionId: payload.sessionId,
        sessionToken: payload.sessionToken,
        referenceId: payload.referenceId || 'KLY-CHAT',
        name: trimmedName,
        emailNotice:
          payload.emailNotice ||
          'Enquiry received. Our team will reach out to you shortly.',
      };

      setActiveSession(nextSession);
      setMessages(payload.messages || []);
      setStep('chat');

      try {
        window.sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(nextSession));
      } catch {
        // Ignore storage failure
      }
    } catch {
      setFormError('Network error while starting chat. Please tap WhatsApp or Call Now.');
    } finally {
      setStartingChat(false);
    }
  };

  const handleSendMessage = async (event?: React.FormEvent, retryText?: string) => {
    event?.preventDefault();
    if (!activeSession || sendingMsg) {
      return;
    }

    const content = (retryText ?? draftMessage).trim();
    if (content.length < 2) {
      setChatError('Please write a message before sending.');
      return;
    }

    setChatError(null);
    if (!retryText) {
      setDraftMessage('');
    }
    setSendingMsg(true);

    const tempId = `temp-${Date.now()}`;
    const pendingItem: ChatMessageItem = {
      id: tempId,
      sender: 'visitor',
      message: content,
      emailStatus: 'sending',
      createdAt: new Date().toISOString(),
    };

    if (!retryText) {
      setMessages((prev) => [...prev, pendingItem]);
    }

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          sessionId: activeSession.sessionId,
          sessionToken: activeSession.sessionToken,
          message: content,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        saved?: boolean;
        emailDelivered?: boolean;
        message?: ChatMessageItem;
        statusMessage?: string;
        error?: string;
      };

      if (!response.ok || !payload.ok || payload.saved === false) {
        setMessages((prev) =>
          prev.map((m) => (m.id === tempId ? {...m, emailStatus: 'failed'} : m)),
        );
        setChatError(
          payload.error || 'Your enquiry could not be submitted. Please try again or contact us directly.',
        );
        return;
      }

      if (payload.message) {
        setMessages((prev) =>
          prev.map((m) => (m.id === tempId ? payload.message! : m)),
        );
      }
      if (!payload.emailDelivered) {
        setChatError(
          payload.statusMessage ||
            'Your enquiry has been received, but email notification is temporarily delayed. Our team will still be able to access your enquiry.',
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) => (m.id === tempId ? {...m, emailStatus: 'failed'} : m)),
      );
      setChatError('Your enquiry could not be submitted. Please try again or contact us directly.');
    } finally {
      setSendingMsg(false);
    }
  };

  const handleResetChat = () => {
    try {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } catch {
      // Ignore
    }
    setActiveSession(null);
    setMessages([]);
    setChatError(null);
    setFormError(null);
    setStep('form');
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Klyia Technology Enquiry Chat"
      className="fixed bottom-4 right-4 left-4 sm:left-auto z-[80] flex flex-col w-auto sm:w-[400px] max-h-[calc(100vh-2rem)] rounded-2xl border border-[#303030] bg-[#080808] shadow-[0_24px_60px_rgba(0,0,0,0.88)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 bg-[#141414] px-4 py-3.5 border-b border-[#303030]">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D41514] text-white">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white truncate">Klyia Technology Support</p>
            <p className="text-[11px] text-[#969696] truncate">
              {step === 'chat'
                ? 'Enquiry Chat · Awaiting team reply'
                : 'Direct Business Enquiry Desk'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {step === 'chat' ? (
            <button
              type="button"
              onClick={handleResetChat}
              title="Start new enquiry"
              aria-label="Start a new enquiry"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat window"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#303030] bg-[#111111] text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {step === 'form' ? (
        /* Step 1: Simplified Visitor Details Gate (Full Name + Phone Number ONLY) */
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          <div className="rounded-xl border border-[#303030] bg-[#141414] p-3.5 space-y-1">
            <p className="text-xs font-bold text-white">
              Welcome to Klyia Technology!
            </p>
            <p className="text-xs leading-relaxed text-[#CDCBCA]">
              Enter your name and phone number to start an enquiry chat with our team.
            </p>
          </div>

          {formError ? (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-3 py-2 text-xs font-medium text-white"
            >
              <AlertCircle className="w-4 h-4 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{formError}</span>
            </div>
          ) : null}

          <form onSubmit={handleStartChat} className="space-y-3.5" noValidate>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="chat-honeypot">Leave blank</label>
              <input
                id="chat-honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="chat-name" className="block text-xs font-semibold text-[#CDCBCA] mb-1.5">
                Full Name *
              </label>
              <input
                id="chat-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formError) setFormError(null);
                }}
                placeholder="Enter your full name"
                className="w-full h-10 rounded-lg border border-[#303030] bg-[#111111] px-3 text-xs text-white placeholder:text-[#969696]/70 focus:border-[#D41514] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="chat-phone" className="block text-xs font-semibold text-[#CDCBCA] mb-1.5">
                Phone Number *
              </label>
              <input
                id="chat-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (formError) setFormError(null);
                }}
                placeholder="Enter your mobile number"
                className="w-full h-10 rounded-lg border border-[#303030] bg-[#111111] px-3 text-xs text-white placeholder:text-[#969696]/70 focus:border-[#D41514] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={startingChat}
              className="flex w-full h-10 items-center justify-center gap-2 rounded-lg bg-[#D41514] px-4 text-xs font-semibold text-white hover:bg-[#E31E1D] disabled:opacity-60 transition-colors cursor-pointer"
            >
              <span>{startingChat ? 'Starting Chat...' : 'Start Enquiry Chat'}</span>
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : (
        /* Step 2: Conversation View (Strictly gated behind Step 1) */
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#080808] max-h-[340px]">
            {/* Personalized Welcome & Honest Status Notice */}
            <div className="rounded-xl border border-[#303030] bg-[#141414] p-3.5 space-y-2">
              <p className="text-xs font-bold text-white">
                Hello {activeSession?.name}, thank you for reaching out to Klyia Technology.
              </p>
              <p className="text-[11px] text-[#CDCBCA] leading-relaxed">
                {activeSession?.service ? (
                  <>
                    <strong className="text-white">Service:</strong> {activeSession.service}
                    <br />
                  </>
                ) : null}
                <strong className="text-white">Ref ID:</strong>{' '}
                <span className="font-[family-name:var(--font-mono)]">{activeSession?.referenceId}</span>
              </p>
              <div className="flex items-start gap-2 rounded-lg border border-[#303030] bg-[#080808] px-2.5 py-2 text-[11px] text-[#CDCBCA]">
                <Clock className="w-3.5 h-3.5 text-[#D41514] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{activeSession?.emailNotice}</span>
              </div>
              {messages.length === 0 ? (
                <p className="text-[11px] text-[#969696]">
                  Ask a question or share your requirements below to start chatting.
                </p>
              ) : null}
            </div>

            {/* Messages Thread */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex flex-col items-end space-y-1"
              >
                <div className="max-w-[88%] rounded-xl rounded-br-xs border border-[#D41514]/40 bg-[#1B1B1B] px-3.5 py-2.5 text-xs leading-relaxed text-white">
                  {msg.message}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#969696]">
                  {msg.emailStatus === 'sending' ? (
                    <span>Sending enquiry...</span>
                  ) : msg.emailStatus === 'sent' ? (
                    <span className="inline-flex items-center gap-1 text-[#CDCBCA]">
                      <CheckCircle2 className="w-3 h-3 text-[#25D366]" aria-hidden="true" />
                      <span>Received &amp; delivered</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[#CDCBCA]">
                      <ShieldCheck className="w-3 h-3 text-[#D41514]" aria-hidden="true" />
                      <span>Saved — notification delayed</span>
                      <button
                        type="button"
                        onClick={() => void handleSendMessage(undefined, msg.message)}
                        className="underline text-white hover:text-[#D41514] cursor-pointer"
                      >
                        Retry
                      </button>
                    </span>
                  )}
                </div>
              </div>
            ))}

            {chatError ? (
              <div
                role="alert"
                className="rounded-lg border border-[#D41514]/60 bg-[#D41514]/15 px-3 py-2 text-[11px] text-white"
              >
                {chatError}
              </div>
            ) : null}

            <div ref={messageEndRef} />
          </div>

          <form
            onSubmit={(e) => void handleSendMessage(e)}
            className="border-t border-[#303030] bg-[#141414] p-3 flex items-center gap-2"
          >
            <label htmlFor="chat-reply-input" className="sr-only">
              Write a message to Klyia Technology
            </label>
            <input
              id="chat-reply-input"
              type="text"
              value={draftMessage}
              onChange={(e) => setDraftMessage(e.target.value)}
              placeholder="Add more details or send a message..."
              className="flex-1 rounded-lg border border-[#303030] bg-[#080808] px-3 py-2 text-xs text-white placeholder:text-[#969696]/70 focus:border-[#D41514] focus:outline-none"
            />
            <button
              type="submit"
              disabled={sendingMsg || draftMessage.trim().length < 2}
              aria-label="Send message"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D41514] text-white hover:bg-[#E31E1D] disabled:opacity-50 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </>
      )}

      {/* Persistent Direct Human Escalation Footer (WhatsApp + Call Now) */}
      <div className="border-t border-[#303030] bg-[#111111] px-3.5 py-2.5 grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#303030] bg-[#141414] px-2.5 text-[11px] font-semibold text-[#CDCBCA] hover:border-[#25D366] hover:text-white transition-colors whitespace-nowrap"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
          <span>WhatsApp Chat</span>
        </a>
        <a
          href={BRAND.phoneHref}
          className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[#303030] bg-[#141414] px-2.5 text-[11px] font-semibold text-[#CDCBCA] hover:border-[#D41514] hover:text-white transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#D41514]" aria-hidden="true" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
