/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      cursor: {
        pin: 'url(assets/icons/icon-pin.svg), pointer',
      },
    },
  },
  plugins: [],
};
