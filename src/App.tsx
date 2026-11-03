import React, { useState, useEffect } from 'react';
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
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
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
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const { activeSection, scrollToId } = useActiveSection(sectionIds, 110);

  useEffect(() => {
    // Open modal if URL loaded with #privacy
    if (window.location.hash === '#privacy') {
      setPrivacyModalOpen(true);
    }

    const handleHash = () => {
      if (window.location.hash === '#privacy') {
        setPrivacyModalOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('popstate', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('popstate', handleHash);
    };
  }, []);

  const handleOpenPrivacy = () => {
    setPrivacyModalOpen(true);
    history.pushState(null, '', '#privacy');
  };

  const handleClosePrivacy = () => {
    setPrivacyModalOpen(false);
    if (window.location.hash === '#privacy') {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-brand-neon selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Interactive WebGL Fluid Splash Cursor Effect (Red + Black) */}
      <SplashCursor
        rainbow={false}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colors={["#ef4444", "#000000"]}
      />

      {/* Ambient background particles & grid */}
      <BackgroundEffects />

      {/* Global Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToId}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToId}
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

      {/* Minimal Footer with Privacy Policy link */}
      <Footer onOpenPrivacy={handleOpenPrivacy} />

      {/* Interactive Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={handleClosePrivacy}
      />
    </div>
  );
};

export default App;
