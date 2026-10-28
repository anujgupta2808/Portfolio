/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#0B0B0D',
          card: '#101012',
          cardHover: '#151518',
        },
        brand: {
          neon: '#FF1744',
          secondary: '#E50924',
          dark: '#8F001B',
          glow: 'rgba(255, 23, 68, 0.4)',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#B8B8C2',
          muted: '#777780',
        },
        border: {
          subtle: '#29292F',
          glow: 'rgba(255, 23, 68, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
        handwriting: ['"Reenie Beanie"', '"Caveat"', 'cursive'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(255, 23, 68, 0.35)',
        'glow-md': '0 0 20px rgba(255, 23, 68, 0.45)',
        'glow-lg': '0 0 35px rgba(255, 23, 68, 0.55)',
        'card-glow': '0 8px 30px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 23, 68, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
