import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

import { pauseSmoothScroll, resumeSmoothScroll } from '../hooks/useSmoothScroll';

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll, pause smooth scroll, and listen for Escape key
  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 340 }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-bg-card border border-brand-neon/50 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(255,23,68,0.25)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-3 right-3 z-20 p-1.5 text-text-secondary hover:text-white bg-bg-primary/90 hover:bg-brand-neon/20 rounded-full border border-border-subtle/80 hover:border-brand-neon transition-all focus:outline-none focus:ring-2 focus:ring-brand-neon"
        >
          <X className="w-4 h-4 text-brand-neon" />
        </button>

        {/* Thumbnail Compact Header */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-bg-primary shrink-0 border-b border-border-subtle/80">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
          <span className="absolute bottom-3 left-4 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-neon text-white shadow-[0_0_10px_#FF1744]">
            {project.category}
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 id="modal-project-title" className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h3>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
              {project.fullDescription}
            </p>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <h4 className="text-[11px] uppercase tracking-widest text-text-muted font-bold mb-2">
                  Key Highlights
                </h4>
                <div className="space-y-1.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="mb-5">
              <h4 className="text-[11px] uppercase tracking-widest text-text-muted font-bold mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-bg-primary border border-border-subtle text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-border-subtle/70">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-border-subtle bg-bg-primary hover:border-brand-neon text-white text-xs sm:text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4 text-white" />
                <span>View Code</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-red text-white text-xs sm:text-sm font-semibold shadow-[0_0_12px_rgba(255,23,68,0.5)] transition-all hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Demo</span>
              </a>
            ) : (
              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-bg-card border border-border-subtle hover:border-brand-neon text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Close</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
