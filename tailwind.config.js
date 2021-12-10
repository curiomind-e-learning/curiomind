module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: '#7F7F7F',
        whitecolor: '#F7F7F7',
        greycolor: '#C4C4C4',

      },
      fontFamily: {
        sans: ['sans-serif', 'Pacifico'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
