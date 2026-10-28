import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Mail, Phone, MapPin, ArrowRight, Quote, X } from 'lucide-react';
import { achievementsData, AchievementItem } from '../data/achievements';
import { profileData } from '../data/profile';
import { SocialLinks } from './SocialLinks';
import { scrollToSection } from '../hooks/useSmoothScroll';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact', -70);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-brand-neon/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Triad Layout matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Achievements & Certifications (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-bg-card/80 border border-border-subtle p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-brand-neon/40 transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle/60">
                <div className="w-10 h-10 rounded-full border border-brand-neon/60 bg-brand-neon/10 flex items-center justify-center text-brand-neon shadow-[0_0_10px_rgba(255,23,68,0.3)]">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-tight">
                    ACHIEVEMENTS <span className="text-brand-neon">&amp;</span>
                    <br />
                    CERTIFICATIONS
                  </h3>
                </div>
              </div>

              {/* Certificate Rows */}
              <div className="space-y-4">
                {achievementsData.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedAchievement(cert)}
                    className="group cursor-pointer flex items-center justify-between p-3 rounded-xl bg-bg-primary/80 border border-border-subtle hover:border-brand-neon/50 hover:bg-bg-primary transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <div className="w-8 h-8 rounded-full border border-brand-neon/40 bg-brand-neon/10 flex items-center justify-center text-brand-neon shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-neon transition-colors line-clamp-1">
                          {cert.title}
                        </h4>
                        <span className="text-[11px] text-text-muted">{cert.issuer}</span>
                      </div>
                    </div>
                    <span className="text-xs font-display font-bold text-text-secondary group-hover:text-white shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-text-muted mt-6 text-center">
              Click any certificate to inspect credential details
            </p>
          </motion.div>

          {/* Card 2: Quote / Philosophy Card (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-card border border-border-subtle p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-brand-neon/40 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Giant Red Quote Mark */}
            <div className="mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center text-brand-neon shadow-[0_0_15px_rgba(255,23,68,0.25)]">
                <Quote className="w-6 h-6 rotate-180" />
              </div>
            </div>

            {/* Quote Body */}
            <div className="my-auto py-4">
              <blockquote className="font-display font-medium text-base sm:text-lg text-text-primary leading-relaxed italic">
                “{profileData.quote.text}”
              </blockquote>
            </div>

            {/* Attribution */}
            <div className="pt-4 border-t border-border-subtle/50">
              <p className="font-display font-bold text-brand-neon tracking-wide text-sm">
                — {profileData.quote.author}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Get In Touch Quick Card (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-bg-card/80 border border-border-subtle p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-brand-neon/40 transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle/60">
                <div className="w-10 h-10 rounded-full border border-brand-neon/60 bg-brand-neon/10 flex items-center justify-center text-brand-neon shadow-[0_0_10px_rgba(255,23,68,0.3)]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-xl text-white tracking-tight uppercase">
                  GET IN TOUCH
                </h3>
              </div>

              {/* Info List */}
              <div className="space-y-4 mb-6">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-brand-neon group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">{profileData.contact.email}</span>
                </a>

                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-brand-neon group-hover:scale-110 transition-transform shrink-0" />
                  <span>{profileData.contact.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-brand-neon shrink-0" />
                  <span>{profileData.contact.location}</span>
                </div>
              </div>

              {/* Social Row */}
              <div className="pt-2 pb-6">
                <SocialLinks />
              </div>
            </div>

            {/* Let's Connect Action Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              onClick={scrollToContact}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-brand-neon/80 text-white font-display font-semibold text-sm hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(255,23,68,0.6)] transition-all duration-300 group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>

        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="relative w-full max-w-md rounded-2xl bg-bg-card border border-brand-neon/60 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(255,23,68,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 p-2 text-text-secondary hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-brand-neon"
              >
                <X className="w-5 h-5 text-brand-neon" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-brand-neon/10 border border-brand-neon/40 flex items-center justify-center text-brand-neon mb-4">
                <Trophy className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-neon/10 text-brand-neon border border-brand-neon/30 mb-2 inline-block">
                {selectedAchievement.year}
              </span>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                {selectedAchievement.title}
              </h3>

              <p className="text-xs text-text-muted mb-4 font-medium">
                Issued by: {selectedAchievement.issuer}
              </p>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {selectedAchievement.description}
              </p>

              <button
                onClick={() => setSelectedAchievement(null)}
                className="w-full py-2.5 rounded-xl bg-gradient-red text-white text-sm font-semibold hover:shadow-[0_0_15px_rgba(255,23,68,0.5)] transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
