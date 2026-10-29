import { useState, useEffect, useRef, useCallback } from 'react';
import { scrollToSection } from './useSmoothScroll';

export function useActiveSection(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<number | null>(null);

  const calculateActiveSection = useCallback(() => {
    // 1. If at the very top of the page, activate the first section
    if (window.scrollY < 60) {
      return sectionIds[0] || 'home';
    }

    // 2. If scrolled near the bottom of the page, activate the last section
    const scrollBottom = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    if (pageHeight - scrollBottom <= 100) {
      return sectionIds[sectionIds.length - 1] || 'contact';
    }

    // 3. Find which section currently encompasses the trigger threshold line
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) {
        return id;
      }
    }

    // 4. Fallback: closest section above or near the threshold
    let closestId = sectionIds[0];
    let minDistance = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - offset);
      if (dist < minDistance && rect.top <= window.innerHeight * 0.5) {
        minDistance = dist;
        closestId = id;
      }
    }

    return closestId;
  }, [sectionIds, offset]);

  useEffect(() => {
    const handleScroll = () => {
      // If user clicked a nav link and programmatic smooth scroll is active, do not jitter
      if (isNavigatingRef.current) return;

      const current = calculateActiveSection();
      if (current) {
        setActiveSection(current);
      }
    };

    // If user manually wheels or touches during smooth scroll, immediately release lock
    const handleManualInterrupt = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        if (navTimeoutRef.current) {
          clearTimeout(navTimeoutRef.current);
          navTimeoutRef.current = null;
        }
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleManualInterrupt, { passive: true });
    window.addEventListener('touchmove', handleManualInterrupt, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleManualInterrupt);
      window.removeEventListener('touchmove', handleManualInterrupt);
      if (navTimeoutRef.current) {
        clearTimeout(navTimeoutRef.current);
      }
    };
  }, [calculateActiveSection]);

  const scrollToId = useCallback((id: string) => {
    isNavigatingRef.current = true;
    setActiveSection(id);

    if (navTimeoutRef.current) {
      clearTimeout(navTimeoutRef.current);
    }

    // Safety fallback unlock
    navTimeoutRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false;
      navTimeoutRef.current = null;
      const current = calculateActiveSection();
      if (current) {
        setActiveSection(current);
      }
    }, 1250);

    scrollToSection(id, id === 'home' ? 0 : -70, () => {
      isNavigatingRef.current = false;
      if (navTimeoutRef.current) {
        clearTimeout(navTimeoutRef.current);
        navTimeoutRef.current = null;
      }
    });
  }, [calculateActiveSection]);

  return {
    activeSection,
    setActiveSection,
    scrollToId,
  };
}
