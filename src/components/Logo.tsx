import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', showTagline = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-10',
    md: 'h-11 sm:h-14',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36'
  };

  const textSizes = {
    sm: 'text-xs sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const taglineSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.25em]',
    lg: 'text-[11px] sm:text-[12px] tracking-[0.3em]',
    xl: 'text-[13px] sm:text-[14px] tracking-[0.3em]'
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* 3D High-Fidelity Official Logo Emblem */}
      <div className={`relative ${sizeClasses[size]} aspect-square shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 400 380"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Silver Gradients */}
            <linearGradient id="tSilverTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id="tSilverSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Dynamic Electric Royal Blue Gradients */}
            <linearGradient id="mBlueBright" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="30%" stopColor="#2563EB" />
              <stop offset="80%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="mBlueArrow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <linearGradient id="barBlueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* 1. Scattered Blue Pixel Matrix Grid (Top-Left) */}
          <g opacity="0.95">
            <rect x="40" y="70" width="10" height="10" fill="#38BDF8" rx="1.5" />
            <rect x="56" y="58" width="12" height="12" fill="#2563EB" rx="2" />
            <rect x="74" y="50" width="11" height="11" fill="#1D4ED8" rx="1.5" />
            <rect x="52" y="88" width="11" height="11" fill="#2563EB" rx="1.5" />
            <rect x="70" y="76" width="13" height="13" fill="#38BDF8" rx="2" />
            <rect x="90" y="66" width="10" height="10" fill="#60A5FA" rx="1.5" />
            <rect x="66" y="106" width="12" height="12" fill="#1D4ED8" rx="2" />
            <rect x="84" y="94" width="11" height="11" fill="#2563EB" rx="1.5" />
            <rect x="102" y="84" width="12" height="12" fill="#38BDF8" rx="2" />
            <rect x="98" y="112" width="10" height="10" fill="#2563EB" rx="1.5" />
            <rect x="116" y="102" width="11" height="11" fill="#60A5FA" rx="1.5" />
          </g>

          {/* 2. Rising Bar Chart & Line Graph Background (Left of T Stem) */}
          <g>
            <rect x="50" y="210" width="13" height="35" fill="url(#barBlueGrad)" opacity="0.75" rx="2" />
            <rect x="68" y="190" width="13" height="55" fill="url(#barBlueGrad)" opacity="0.85" rx="2" />
            <rect x="86" y="170" width="13" height="75" fill="url(#barBlueGrad)" opacity="0.9" rx="2" />
            <rect x="104" y="150" width="13" height="95" fill="url(#barBlueGrad)" opacity="0.95" rx="2" />
            <rect x="122" y="130" width="13" height="115" fill="url(#barBlueGrad)" rx="2" />

            {/* Diagonal Trend Line with Hollow Circular Nodes */}
            <path d="M 45 215 L 72 195 L 92 175 L 128 135" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="45" cy="215" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
            <circle cx="72" cy="195" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
            <circle cx="92" cy="175" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
            <circle cx="128" cy="135" r="5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
          </g>

          {/* 3. 3D Metallic Silver 'T' */}
          <g id="letterT">
            <polygon points="75,80 260,80 248,112 182,112 182,250 135,250 135,112 75,112" fill="url(#tSilverTop)" />
            <polygon points="75,112 135,112 135,250 142,242 142,104 83,104" fill="url(#tSilverSide)" opacity="0.8" />
            <polygon points="75,80 260,80 252,73 83,73" fill="#FFFFFF" opacity="0.9" />
          </g>

          {/* 4. 3D Royal Blue 'M' with Ascending Arrow */}
          <g id="letterM">
            <path
              d="M 148 245 C 170 230, 195 180, 205 130 L 245 195 L 325 50 L 345 25 L 310 75 L 245 170 L 205 110 L 155 245 Z"
              fill="url(#mBlueBright)"
            />
            <path
              d="M 205 245 L 330 45 L 348 20 L 320 80 L 295 245 L 265 245 L 285 130 L 225 210 Z"
              fill="url(#mBlueArrow)"
            />
            <polygon points="348,20 295,45 330,85" fill="#38BDF8" />
            <polygon points="348,20 355,58 330,85" fill="#1D4ED8" />
            <path d="M 205 130 L 245 195 L 265 165 L 220 115 Z" fill="#0F172A" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* Typography Text: TM DIGITAL MARKETING */}
      <div className="flex flex-col justify-center">
        <div className={`font-heading font-extrabold tracking-tight flex items-center gap-1 sm:gap-1.5 leading-none ${textSizes[size]}`}>
          <span className="text-[#2563EB]">TM</span>
          <span className="text-[#0F172A] dark:text-white">DIGITAL</span>
          <span className="text-[#0F172A] dark:text-white">MARKETING</span>
        </div>

        {/* Tagline: CONNECT • ENGAGE • GROW */}
        {showTagline && (
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 mt-1 w-full">
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#2563EB] to-[#2563EB]" />
            <p className={`font-heading font-bold text-[#2563EB] uppercase tracking-widest leading-none ${taglineSizes[size]}`}>
              CONNECT • ENGAGE • GROW
            </p>
            <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#2563EB] to-[#2563EB]" />
          </div>
        )}
      </div>
    </div>
  );
}
