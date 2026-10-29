import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    // Only initialize smooth scroll on non-reduced-motion environments
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Initial hash scroll handling if page loads with a hash target
    if (window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, '');
      if (hashId) {
        setTimeout(() => {
          scrollToSection(hashId, hashId === 'home' ? 0 : -70);
        }, 150);
      }
    }

    // Handle browser back/forward buttons smoothly
    const handlePopState = () => {
      const hashId = window.location.hash.replace(/^#/, '') || 'home';
      scrollToSection(hashId, hashId === 'home' ? 0 : -70);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handlePopState);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

export function scrollToSection(
  targetIdOrElement: string | HTMLElement,
  offset: number = -70,
  onComplete?: () => void
) {
  const isHome = targetIdOrElement === 'home' || targetIdOrElement === '#home';
  const effectiveOffset = isHome ? 0 : offset;

  if (isHome) {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, {
        duration: 1.1,
        onComplete: () => {
          onComplete?.();
        },
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (onComplete) setTimeout(onComplete, 1100);
    }

    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
    return;
  }

  const element = typeof targetIdOrElement === 'string'
    ? document.getElementById(targetIdOrElement.replace(/^#/, ''))
    : targetIdOrElement;

  if (!element) {
    onComplete?.();
    return;
  }

  if (window.__lenis) {
    window.__lenis.scrollTo(element, {
      offset: effectiveOffset,
      duration: 1.1,
      onComplete: () => {
        onComplete?.();
      },
    });
  } else {
    const top = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset + effectiveOffset);
    window.scrollTo({ top, behavior: 'smooth' });
    if (onComplete) setTimeout(onComplete, 1100);
  }

  const cleanId = typeof targetIdOrElement === 'string'
    ? targetIdOrElement.replace(/^#/, '')
    : element.id;

  if (cleanId) {
    history.pushState(null, '', `#${cleanId}`);
  }
}

export function pauseSmoothScroll() {
  window.__lenis?.stop();
}

export function resumeSmoothScroll() {
  window.__lenis?.start();
}
