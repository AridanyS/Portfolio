/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'index.html'],
  theme: {
    extend: {
      colors: {
        papayawhip: { /* En el caso de querer cambiar de color. Usa primero dark: para aplicarlo en el modo oscuro */
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
    },
  },
  plugins: [],
}

