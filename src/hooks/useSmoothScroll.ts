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
      duration: 1.2,
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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

export function scrollToSection(targetIdOrElement: string | HTMLElement, offset: number = -70) {
  const lenis = window.__lenis;
  const element = typeof targetIdOrElement === 'string'
    ? document.getElementById(targetIdOrElement.replace(/^#/, ''))
    : targetIdOrElement;

  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, { offset, duration: 1.2 });
  } else {
    const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function pauseSmoothScroll() {
  window.__lenis?.stop();
}

export function resumeSmoothScroll() {
  window.__lenis?.start();
}
