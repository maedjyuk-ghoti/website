/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celtic: {
          dark: '#0e1d15',
          green: '#1a3a2a',
          emerald: '#23533c',
          lightGreen: '#31694d',
          gold: '#c89d52',
          goldHover: '#b58a40',
          cream: '#fbf9f4',
          creamDark: '#f3ece1',
          slate: '#2c3e35',
          sand: '#e8dfd1'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
