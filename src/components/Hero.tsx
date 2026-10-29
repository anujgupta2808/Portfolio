import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ChevronDown, FolderGit2, Brain, Users, Award } from 'lucide-react';
import { profileData } from '../data/profile';
import { SocialLinks } from './SocialLinks';
import { scrollToSection } from '../hooks/useSmoothScroll';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('projects', -70);
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('about', -70);
  };

  const getStatIcon = (type: string) => {
    switch (type) {
      case 'repo':
        return <FolderGit2 className="w-5 h-5 text-brand-neon" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-brand-neon" />;
      case 'users':
        return <Users className="w-5 h-5 text-brand-neon" />;
      case 'award':
        return <Award className="w-5 h-5 text-brand-neon" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-brand-neon" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden"
    >
      {/* Background atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-neon/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-brand-neon/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Desktop Left Social Rail */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center"
          >
            <SocialLinks vertical withRailLine />
          </motion.div>

          {/* Center-Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start z-10"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-brand-neon font-display text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                {profileData.tagline}
              </span>
              <span className="w-16 h-[2px] bg-brand-neon inline-block shadow-[0_0_8px_#FF1744]" />
            </div>

            {/* Main Name Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-5">
              {profileData.firstName}{' '}
              <span className="text-brand-neon drop-shadow-[0_0_25px_rgba(255,23,68,0.6)]">
                {profileData.lastName}
              </span>
            </h1>

            {/* Headline with emphasis */}
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug mb-4">
              {profileData.headlinePrefix}{' '}
              <span className="text-brand-neon drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">
                {profileData.headlineEmphasis}
              </span>
            </h2>

            {/* Description */}
            <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed mb-7 font-sans">
              {profileData.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-red text-white font-display font-semibold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(255,23,68,0.7)] transition-shadow duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/anujgupta2808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border-subtle bg-bg-card/70 hover:border-brand-neon/60 text-white font-display font-medium text-sm tracking-wide hover:shadow-[0_0_15px_rgba(255,23,68,0.3)] transition-all duration-300"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub</span>
              </motion.a>
            </div>

            {/* Mobile Social Links Row */}
            <div className="mt-8 lg:hidden flex items-center gap-4">
              <span className="text-xs text-text-muted uppercase tracking-widest mr-2">Follow:</span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right Visual / Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Ambient Red Glows behind portrait */}
            <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-brand-neon/20 blur-[80px] pointer-events-none -z-10" />

            {/* Futuristic Angular Red Geometric Frame with gentle floating */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[250px] sm:w-[290px] md:w-[330px] group"
            >
              {/* Decorative Rotated Red Frame 1 */}
              <div
                className="absolute -inset-3 sm:-inset-5 border-2 border-brand-neon/70 rounded-2xl sm:rounded-3xl pointer-events-none transform rotate-3 shadow-[0_0_20px_rgba(255,23,68,0.4)] transition-transform duration-700 group-hover:rotate-6"
                aria-hidden="true"
              />

              {/* Decorative Rotated Red Frame 2 */}
              <div
                className="absolute -inset-2 sm:-inset-3 border border-brand-neon/40 rounded-2xl sm:rounded-3xl pointer-events-none transform -rotate-2 transition-transform duration-700 group-hover:-rotate-3"
                aria-hidden="true"
              />

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-bg-card border border-brand-neon/50 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,23,68,0.25)]">
                <img
                  src={profileData.portraitUrl}
                  alt="Anuj Gupta Portrait"
                  className="w-full h-full object-cover object-top filter contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay on bottom & sides for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/30 via-transparent to-brand-neon/10" />
              </div>

              {/* Handwritten "Hi, I'm Anuj" annotation with curved arrow */}
              <motion.div
                initial={{ scale: 0, rotate: -25, opacity: 0 }}
                animate={{ scale: 1, rotate: -12, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring', damping: 14 }}
                className="absolute -top-10 -right-4 sm:-top-11 sm:-right-6 flex flex-col items-center pointer-events-none select-none z-20"
              >
                <span className="font-handwriting text-2xl sm:text-3xl text-white font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Hi, I'm Anuj
                </span>
                {/* Hand-drawn SVG curved arrow */}
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

              {/* Hero Side Motto: CODE CREATE LEARN GROW */}
              <div className="hidden xl:flex absolute -right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-1.5 select-none pointer-events-none">
                <div className="writing-vertical-lr flex flex-col items-center gap-2 text-[10px] font-display font-extrabold tracking-[0.25em] uppercase text-text-secondary/80">
                  {profileData.motto.map((word, idx) => (
                    <span key={idx} className="hover:text-white transition-colors">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="w-[2px] h-6 bg-brand-neon shadow-[0_0_8px_#FF1744] mt-1.5" />
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Statistics / Highlights Bar with Smooth Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 border border-border-subtle/80 bg-bg-card/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle/40">
            {profileData.stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`flex items-center gap-4 transition-colors ${idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''
                  } ${idx % 2 !== 0 ? 'pt-4 sm:pt-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}
              >
                {/* Circular red icon badge */}
                <div className="w-12 h-12 rounded-full border border-brand-neon/60 bg-brand-neon/10 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,23,68,0.25)]">
                  {getStatIcon(stat.icon)}
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={scrollToAbout}
            aria-label="Scroll down to About section"
            className="group flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors focus:outline-none"
          >
            {/* Animated mouse icon */}
            <div className="w-5 h-9 rounded-full border-2 border-text-muted/60 group-hover:border-brand-neon flex items-start justify-center p-1 transition-colors shadow-[0_0_10px_rgba(255,23,68,0)] group-hover:shadow-[0_0_10px_rgba(255,23,68,0.5)]">
              <div className="w-1.5 h-2 bg-brand-neon rounded-full animate-bounce" />
            </div>
            <span className="font-display text-[10px] tracking-[0.25em] uppercase font-bold text-text-muted group-hover:text-brand-neon transition-colors flex items-center gap-1">
              SCROLL DOWN <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
