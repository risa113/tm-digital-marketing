import React, { useEffect } from 'react';

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function AdSenseBanner({
  slot = '4970893672',
  format = 'auto',
  responsive = true,
  className = 'my-8 flex justify-center text-center w-full max-w-7xl mx-auto px-4'
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      // Push AdSense ad unit initialization safely
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense initialization error:', err);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minWidth: '250px' }}
        data-ad-client="ca-pub-3244084350504443"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
