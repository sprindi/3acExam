/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1320',
        surface: '#171c2c',
        card: '#1d2436',
        card2: '#222b41',
        border: '#2c3550',
        line: '#39456b',
        blue: '#5b9bff',
        green: '#2fd6a6',
        orange: '#ff9a4d',
        yellow: '#ffcf5c',
        red: '#ff6b6b',
        purple: '#b08bff',
        text: '#eef2fa',
        soft: '#c4cce0',
        muted: '#8893ad',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        wrap: '860px',
      },
    },
  },
  plugins: [],
}
