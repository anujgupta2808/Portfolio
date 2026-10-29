import React from 'react';
import { scrollToSection } from '../hooks/useSmoothScroll';

interface AgLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const AgLogo: React.FC<AgLogoProps> = ({ size = 'md', withText = true, onClick }) => {
  const sizeMap = {
    sm: { box: 'w-7 h-7', text: 'text-sm' },
    md: { box: 'w-9 h-9', text: 'text-base md:text-lg' },
    lg: { box: 'w-12 h-12', text: 'text-xl md:text-2xl' },
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    } else {
      e.preventDefault();
      scrollToSection('home', 0);
    }
  };

  return (
    <a
      href="#home"
      onClick={handleClick}
      className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-brand-neon rounded-md px-1 cursor-pointer"
    >
      {/* AG Monogram SVG */}
      <div className={`${sizeMap[size].box} relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,23,68,0.7)]">
          <defs>
            <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1744" />
              <stop offset="100%" stopColor="#B00020" />
            </linearGradient>
          </defs>
          {/* Stylized A */}
          <path
            d="M15 78 L38 22 L52 22 L62 50 L48 50 L44 36 L30 70 L42 70 L46 78 Z"
            fill="url(#logoRedGrad)"
          />
          {/* Stylized G */}
          <path
            d="M52 48 Q78 40 82 62 Q86 82 56 82 Q42 82 42 70"
            stroke="url(#logoRedGrad)"
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
          />
          {/* G Inner Bar */}
          <path
            d="M60 62 L82 62"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {withText && (
        <span className={`font-display font-extrabold tracking-wider ${sizeMap[size].text} uppercase`}>
          <span className="text-white">ANUJ</span>{' '}
          <span className="text-brand-neon drop-shadow-[0_0_10px_rgba(255,23,68,0.5)]">GUPTA</span>
        </span>
      )}
    </a>
  );
};
