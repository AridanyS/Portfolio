/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/components/Avatar.jsx",
    "./src/components/Projects.jsx",
    "./src/components/NavBar.jsx",
    "./src/components/Technologies.jsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,react}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|modal|card|coverflow|navbar|link|accordion).js",
  ],

  theme: {
    extend: {
      backgroundImage: {
        fondo:
          "linear-gradient(to left, #3f3f35, #48483d, #525244, #5c5c4c, #666654)",
      },
      fontFamily: {

        RobotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        "page-black": "#101010",
        "page-white": "#FFFFFF",
        borderProject: "#FE9835",

        "background-Modal": "#0d0d0d",
        "between": "#525244",
        "between-light": "#575748",
        "text-modal": "#666654",
        "text-modal-light": "#b3b2a3",
        "text-modal-darker": "#3f3f35",
        "text-modal-Plusdarker": "#373730",
        "grey-semidarker": "#AEAD88",
        "background-DarkBrown": "#1C1C17",
        "background-page": "#2e2e28",

        "pink-dark": "#c3719e",
        "pink-Plusdark": "#68334b",
        "pink-light": "#e5bcd4",

        gecko: "#02a4a2",
        "gecko-pink": "#e5a6af",

        "hard-pink": "#6d304d",
        "not-hard-pink": "#8f3f65",

        "green-rocket": "#0f766e",
        "blue-rocket": "#9ba6e7",

        "pink-airbnb": "#fe5b5f",
      },
    },
  },
  plugins: [],
};
