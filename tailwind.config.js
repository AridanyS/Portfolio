/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/components/Avatar.jsx",
    "./src/components/Projects.jsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,react}",
        './node_modules/@nextui-org/theme/dist/components/(avatar|modal|card|coverflow).js'
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
        "text-modal-light":"#b3b2a3",
        "text-modal-darker":"#3f3f35",
        "text-modal-Plusdarker":"#373730",

        "background-DarkBrown": "#1C1C17",

        "pink-dark":"#c3719e",
        "pink-Plusdark":"#68334b",
        "pink-light":"#e5bcd4",

      },
    },
  },
  plugins: [],
};
