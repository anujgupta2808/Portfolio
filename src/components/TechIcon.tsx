import React from 'react';

interface TechIconProps {
  type: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ type, className = 'w-8 h-8' }) => {
  switch (type) {
    case 'html':
      return (
        <svg viewBox="0 0 512 512" className={className} fill="none">
          <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#EBEBEB" d="M256 176h-84l-6-67h90V47H102l17 191h137v-62zm0 137l-1 0h-74l-5-57h-62l9 114 133 37v-94z" />
          <path fill="#FFFFFF" d="M256 176v62h78l-7 83-71 19v64l133-37 18-202H256zm0-129v62h150l6-62H256z" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 512 512" className={className} fill="none">
          <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#EBEBEB" d="M256 208h-78l-5-57h83V90H108l17 179h131v-61zm0 148l-68-18-4-49h-61l8 99 125 35v-67z" />
          <path fill="#FFFFFF" d="M256 208v59h71l-7 74-64 17v61l119-33 16-178H256zm0-118v58h143l6-58H256z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 512 512" className={className}>
          <rect width="512" height="512" fill="#F7DF1E" rx="64" />
          <path d="M325 385c15 25 35 41 71 41 30 0 49-15 49-36 0-25-20-34-54-49l-19-8c-54-23-89-52-89-114 0-57 43-100 110-100 48 0 83 17 106 58l-51 33c-11-20-25-28-55-28-25 0-41 13-41 31 0 22 16 30 48 44l19 8c64 28 97 54 97 121 0 69-54 104-119 104-66 0-108-33-128-76l56-29zm-162 5c8 14 15 26 32 26 16 0 27-7 27-33V123h67v259c0 62-36 90-88 90-48 0-77-26-92-60l54-27z" fill="#000000" />
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path fill="#00599C" d="M115.4 30.7L66.7 2.6c-1.7-1-3.8-1-5.5 0L12.6 30.7c-1.7 1-2.7 2.8-2.7 4.8v56.3c0 2 1 3.8 2.7 4.8l48.6 28.1c1.7 1 3.8 1 5.5 0l48.6-28.1c1.7-1 2.7-2.8 2.7-4.8V35.5c0-2-1-3.8-2.6-4.8z" />
          <path fill="#004482" d="M117.8 87.8l-53.8 31.1V64.1l53.8-27.1v50.8z" />
          <path fill="#659AD2" d="M64 26.6c-20.6 0-37.4 16.7-37.4 37.4 0 20.6 16.7 37.4 37.4 37.4 14.8 0 27.6-8.6 33.6-21.1l-14.7-6.5c-3.6 7.6-11.2 12.8-20.1 12.8-12.4 0-22.6-10.2-22.6-22.6 0-12.4 10.2-22.6 22.6-22.6 8.9 0 16.5 5.2 20.1 12.8l14.7-6.5C91.6 35.2 78.8 26.6 64 26.6z" />
          <path fill="#FFFFFF" d="M84.5 59.2h6.2V53h4.6v6.2h6.2v4.6h-6.2v6.2h-4.6v-6.2h-6.2v-4.6zm19.8 0h6.2V53h4.6v6.2h6.2v4.6h-6.2v6.2h-4.6v-6.2h-6.2v-4.6z" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path fill="url(#python_blue)" d="M63.2 2.1c-15.6 0-24.8 3.5-29.3 7.8-4.8 4.6-4.7 9.8-4.7 14.8v10.9h34.8v5H20.7c-5.4 0-11 3.4-15.1 7.9-4.7 5.1-4.7 12.4-4.7 19.3 0 6.6 0 14.2 4.9 19.3 4.2 4.4 9.6 4.8 15 4.8h8.8v-12.4c0-7.3 6.4-13.4 13.7-13.4h33.8c6 0 11.2-4.9 11.2-11.2V20.5c0-5.8-5-10.3-11.2-12.4-4.8-1.7-10.2-6-14-6zm-9.7 7.7c2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6-2.5 0-4.6-2.1-4.6-4.6.1-2.5 2.1-4.6 4.6-4.6z" />
          <path fill="url(#python_yellow)" d="M65.1 125.9c15.6 0 24.8-3.5 29.3-7.8 4.8-4.6 4.7-9.8 4.7-14.8V92.4H64.3v-5h43.3c5.4 0 11-3.4 15.1-7.9 4.7-5.1 4.7-12.4 4.7-19.3 0-6.6 0-14.2-4.9-19.3-4.2-4.4-9.6-4.8-15-4.8h-8.8v12.4c0 7.3-6.4 13.4-13.7 13.4H51.2c-6 0-11.2 4.9-11.2 11.2v24.6c0 5.8 5 10.3 11.2 12.4 4.8 1.7 10.2 6 13.9 6zm9.7-7.7c-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6 2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6z" />
          <defs>
            <linearGradient id="python_blue" x1="10" y1="10" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#387EB8" />
              <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="python_yellow" x1="60" y1="60" x2="115" y2="115" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFE873" />
              <stop offset="1" stopColor="#FFD43B" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 128 128" className={className} fill="none">
          <path d="M47.2 98.7c2.1 1.2 4.9 2.2 8.3 3 13.7 3.3 35.8 2.2 48.7-4.4-6.3 3.9-20.7 7.7-36.9 7.7-9.5 0-16.7-1.3-20.1-6.3zm-6-15.6c1.6 1.1 3.8 2 6.6 2.8 13.5 3.8 39.8 4.3 56.4-3.5-9 3.6-24.8 6.4-40.8 6.4-9.9 0-17.7-1.3-22.2-5.7zm38.1-23.7c4.6 5.4-1.2 12.8-1.2 12.8s11.5-6.1 6.2-14.8c-5-8.2-10.6-12.7-2.1-22.7-11.8 3.5-17.2 15.1-2.9 24.7z" fill="#E76F00" />
          <path d="M85.7 75.6c12.2-6.5 6.6-13.8 6.6-13.8s1.6 5.2-6.9 9.8c-10.9 5.8-21.7 5.1-37.4 1.4-12.9-3.1-4.7-9.6-4.7-9.6s-9.9 4.3 1.9 9.8c14.2 6.6 26.6 5.8 40.5 2.4z" fill="#5382A1" />
          <path d="M57.4 34.6c4.6 4.7 1.8 11.2 1.8 11.2s8-5.3 3.5-12.4c-4.7-7.4-6.9-10.9 4.2-22.4-14.5 4.3-19.3 14.1-9.5 23.6z" fill="#E76F00" />
          <path d="M96.7 106.8c-12 8.1-43.5 9-60.6 1-4.7-2.2-12.3-7.5-6.7-13.4 5.9-6.3 15-5.9 15-5.9s-7 1.5-10.6 5.1c-4.2 4.2.3 8.3 5.4 10.3 14.8 5.7 42.9 6.2 56.9.5 0 0-.6 1.4 0 2.4z" fill="#5382A1" />
        </svg>
      );

    case 'mysql':
      return (


        <svg xmlns="http://www.w3.org/2000/svg"
          width="672" height="456" viewBox="0 0 672 456">

          <g fill="none" stroke="#00758F"
            stroke-width="8" stroke-linecap="round"
            stroke-linejoin="round">

            <path d="M444 22
      C427 4 401 -3 400 12
      C398 25 417 40 425 59
      C432 78 437 96 448 105
      C439 128 437 151 443 174
      C447 190 459 198 466 190
      C469 181 469 163 475 151
      C485 181 499 200 518 213
      C505 199 495 179 490 161
      C508 182 528 194 548 204
      C570 215 592 220 611 234
      L658 269
      C641 264 625 256 612 244
      C626 239 638 235 650 232
      C635 216 616 198 591 190
      C581 187 576 181 571 169
      L551 126
      C534 87 503 55 467 32
      C459 27 449 25 444 22 Z"/>

            <path d="M454 49 Q464 50 470 59 L464 68"
              stroke-width="5" />
          </g>


          <text x="-4" y="416"
            font-family="Arial, Helvetica, sans-serif"
            font-size="216"
            font-weight="400"
            letter-spacing="-8"
            fill="#00758F">My</text>


          <text x="286" y="416"
            font-family="Arial, Helvetica, sans-serif"
            font-size="216"
            font-weight="400"
            letter-spacing="-8"
            fill="#F29111">SQL</text>


          <text x="632" y="416"
            font-family="Arial, Helvetica, sans-serif"
            font-size="27"
            font-weight="bold"
            fill="#F29111">™</text>

        </svg>


      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'vscode':
      return (

        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="vscodeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#33B5F7" />
              <stop offset="100%" stop-color="#007ACC" />
            </linearGradient>
          </defs>

          <path
            fill="url(#vscodeBlue)"
            d="M17.5 0.5a1.5 1.5 0 0 1 1.1.1l4.5 2.2a1.5 1.5 0 0 1 .9 1.4v15.6a1.5 1.5 0 0 1-.9 1.4l-4.5 2.2a1.5 1.5 0 0 1-1.7-.3L7.4 14.8 3.3 18a1.5 1.5 0 0 1-2-.1l-.8-.8a1.5 1.5 0 0 1 0-2.2L4.4 12 .5 9.1a1.5 1.5 0 0 1 0-2.2l.8-.8a1.5 1.5 0 0 1 2-.1l4.1 3.2 9-8.3a1.5 1.5 0 0 1 1.1-.4ZM17 5.1 9.8 12l7.2 6.9V5.1ZM3.8 8.9 1.4 11l2.4 2.1L6.2 12 3.8 8.9Z"
          />
        </svg>

      );

    case 'antigravity':
      return (
        <svg viewBox="0 0 200 200" className={className}>
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3185FF" />
              <stop offset="25%" stopColor="#35B9F4" />
              <stop offset="48%" stopColor="#67D95A" />
              <stop offset="65%" stopColor="#FFD34B" />
              <stop offset="80%" stopColor="#FF7043" />
              <stop offset="100%" stopColor="#F44872" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" rx="32" fill="#111216" />
          <path
            d="M44 151
               C58 141 65 121 72 94
               C79 67 87 47 100 47
               C113 47 121 67 128 94
               C135 121 142 141 156 151
               C160 154 157 157 152 153
               C133 144 121 122 112 111
               C108 106 104 104 100 104
               C96 104 92 106 88 111
               C79 122 67 144 48 153
               C43 157 40 154 44 151 Z"
            fill="url(#rainbow)"
            stroke="none"
          />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M3.89 15.672L6.255.986A.638.638 0 0 1 7.37.712l3.418 6.425-6.898 8.535z" fill="#FFA000" />
          <path d="M12.91 8.27l1.79-3.428a.638.638 0 0 1 1.157.086l4.254 10.744-7.2-7.402z" fill="#F57C00" />
          <path d="M3.89 15.672l8.76 4.935a1.28 1.28 0 0 0 1.258 0l8.73-4.935-2.5-12.87a.64.64 0 0 0-1.09-.327L3.89 15.672z" fill="#FFCA28" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#FF1744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );

    case 'excel':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="3" width="20" height="18" rx="3" fill="#107C41" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'tally':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="3" width="20" height="18" rx="3" fill="#E65100" />
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">T</text>
        </svg>
      );

    case 'hardware':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    default:
      return <div className="w-6 h-6 bg-brand-neon rounded-full" />;
  }
};
