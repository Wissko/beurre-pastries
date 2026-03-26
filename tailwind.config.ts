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
        'bg': '#faf8f4',
        'surface': '#f2ede4',
        'dark': '#1a1410',
        'gold': '#b8975a',
        'blush': '#e8d5c4',
        'accent': '#8b6f47',
        'text-main': '#2d2318',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
