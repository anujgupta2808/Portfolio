import React, { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports pointer and is desktop width
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && window.matchMedia('(pointer: fine)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20" aria-hidden="true">
      {/* Subtle cyberpunk digital grid background with opacity */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #FF1744 1px, transparent 1px), linear-gradient(to bottom, #FF1744 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Static Atmospheric Gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-neon/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-brand-neon/[0.03] to-transparent pointer-events-none" />

      {/* Interactive Cursor Following Glow (Desktop only) */}
      {isDesktop && (
        <div
          className="cursor-glow"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}
    </div>
  );
};
