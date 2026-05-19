import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#1F2B3D',
        forest: '#6E8FB6',
        sage: '#D7E6F2',
        ivory: '#F8F5EF',
        sand: '#EEF3F8',
        gold: '#B7C8EA',
        lavender: '#D38BE8',
        body: '#354256',
      },
      boxShadow: {
        soft: '0 22px 60px rgba(93, 123, 162, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.34), 0 24px 70px rgba(93, 123, 162, 0.18)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top, rgba(183, 200, 234, 0.5), transparent 38%), radial-gradient(circle at 18% 18%, rgba(215, 230, 242, 0.9), transparent 28%), linear-gradient(180deg, rgba(248, 245, 239, 0.92) 0%, rgba(238, 243, 248, 0.96) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.68' },
          '50%': { transform: 'translate3d(0, -14px, 0)', opacity: '0.94' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.78' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
