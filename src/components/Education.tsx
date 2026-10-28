import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Globe, Sparkles, Target, Layers } from 'lucide-react';
import { educationData, learningHighlightsData, languagesData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-brand-neon/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Structured Layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Education (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col h-full rounded-2xl bg-bg-card/70 border border-border-subtle p-6 sm:p-7 hover:border-brand-neon/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2 text-brand-neon text-xs font-display tracking-widest uppercase font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-8">
              MY EDUCATION
            </h3>

            {/* Timeline cards */}
            <div className="flex flex-col gap-6 relative">
              {/* Vertical timeline line */}
              <div className="absolute top-3 bottom-3 left-6 w-[2px] bg-border-subtle/80" aria-hidden="true" />

              {educationData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className="relative flex items-start gap-4 z-10"
                >
                  {/* Icon badge */}
                  <div className="w-12 h-12 rounded-full border border-brand-neon/60 bg-bg-primary flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,23,68,0.25)]">
                    <GraduationCap className="w-5 h-5 text-brand-neon" />
                  </div>

                  {/* Details Card */}
                  <div className="flex-1 rounded-xl bg-bg-primary/90 border border-border-subtle/70 p-4 hover:border-brand-neon/50 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1.5 flex-wrap">
                      <h4 className="font-display font-bold text-base text-white">
                        {item.degree}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-neon/10 border border-brand-neon/40 text-brand-neon">
                        {item.periodOrScore}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-text-secondary font-medium">
                      {item.institution}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {item.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Experience / Projects & Learning (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col h-full rounded-2xl bg-bg-card/70 border border-border-subtle p-6 sm:p-7 hover:border-brand-neon/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2 text-brand-neon text-xs font-display tracking-widest uppercase font-bold">
              <Briefcase className="w-4 h-4" />
              <span>EXPERIENCE</span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-4">
              PROJECTS & LEARNING
            </h3>

            {/* Intro text */}
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              {learningHighlightsData.intro}
            </p>

            {/* 3 Metric Stat Badges */}
            <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-border-subtle/60">
              <motion.div
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-bg-primary border border-border-subtle text-center hover:border-brand-neon/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-2 text-brand-neon">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="font-display font-black text-lg sm:text-xl text-white">
                  5+
                </div>
                <div className="text-[11px] text-text-secondary font-medium mt-0.5">
                  Mini Projects
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-bg-primary border border-border-subtle text-center hover:border-brand-neon/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-2 text-brand-neon">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="font-display font-black text-lg sm:text-xl text-white">
                  3+
                </div>
                <div className="text-[11px] text-text-secondary font-medium mt-0.5">
                  Technologies
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-bg-primary border border-border-subtle text-center hover:border-brand-neon/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center mb-2 text-brand-neon">
                  <Target className="w-4 h-4" />
                </div>
                <div className="font-display font-black text-lg sm:text-xl text-white">
                  1
                </div>
                <div className="text-[11px] text-text-secondary font-medium mt-0.5">
                  Goal
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 3: Languages (lg:col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col h-full rounded-2xl bg-bg-card/70 border border-border-subtle p-6 sm:p-7 hover:border-brand-neon/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2 text-brand-neon text-xs font-display tracking-widest uppercase font-bold">
              <Globe className="w-4 h-4" />
              <span>LANGUAGES</span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-8">
              LANGUAGES
            </h3>

            {/* Language Progress Bars with Smooth Width Animation */}
            <div className="flex flex-col gap-6 mb-8">
              {languagesData.map((lang) => (
                <div key={lang.name} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="text-xs text-text-muted">{lang.level}</span>
                  </div>
                  {/* Progress bar container */}
                  <div className="w-full h-2 rounded-full bg-bg-primary overflow-hidden border border-border-subtle">
                    <motion.div
                      className="h-full bg-gradient-red rounded-full shadow-[0_0_8px_#FF1744]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Motivational Quote at bottom */}
            <div className="mt-auto pt-6 border-t border-border-subtle/50">
              <p className="font-sans italic text-sm text-brand-neon font-medium">
                “New language, new opportunities.”
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
