/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
(module.exports = {
    content: [
      "./index.html",
      "./src/components/Avatar.jsx",
      "./src/components/Projects.jsx",
      "./src/components/NavBar.jsx",
      "./src/components/Technologies.jsx",
      "./src/components/FooterL.jsx",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{html,js,react}",
      "./node_modules/@nextui-org/theme/dist/components/(avatar|modal|card|coverflow|navbar|link|accordion|tooltip|button).js",
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

          "background-Modal": "#0d0d0d",
          between: "#525244",
          "between-light": "#575748",
          "text-modal": "#666654",
          "text-modal-light": "#b3b2a3",
          "text-modal-darker": "#3f3f35",
          "text-modal-Plusdarker": "#373730",
          "grey-semidarker": "#AEAD88",
          "background-DarkBrown": "#1C1C17",
          "background-page": "#2e2e28",
        },

        animation: {
          "text-shake": "text-shake 1s ease 1",
        },
        keyframes: {
          "text-shake": {
            "15%": {
              transform: "translateX(5px)",
            },
            "30%": {
              transform: "translateX(-5px)",
            },
            "50%": {
              transform: "translateX(3px)",
            },
            "80%": {
              transform: "translateX(2px)",
            },
            "100%": {
              transform: "translateX(0)",
            },
          },
        },
      },
    },
  }
),
  {};
