import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#173328',
        forest: '#2F5A46',
        sage: '#91A68B',
        ivory: '#F7F5EF',
        sand: '#E9E1D3',
        gold: '#C8A96B',
        body: '#46534B',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 51, 40, 0.12)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px rgba(20, 36, 28, 0.18)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(200, 169, 107, 0.18), transparent 40%), radial-gradient(circle at 20% 20%, rgba(145, 166, 139, 0.18), transparent 30%), linear-gradient(180deg, rgba(247, 245, 239, 0.88) 0%, rgba(233, 225, 211, 0.95) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.7' },
          '50%': { transform: 'translate3d(0, -18px, 0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
