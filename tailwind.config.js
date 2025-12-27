/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        nft: {
          dark: '#0A0A0A',
          purple: '#6B46C1',
          'purple-light': '#9333EA',
        },
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(180deg, #0A0A0A 0%, #1a0b2e 30%, #16213e 60%, #0f3460 100%)',
        'gradient-button': 'linear-gradient(135deg, #6B46C1 0%, #9333EA 100%)',
      },
    },
  },
  plugins: [],
}

