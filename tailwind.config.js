/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        coral: 'rgb(var(--color-coral) / <alpha-value>)',
        sage: 'rgb(var(--color-sage) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};