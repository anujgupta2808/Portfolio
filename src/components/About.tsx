import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';
import { FolderGit2, Brain, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <SectionHeading
              label="MY INTRODUCTION"
              titleWhite="ABOUT"
              titleRed="ME"
            />

            {/* Supporting Heading */}
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turning Ideas into{' '}
              <span className="text-brand-neon drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">
                Real Digital Experiences.
              </span>
            </h3>

            {/* Bio Paragraph */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {profileData.aboutBio}
            </p>

            {/* Red Horizontal Divider */}
            <div className="w-24 h-[2px] bg-brand-neon mb-8 shadow-[0_0_8px_#FF1744]" />

            {/* 3 Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl border border-border-subtle bg-bg-card/70 hover:border-brand-neon/50 hover:bg-bg-card transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-3 text-brand-neon group-hover:scale-110 transition-transform">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-white text-base">16+</div>
                <div className="text-xs text-text-secondary">Public Repositories</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl border border-border-subtle bg-bg-card/70 hover:border-brand-neon/50 hover:bg-bg-card transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-3 text-brand-neon group-hover:scale-110 transition-transform">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-white text-base">Project-Driven</div>
                <div className="text-xs text-text-secondary">Learning</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 rounded-xl border border-border-subtle bg-bg-card/70 hover:border-brand-neon/50 hover:bg-bg-card transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-3 text-brand-neon group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-white text-base">Open to</div>
                <div className="text-xs text-text-secondary">Collaboration</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual / Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[340px] md:w-[360px] group">
              {/* Angular Neon Frame 1 */}
              <div
                className="absolute -inset-4 sm:-inset-6 border-2 border-brand-neon/60 rounded-2xl sm:rounded-3xl pointer-events-none transform -rotate-3 shadow-[0_0_20px_rgba(255,23,68,0.35)] transition-transform duration-700 group-hover:-rotate-4"
                aria-hidden="true"
              />

              {/* Angular Neon Frame 2 */}
              <div
                className="absolute -inset-2 sm:-inset-3 border border-brand-neon/30 rounded-2xl sm:rounded-3xl pointer-events-none transform rotate-2 transition-transform duration-700 group-hover:rotate-3"
                aria-hidden="true"
              />

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-bg-card border border-brand-neon/40 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(255,23,68,0.2)]">
                <img
                  src={profileData.portraitUrl}
                  alt="Anuj Gupta About Me"
                  className="w-full h-full object-cover object-top filter contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
              </div>

              {/* Handwritten "Hi, I'm Anuj" annotation */}
              <motion.div
                initial={{ scale: 0, rotate: -25, opacity: 0 }}
                whileInView={{ scale: 1, rotate: -12, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', damping: 14 }}
                className="absolute -top-10 -right-6 sm:-top-12 sm:-right-8 flex flex-col items-center pointer-events-none select-none z-20"
              >
                <span className="font-handwriting text-2xl sm:text-3xl text-white font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Hi, I'm Anuj
                </span>
                <svg
                  className="w-12 h-10 sm:w-14 sm:h-12 text-white transform rotate-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  viewBox="0 0 60 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M48 6 C35 15, 20 22, 12 36" />
                  <path d="M10 26 L12 36 L22 36" />
                </svg>
              </motion.div>

              {/* Side Motto: Learn Build Improve Repeat */}
              <div className="hidden sm:flex absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 flex-col items-center gap-1.5 select-none pointer-events-none">
                <div className="flex flex-col items-center gap-2 text-[10px] md:text-xs font-display font-extrabold tracking-[0.25em] uppercase text-text-secondary/70">
                  {profileData.aboutMotto.map((word, idx) => (
                    <span key={idx} className="hover:text-white transition-colors">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="w-[2px] h-8 bg-brand-neon shadow-[0_0_8px_#FF1744] mt-2" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
