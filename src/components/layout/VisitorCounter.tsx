import React, {useEffect, useRef, useState} from 'react';

let hasTrackedThisPageLoad = false;

function formatDigitalCounter(count: number): string {
  const safe = Math.max(0, Math.floor(count));
  const padded = String(safe).padStart(6, '0');
  return padded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function VisitorCounter() {
  const [targetCount, setTargetCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [hasError, setHasError] = useState(false);
  const animatedOnceRef = useRef(false);

  useEffect(() => {
    let active = true;

    async function syncVisitorCount() {
      const todayKey = new Date().toISOString().slice(0, 10);
      let alreadyRecordedSession = false;

      try {
        alreadyRecordedSession =
          window.sessionStorage.getItem('klyia_visit_recorded') === todayKey;
      } catch {
        alreadyRecordedSession = false;
      }

      try {
        if (!hasTrackedThisPageLoad && !alreadyRecordedSession) {
          hasTrackedThisPageLoad = true;
          const res = await fetch('/api/visitors/track', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
          });
          if (!res.ok) {
            throw new Error('Failed to record visit');
          }
          const data = (await res.json()) as {ok?: boolean; totalVisitors?: number};
          if (active && typeof data.totalVisitors === 'number') {
            setTargetCount(data.totalVisitors);
            try {
              window.sessionStorage.setItem('klyia_visit_recorded', todayKey);
            } catch {
              // ignore storage restriction
            }
            return;
          }
        }

        const readRes = await fetch('/api/visitors', {
          method: 'GET',
          credentials: 'same-origin',
        });
        if (!readRes.ok) {
          throw new Error('Failed to load visitor count');
        }
        const readData = (await readRes.json()) as {ok?: boolean; totalVisitors?: number};
        if (active && typeof readData.totalVisitors === 'number') {
          setTargetCount(readData.totalVisitors);
        }
      } catch {
        if (active) {
          setHasError(true);
        }
      }
    }

    syncVisitorCount();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (targetCount === null) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || animatedOnceRef.current || targetCount === 0) {
      setDisplayCount(targetCount);
      animatedOnceRef.current = true;
      return;
    }

    animatedOnceRef.current = true;
    const durationMs = 650;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.round(targetCount * eased));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setDisplayCount(targetCount);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [targetCount]);

  const formattedDigits =
    targetCount === null && !hasError ? '------' : formatDigitalCounter(displayCount);

  return (
    <div
      className="rounded-xl border border-[#303030] bg-[#111111] px-5 py-5 sm:px-7 sm:py-6"
      aria-label="Live Website Visitor Counter"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D41514]">
            Visitors
          </p>
          <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-[#CDCBCA]">
            Growing Together, One Visit at a Time.
          </p>
          <p className="text-xs sm:text-sm text-[#969696]">
            Thank you for visiting Klyia Technology.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#969696]">
            Website Visitors · Total Visitors
          </span>

          <div className="inline-flex items-center gap-3 rounded-lg border border-[#303030] bg-[#080808] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span
              className="h-2 w-2 rounded-xs bg-[#D41514] shadow-[0_0_8px_rgba(212,21,20,0.7)]"
              aria-hidden="true"
            />
            <span
              className="font-[family-name:var(--font-mono)] text-xl sm:text-2xl font-semibold tracking-[0.14em] text-[#CDCBCA] tabular-nums"
              aria-hidden="true"
            >
              {hasError ? 'Unavailable' : formattedDigits}
            </span>
            <span className="sr-only">
              {hasError
                ? 'Visitor count temporarily unavailable.'
                : targetCount === null
                  ? 'Loading total website visitors.'
                  : `${targetCount.toLocaleString('en-US')} total website visitors.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
