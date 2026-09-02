import { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  showLabel?: boolean;
}

export default function AdSenseBanner({
  slot = '4970893672',
  format = 'auto',
  responsive = true,
  className = 'my-8 flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-4',
  showLabel = true
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isLoaded = useRef<boolean>(false);

  useEffect(() => {
    // Avoid double push in React StrictMode
    if (isLoaded.current) return;

    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (err) {
      // Gracefully handle ad blocker or push failures
      console.warn('AdSense ad push notice:', err);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {showLabel && (
        <div className="w-full flex items-center justify-center gap-2 mb-2">
          <span className="text-[10px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase select-none">
            — ADVERTISEMENT —
          </span>
        </div>
      )}
      <div className="w-full min-h-[100px] flex items-center justify-center rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/40 dark:border-slate-800/40 py-2">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minWidth: '250px' }}
          data-ad-client="ca-pub-3244084350504443"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
}
