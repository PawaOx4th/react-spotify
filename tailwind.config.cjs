/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#22C55E',
        dark: '#0F172A',
        mid: '#ABB8C9',
        light: '#FAFAFA',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
