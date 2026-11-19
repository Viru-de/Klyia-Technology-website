export interface QuotePrefillData {
  service?: string;
  industry?: string;
  city?: string;
}

const QUOTE_PREFILL_KEY = 'klyia_quote_prefill_v1';

export function saveQuotePrefill(data: QuotePrefillData): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.sessionStorage.setItem(QUOTE_PREFILL_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

export function consumeQuotePrefill(): QuotePrefillData | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.sessionStorage.getItem(QUOTE_PREFILL_KEY);
    if (!raw) {
      return null;
    }
    window.sessionStorage.removeItem(QUOTE_PREFILL_KEY);
    const parsed = JSON.parse(raw) as QuotePrefillData;
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch {
    return null;
  }
}
