/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Cormorant': ["Cormorant Garamond", 'serif'],
      },
      colors: {
        "page": "#101010",
      },
    },
  },
  plugins: [],
};
