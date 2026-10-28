import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { SkillItem } from '../data/skills';

import { pauseSmoothScroll, resumeSmoothScroll } from '../hooks/useSmoothScroll';

interface SkillModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  useEffect(() => {
    if (!skill) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    pauseSmoothScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      resumeSmoothScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [skill, onClose]);

  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 340 }}
            className="relative w-full max-w-lg rounded-2xl bg-bg-card border border-brand-neon/60 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(255,23,68,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close skill modal"
              className="absolute top-4 right-4 p-2 text-text-secondary hover:text-white hover:bg-bg-primary rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-neon"
            >
              <X className="w-5 h-5 text-brand-neon" />
            </button>

            {/* Skill Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-bg-primary border border-border-subtle flex items-center justify-center p-2.5 shadow-[0_0_15px_rgba(255,23,68,0.2)]">
                <span className="font-display font-extrabold text-brand-neon text-lg">{skill.name.slice(0, 3)}</span>
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-neon/10 text-brand-neon border border-brand-neon/30 mb-1">
                  {skill.category}
                </span>
                <h3 id="skill-title" className="font-display text-2xl font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">Overview</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Practical Usage */}
            <div className="p-4 rounded-xl bg-bg-primary border border-border-subtle/80 mb-6">
              <div className="flex items-center gap-2 mb-2 text-brand-neon">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="text-xs uppercase tracking-widest font-bold">Practical Application & Experience</h4>
              </div>
              <p className="text-text-primary text-sm leading-relaxed">
                {skill.useCase}
              </p>
            </div>

            {/* Action button */}
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-gradient-red text-white font-medium text-sm hover:shadow-[0_0_15px_rgba(255,23,68,0.5)] transition-all"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
