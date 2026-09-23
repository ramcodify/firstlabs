/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#F7F6F2',
          surface: '#FFFFFF',
          'surface-warm': '#EFECE6',
          'surface-card': '#FAF9F5',
          border: '#E5E2D9',
          'border-strong': '#D5D1C4',
          text: '#171717',
          muted: '#686868',
          subtle: '#8C8C88',
          accent: '#3446A8',
          'accent-hover': '#283685',
          'accent-light': 'rgba(52, 70, 168, 0.08)',
          amber: '#C79545',
          'amber-light': 'rgba(199, 149, 69, 0.1)',
          dark: '#151515',
          'dark-surface': '#1F1F1F',
          'dark-border': '#2D2D2D',
          'dark-muted': '#9E9E9E',
          success: '#1B8049',
          'success-light': '#EBF7EE',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 2px 8px -2px rgba(23, 23, 23, 0.05), 0 1px 3px 0 rgba(23, 23, 23, 0.03)',
        'card-hover': '0 8px 24px -4px rgba(23, 23, 23, 0.08), 0 2px 6px -1px rgba(23, 23, 23, 0.04)',
        'modal': '0 24px 60px -12px rgba(23, 23, 23, 0.25), 0 12px 24px -6px rgba(23, 23, 23, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
