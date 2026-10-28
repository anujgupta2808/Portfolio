import React from 'react';
import { AgLogo } from './AgLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary/95 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: AG Logo & Anuj Gupta */}
          <div className="flex items-center gap-3">
            <AgLogo size="sm" withText={true} />
          </div>

          {/* Center: Dynamic Copyright */}
          <div className="text-xs sm:text-sm text-text-secondary font-medium">
            &copy; {currentYear} Anuj Gupta. All Rights Reserved.
          </div>

          {/* Right: Motto, Red line & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-widest text-text-muted">
                BUILD &nbsp;/&nbsp; LEARN &nbsp;/&nbsp; GROW
              </span>
              <span className="w-8 h-[2px] bg-brand-neon inline-block shadow-[0_0_6px_#FF1744]" />
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-full border border-border-subtle bg-bg-card hover:border-brand-neon text-text-secondary hover:text-white hover:bg-brand-neon/10 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-neon group"
            >
              <ArrowUp className="w-4 h-4 text-brand-neon group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
