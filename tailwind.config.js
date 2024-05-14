/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/components/Avatar.jsx",
    "./src/components/Projects.jsx",
    "./src/**/*.{html,js}",
        './node_modules/@nextui-org/theme/dist/components/(avatar|modal|card|).js'
  ],

  theme: {
    extend: {
      fontFamily: {
        Cormorant: ["Cormorant Garamond", "serif"],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Caslon: ["Libre Caslon", "Text", "serif"],
        Titillium: ["Titillium Web", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        "page-black": "#101010",
        "page-white": "#FFFFFF",
        "borderProject":"#FE9835",

        "background-Modal":"#0d0d0d",
        "text-modal":"#666654",
      },
    },
  },
  plugins: [],
};
