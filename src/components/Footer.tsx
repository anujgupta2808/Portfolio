import React from 'react';
import { AgLogo } from './AgLogo';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../hooks/useSmoothScroll';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('home', 0);
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPrivacy) {
      onOpenPrivacy();
    } else {
      window.location.hash = '#privacy';
    }
  };

  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary/95 py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left: AG Logo & Anuj Gupta */}
          <div className="flex items-center gap-3">
            <AgLogo size="sm" withText={true} />
          </div>

          {/* Center: Dynamic Copyright & Privacy Policy Page Link */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary font-medium">
            <span>&copy; {currentYear} Anuj Gupta. All Rights Reserved.</span>
            <span className="hidden sm:inline text-border-subtle" aria-hidden="true">•</span>
            <button
              onClick={handlePrivacyClick}
              className="text-text-muted hover:text-brand-neon transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline focus:outline-none focus:text-brand-neon"
            >
              Privacy Policy
            </button>
          </div>

          {/* Right: Motto & Mouse Scroll Back to Top */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-display font-extrabold uppercase tracking-widest text-text-muted">
                BUILD &nbsp;/&nbsp; LEARN &nbsp;/&nbsp; GROW
              </span>
              <span className="w-8 h-[2px] bg-brand-neon inline-block shadow-[0_0_6px_#FF1744]" />
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-border-subtle bg-bg-card hover:border-brand-neon text-text-secondary hover:text-white hover:bg-brand-neon/10 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-neon group cursor-pointer"
            >
              {/* Animated Mouse Icon */}
              <div className="w-3.5 h-5 rounded-full border border-text-muted/70 group-hover:border-brand-neon flex items-start justify-center p-0.5 transition-colors shadow-[0_0_8px_rgba(255,23,68,0)] group-hover:shadow-[0_0_8px_rgba(255,23,68,0.4)]">
                <div className="w-1 h-1.5 bg-brand-neon rounded-full animate-bounce" />
              </div>
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-text-muted group-hover:text-white transition-colors">
                Scroll Top
              </span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-neon group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
