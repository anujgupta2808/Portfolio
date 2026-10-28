import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AgLogo } from './AgLogo';
import { Download, Menu, X } from 'lucide-react';
import { profileData } from '../data/profile';

import { scrollToSection } from '../hooks/useSmoothScroll';

interface NavbarProps {
  activeSection: string;
  onOpenMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenMobileMenu,
  mobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id, -70);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: AG Logo & Name */}
        <AgLogo size="md" />

        {/* Center: Desktop Navigation Links with Gliding Layout Indicator */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-neon/15 rounded-full border border-brand-neon/40 shadow-[0_0_12px_rgba(255,23,68,0.3)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  >
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-neon rounded-full shadow-[0_0_10px_#FF1744]" />
                  </motion.div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Download Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={profileData.resumeUrl}
            download="Anuj_Gupta_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-neon/80 text-white font-medium text-xs lg:text-sm hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(255,23,68,0.6)] transition-all duration-300 group"
          >
            <Download className="w-3.5 h-3.5 text-brand-neon group-hover:text-white transition-colors" />
            <span>Download Resume</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-bg-card border border-border-subtle focus:outline-none focus:ring-2 focus:ring-brand-neon"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand-neon" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};
