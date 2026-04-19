import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const TITLE = 'text-native models, file-native outputs.';

const FX_SEQUENCE = ['glitch', 'mosaic', 'tear', 'scan', 'chroma'] as const;
type FxMode = (typeof FX_SEQUENCE)[number] | 'none';

function readPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HeroAnimatedTitle({ className }: { className?: string }) {
  const [reduced, setReduced] = useState(readPrefersReducedMotion);
  const [mode, setMode] = useState<FxMode>(() => (readPrefersReducedMotion() ? 'none' : FX_SEQUENCE[0]));

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (reduced) {
      setMode('none');
      return;
    }
    setMode(FX_SEQUENCE[0]);
    let i = 0;
    const id = window.setInterval(() => {
      i = (i + 1) % FX_SEQUENCE.length;
      setMode(FX_SEQUENCE[i]);
    }, 4800);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <h1 className={cn('hero-headline', className)} data-fx={mode}>
      {TITLE}
    </h1>
  );
}
