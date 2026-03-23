import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0C',
        surface: '#141414',
        'surface-2': '#1E1E1E',
        border: '#2A2A2A',
        text: '#EFEFEF',
        muted: '#888888',
        accent: '#4ade80',
        'accent-dim': '#22c55e',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'grid-subtle':
          'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
    },
  },
  plugins: [],
}

export default config
