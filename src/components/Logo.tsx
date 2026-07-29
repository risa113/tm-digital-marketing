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

  const logoUrl = (import.meta.env.BASE_URL + 'logo.png').replace(/\/+/g, '/');

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* High-Fidelity Official TM Logo Emblem Image */}
      <div className={`relative ${sizeClasses[size]} aspect-square shrink-0 flex items-center justify-center`}>
        <img
          src={logoUrl}
          alt="TM Digital Marketing Logo"
          className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
        />
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
