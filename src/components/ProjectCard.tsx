import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (project.isExternalMore) {
      e.preventDefault();
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelect(project);
    }
  };

  if (project.isExternalMore) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
        whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
        whileTap={{ scale: 0.99 }}
        onClick={handleClick}
        className="group relative cursor-pointer rounded-2xl bg-gradient-to-br from-bg-card via-bg-card/95 to-brand-neon/10 border border-brand-neon/50 overflow-hidden flex flex-col transition-shadow duration-300 hover:border-brand-neon hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(255,23,68,0.45)]"
      >
        {/* Glow accent in corner */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-neon/15 blur-2xl rounded-full pointer-events-none group-hover:bg-brand-neon/30 transition-colors" />

        {/* Thumbnail with overlay */}
        <div className="relative aspect-video w-full overflow-hidden bg-bg-primary">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />

          {/* GitHub 16+ Repos badge */}
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-neon text-white shadow-[0_0_15px_#FF1744]">
            <Github className="w-3.5 h-3.5" />
            <span>16+ Repos</span>
          </span>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-display font-bold uppercase tracking-widest text-brand-neon">
                Open Source &amp; More
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-2 group-hover:text-brand-neon transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ExternalLink className="w-4 h-4 text-brand-neon shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </h3>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
              {project.shortDescription}
            </p>
          </div>

          {/* Footer: Tags and Link */}
          <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-bg-primary border border-brand-neon/30 text-white group-hover:border-brand-neon transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="w-9 h-9 rounded-full border border-brand-neon bg-brand-neon/20 group-hover:bg-brand-neon flex items-center justify-center text-white transition-all duration-300 shrink-0 ml-2 shadow-[0_0_12px_rgba(255,23,68,0.3)] group-hover:shadow-[0_0_18px_rgba(255,23,68,0.7)]">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl bg-bg-card/90 border border-border-subtle overflow-hidden flex flex-col transition-shadow duration-300 hover:border-brand-neon hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,23,68,0.3)]"
    >
      {/* Thumbnail with overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg-primary">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-2 group-hover:text-brand-neon transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tags and Link */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle/60">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-bg-primary border border-border-subtle text-text-secondary group-hover:border-brand-neon/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="w-9 h-9 rounded-full border border-border-subtle group-hover:border-brand-neon group-hover:bg-brand-neon flex items-center justify-center text-text-secondary group-hover:text-white transition-all duration-300 shrink-0 ml-2 shadow-[0_0_10px_rgba(255,23,68,0)] group-hover:shadow-[0_0_12px_rgba(255,23,68,0.6)]">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
