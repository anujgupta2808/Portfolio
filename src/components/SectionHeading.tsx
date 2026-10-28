import React from 'react';

interface SectionHeadingProps {
  label?: string;
  titleWhite: string;
  titleRed?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  titleWhite,
  titleRed,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <div className={`flex items-center gap-2 mb-3 text-brand-neon font-display text-xs md:text-sm tracking-widest uppercase font-semibold ${align === 'center' ? 'justify-center' : ''}`}>
          <span>↗</span>
          <span>{label}</span>
          <span className="w-8 h-[2px] bg-brand-neon inline-block"></span>
        </div>
      )}

      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
        {titleWhite}{' '}
        {titleRed && <span className="text-brand-neon drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">{titleRed}</span>}
      </h2>

      {subtitle && (
        <p className="mt-3 text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
