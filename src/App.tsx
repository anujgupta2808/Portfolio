import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import SplashCursor from './components/SplashCursor';
import { useActiveSection } from './hooks/useActiveSection';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'achievements',
  'contact',
];

export const App: React.FC = () => {
  useSmoothScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-brand-neon selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Interactive WebGL Fluid Splash Cursor Effect (Pure Vibrant Red) */}
      <SplashCursor
        rainbow={false}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colors={["#FF1744", "#EF4444", "#FF5252"]}
      />

      {/* Ambient background particles & grid */}
      <BackgroundEffects />

      {/* Global Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
