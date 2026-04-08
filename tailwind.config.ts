import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void:        '#0A0B09',
        undergrowth: '#141510',
        decay:       '#1E1F1B',
        ash:         '#3A3C34',
        fog:         '#6E6F66',
        bone:        '#C4BEAF',
        'null-white':'#E5DFD0',
        moss:        '#596247',
        rust:        '#7A4E3A',
        'moss-bright':'#7A8D62',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono:    ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.18' },
          '50%':      { opacity: '0.28' },
        },
        'scanbar': {
          '0%'  : { top: '-5%',  opacity: '0' },
          '10%' : { opacity: '0.4' },
          '90%' : { opacity: '0.4' },
          '100%': { top: '105%', opacity: '0' },
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.06s step-end infinite',
        'fade-up':      'fade-up 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
        'fade-in':      'fade-in 0.8s ease forwards',
        'breathe':      'breathe 14s ease-in-out infinite',
        'scanbar':      'scanbar 5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
