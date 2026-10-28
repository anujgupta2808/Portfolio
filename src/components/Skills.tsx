import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { skillsData, skillCategories, SkillCategory, SkillItem } from '../data/skills';
import { TechIcon } from './TechIcon';
import { SkillModal } from './SkillModal';
import { ArrowRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary/40">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            label="MY SKILLS"
            titleWhite="TECHNICAL"
            titleRed="SKILLS"
            subtitle="I work with modern technologies to build interactive and efficient web solutions."
          />

          {/* View All Skills Action button */}
          <div className="mt-4 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory('All')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-bg-card hover:border-brand-neon hover:text-white text-text-secondary text-sm font-medium transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(255,23,68,0.3)]"
            >
              <span>View All Skills</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Category Filters with Sliding Active Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-border-subtle transition-colors duration-200 overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillPill"
                    className="absolute inset-0 bg-brand-neon rounded-full shadow-[0_0_15px_rgba(255,23,68,0.5)] -z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'}`}>
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with popLayout */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.18 } }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedSkill(skill)}
                className="group relative cursor-pointer rounded-2xl bg-bg-card/80 border border-border-subtle p-5 sm:p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:border-brand-neon hover:shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(255,23,68,0.35)]"
              >
                {/* Technology Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  <TechIcon type={skill.iconType} className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                {/* Technology Name */}
                <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide group-hover:text-brand-neon transition-colors">
                  {skill.name}
                </h4>

                {/* Click prompt tooltip badge on hover */}
                <span className="mt-2 text-[10px] text-text-muted uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>

      {/* Skill Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
};
