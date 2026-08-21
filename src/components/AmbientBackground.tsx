import React, { memo } from 'react';

const AmbientBackground = memo(function AmbientBackground() {
  return (
    <div 
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* GPU Accelerated Glow Orb 1 (Top-Left Electric Blue) */}
      <div 
        className="ambient-orb ambient-orb-1"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(56,189,248,0.12) 45%, transparent 70%)',
          width: '550px',
          height: '550px',
          top: '-150px',
          left: '-150px',
        }}
      />

      {/* GPU Accelerated Glow Orb 2 (Middle-Right Purple & Indigo Neon) */}
      <div 
        className="ambient-orb ambient-orb-2"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.1) 45%, transparent 70%)',
          width: '580px',
          height: '580px',
          top: '20%',
          right: '-150px',
        }}
      />

      {/* GPU Accelerated Glow Orb 3 (Center-Bottom Cyan Laser Pulse) */}
      <div 
        className="ambient-orb ambient-orb-3"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(37,99,235,0.08) 50%, transparent 70%)',
          width: '500px',
          height: '500px',
          bottom: '20%',
          left: '20%',
        }}
      />

      {/* Rotating Cybernetic Cosmic Ring (Desktop Only) */}
      <div 
        className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/8 dark:border-blue-400/8 pointer-events-none"
        style={{ animation: 'spin 60s linear infinite' }}
      />
      <div 
        className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-cyan-500/10 dark:border-cyan-400/10 pointer-events-none"
        style={{ animation: 'spin 40s linear infinite reverse' }}
      />

      {/* Lightweight Floating Ambient Stardust (Desktop Only) */}
      <div className="hidden md:block ambient-star star-1" style={{ top: '15%', left: '25%' }} />
      <div className="hidden md:block ambient-star star-2" style={{ top: '35%', left: '75%' }} />
      <div className="hidden md:block ambient-star star-3" style={{ top: '65%', left: '15%' }} />
      <div className="hidden md:block ambient-star star-4" style={{ top: '80%', left: '60%' }} />

      {/* Perspective Grid with Cyber Radial Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60d_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60d_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,#000_70%,transparent_100%)] opacity-80" />
    </div>
  );
});

export default AmbientBackground;
