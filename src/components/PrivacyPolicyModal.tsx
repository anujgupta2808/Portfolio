import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Eye, Mail, Clock, ChevronDown } from 'lucide-react';
import { profileData } from '../data/profile';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    // Reset scroll position on open
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setScrollPercent(0);
      setShowScrollHint(true);
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const pct = maxScroll > 0 ? Math.min(100, Math.round((scrollTop / maxScroll) * 100)) : 0;
    setScrollPercent(pct);
    if (scrollTop > 40) {
      setShowScrollHint(false);
    } else {
      setShowScrollHint(true);
    }
  };

  const handleScrollDownPrompt = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 220, behavior: 'smooth' });
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Ensure wheel scrolling event bubbles strictly to the modal container without Lenis suppression
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 340 }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-2xl bg-bg-card border border-brand-neon/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,23,68,0.25)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-6 py-5 border-b border-border-subtle/80 bg-bg-secondary/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-neon/10 border border-brand-neon/40 flex items-center justify-center text-brand-neon shadow-[0_0_12px_rgba(255,23,68,0.3)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="privacy-modal-title" className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide">
                    Privacy Policy
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5 font-mono">
                    <Clock className="w-3 h-3 text-brand-neon" />
                    <span>Last Updated: November 2026</span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Privacy Policy"
                className="p-2 text-text-secondary hover:text-white bg-bg-card hover:bg-brand-neon/20 rounded-full border border-border-subtle hover:border-brand-neon transition-all focus:outline-none focus:ring-2 focus:ring-brand-neon cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reading / Mouse Scroll Progress Bar */}
            <div className="w-full h-1 bg-border-subtle/60 relative shrink-0">
              <div
                className="h-full bg-brand-neon transition-all duration-100 shadow-[0_0_8px_#FF1744]"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>

            {/* Scrollable Content Body with native unhindered mouse scroll */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              onWheel={handleWheel}
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              tabIndex={0}
              className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm text-text-secondary leading-relaxed custom-scrollbar outline-none focus:outline-none select-text"
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Introduction */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  1. Overview & Commitment
                </h4>
                <p>
                  Welcome to the personal developer portfolio of <span className="text-white font-semibold">Anuj Gupta</span> (<a href="https://anujgupta2808.github.io/Portfolio/" className="text-brand-neon hover:underline">anujgupta2808.github.io/Portfolio</a>). Your privacy is respected and protected. This Privacy Policy outlines what information is collected when you browse this portfolio or communicate through it, and how that information is handled.
                </p>
              </section>

              {/* Information Collected */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  2. Information We Collect
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl border border-border-subtle bg-bg-secondary/40">
                    <div className="flex items-center gap-2 text-white font-medium mb-1.5">
                      <Mail className="w-4 h-4 text-brand-neon" />
                      <span>Contact Form Details</span>
                    </div>
                    <p className="text-xs text-text-muted">
                      When you send a message through the contact form, you voluntarily provide your <strong className="text-text-secondary">Name</strong>, <strong className="text-text-secondary">Email Address</strong>, <strong className="text-text-secondary">Subject</strong>, and <strong className="text-text-secondary">Message content</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-border-subtle bg-bg-secondary/40">
                    <div className="flex items-center gap-2 text-white font-medium mb-1.5">
                      <Eye className="w-4 h-4 text-brand-neon" />
                      <span>Usage & Technical Data</span>
                    </div>
                    <p className="text-xs text-text-muted">
                      Standard technical web information (such as browser type, referring URLs, and general network telemetry) may be processed by hosting servers (e.g. GitHub Pages) for diagnostic and operational security.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  3. How We Use Your Information
                </h4>
                <p>Any information collected is used strictly for legitimate communication and portfolio maintenance:</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-1 text-text-secondary">
                  <li>To respond directly to your messages, project proposals, or professional inquiries.</li>
                  <li>To ensure reliable delivery and prevent contact form spam or automated misuse.</li>
                  <li>To monitor site uptime, maintain technical performance, and diagnose technical errors.</li>
                </ul>
                <div className="p-3 rounded-lg border border-brand-neon/30 bg-brand-neon/10 text-xs text-text-primary mt-2">
                  <strong className="text-brand-neon">Zero Selling or Marketing:</strong> Your personal contact details are never sold, rented, monetized, or shared with third-party advertisers.
                </div>
              </section>

              {/* Local Storage & Cookies */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  4. Cookies & Local Storage
                </h4>
                <p>
                  This portfolio does not use commercial advertising cookies or tracking beacons. It may use browser <span className="font-mono text-white text-xs bg-bg-secondary px-1.5 py-0.5 rounded border border-border-subtle">localStorage</span> exclusively for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1">
                  <li>Preserving an offline backup copy of messages you submit in case of network drops.</li>
                  <li>Caching client preferences to ensure smooth browsing without repeated prompts.</li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  5. Third-Party Services & Links
                </h4>
                <p>
                  This portfolio is hosted on <strong className="text-white">GitHub Pages</strong> and may utilize verified email forwarding utilities (such as ShipMyForm or direct mailto/WhatsApp gateways). External links to GitHub, LinkedIn, and Instagram are subject to their respective third-party privacy notices.
                </p>
              </section>

              {/* Security & Data Retention */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  6. Security & Data Retention
                </h4>
                <p>
                  Your connection to this site is encrypted with standard modern HTTPS/TLS protocols. Contact form submissions are retained only as long as necessary to communicate regarding your inquiry or collaboration, after which they may be archived or removed.
                </p>
              </section>

              {/* Your Rights */}
              <section className="space-y-2">
                <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-neon rounded-full" />
                  7. Your Rights
                </h4>
                <p>
                  You may at any time request access to, correction of, or deletion of any contact information you submitted through this website by emailing <a href={`mailto:${profileData.contact.email}`} className="text-brand-neon hover:underline font-mono text-xs">{profileData.contact.email}</a>.
                </p>
              </section>

              {/* Contact Information */}
              <section className="p-4 rounded-xl border border-border-subtle bg-bg-secondary/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h5 className="font-display font-bold text-white text-sm">Have Questions?</h5>
                  <p className="text-xs text-text-muted mt-0.5">Reach out directly if you have any questions about this privacy statement.</p>
                </div>
                <a
                  href={`mailto:${profileData.contact.email}?subject=Privacy%20Policy%20Inquiry`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-red text-white text-xs font-semibold hover:shadow-[0_0_15px_rgba(255,23,68,0.5)] transition-all shrink-0 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Anuj</span>
                </a>
              </section>
            </div>




            {/* Footer Action */}
            <div className="px-6 py-4 border-t border-border-subtle/80 bg-bg-secondary/40 flex items-center justify-between shrink-0">
              <span className="text-xs text-text-muted font-mono">
                {scrollPercent}% Read &bull; &copy; {new Date().getFullYear()} Anuj Gupta
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full border border-border-subtle hover:border-brand-neon/80 bg-bg-card hover:bg-brand-neon/15 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
