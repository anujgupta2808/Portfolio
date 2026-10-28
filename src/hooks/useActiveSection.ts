import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. If at the very top of the page, activate the first section
      if (window.scrollY < 80) {
        setActiveSection(sectionIds[0] || 'home');
        return;
      }

      // 2. If scrolled near the bottom, activate the last section
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1] || 'contact');
        return;
      }

      // 3. Find which section currently encompasses the trigger line
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Section top is at or above the offset, and bottom is below the offset
        if (rect.top <= offset && rect.bottom > offset) {
          setActiveSection(id);
          return;
        }
      }

      // 4. Fallback: find the section whose top is closest to the offset
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

      if (closestId) {
        setActiveSection(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
