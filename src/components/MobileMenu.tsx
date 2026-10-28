import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from './Navbar';
import { Download, X } from 'lucide-react';
import { profileData } from '../data/profile';
import { SocialLinks } from './SocialLinks';
import { AgLogo } from './AgLogo';

import { scrollToSection } from '../hooks/useSmoothScroll';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      scrollToSection(id, -70);
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 md:hidden bg-bg-primary/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
            <AgLogo size="sm" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-text-secondary hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-neon"
            >
              <X className="w-6 h-6 text-brand-neon" />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-3 my-auto py-6">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`text-xl font-display font-semibold tracking-wider px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'text-brand-neon bg-brand-neon/10 border-l-4 border-brand-neon shadow-[0_0_15px_rgba(255,23,68,0.2)]'
                      : 'text-text-secondary hover:text-white hover:bg-bg-card'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-brand-neon uppercase tracking-widest">Active</span>}
                </motion.a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-border-subtle/40">
              <a
                href={profileData.resumeUrl}
                download="Anuj_Gupta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-red text-white font-semibold shadow-[0_0_20px_rgba(255,23,68,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Bottom Socials */}
          <div className="border-t border-border-subtle/50 pt-4 flex flex-col items-center gap-3">
            <span className="text-xs text-text-muted uppercase tracking-widest">Connect with Anuj</span>
            <SocialLinks />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
