export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        /* Background */
        primaryBg: 'var(--primaryBg)',
        primaryMainBg: 'var(--primaryMainBg)',

        /* Text */
        primaryTextColor: 'var(--primaryTextColor)',
        /* Logo */
        primaryLogoTextColor: 'var(--primaryLogoTextColor)',

        /* Button */
        primaryButtonBg: 'var(--primaryButtonBg)',
        primaryButtonHoverBg: 'var(--primaryButtonHoverBg)',
        primaryButtonShadow: 'var(--primaryButtonShadow)',
        primaryButtonShadowSelected: 'var(--primaryButtonShadowSelected)',
        primaryButtonShadowHover: 'var(--primaryButtonShadowHover)',

        /* Form */
        primaryFormColor: 'var(--primaryFormsColor)',

        /* Option */
        primaryOptionSelected: 'var(--primaryOptionSelected)',
        primaryOptionHover: 'var(--primaryOptionHover)',
      }
    },
  },

  plugins: [],
}

