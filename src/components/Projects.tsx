import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { projectsData, projectCategories, ProjectItem } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-secondary/40">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-neon/5 blur-[150px] rounded-full pointer-events-none -z-10" />

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
            label="MY PROJECTS"
            titleWhite="FEATURED"
            titleRed="PROJECTS"
            subtitle="Explore my 5 highlighted projects, plus open-source tools and repositories on GitHub."
          />

          {/* View All Projects on GitHub Action button */}
          <div className="mt-4 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/anujgupta2808?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-bg-card hover:border-brand-neon hover:text-white text-text-secondary text-sm font-medium transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(255,23,68,0.3)]"
            >
              <Github className="w-4 h-4 text-brand-neon" />
              <span>View All on GitHub</span>
              <ArrowRight className="w-4 h-4 text-brand-neon group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Filter Tabs with Sliding Active Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium border border-border-subtle transition-colors duration-200 overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectPill"
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

        {/* Projects Cards Grid with popLayout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
