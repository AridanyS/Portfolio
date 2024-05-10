/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Cormorant': ["Cormorant Garamond", 'serif'],
        'Roboto': ["Roboto", 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Caslon': ['Libre Caslon', 'Text', 'serif'],
        'Titillium': ['Titillium Web', 'sans-serif'],
        'work-sans':['Work Sans', 'sans-serif'],
      },
      colors: {
        "page": "#101010",
      },
    },
  },
  plugins: [],
};
