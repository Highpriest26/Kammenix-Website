import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  symbolOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
  symbolOnly = false,
}) => {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="Kammenix Nig. Limited Home"
    >
      {/* Official Kammenix Geometric Logo Emblem */}
      <div className="relative rounded-xl overflow-hidden shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105 border border-white/10">
        <Image
          src="/images/logo/kammenix-official-logo.jpg"
          alt="Kammenix Nig. Limited Logo"
          width={symbolOnly ? 44 : 48}
          height={symbolOnly ? 44 : 48}
          className="object-cover w-11 h-11 sm:w-12 sm:h-12"
        />
      </div>

      {!symbolOnly && (
        <div className="flex flex-col">
          <div className="flex flex-col leading-none">
            <span
              className={`font-heading font-black tracking-wider text-lg sm:text-xl leading-tight ${
                isLight ? 'text-white' : 'text-[#101F34]'
              }`}
            >
              KAMMENIX
            </span>
            <span
              className={`font-heading font-bold text-xs tracking-widest uppercase mt-0.5 ${
                isLight ? 'text-[#8DC5C0]' : 'text-[#101F34]/90'
              }`}
            >
              NIG. LIMITED
            </span>
          </div>
          {showTagline && (
            <span
              className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-medium mt-1 ${
                isLight ? 'text-[#C0E0D7]' : 'text-gray-600'
              }`}
            >
              Excellence, Professionalism &amp; Trust
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
