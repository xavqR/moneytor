export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primaryBg)',
        primaryBgDark: 'var(--primaryBgDark)'
      }
    },
  },

  plugins: [],
}

