/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary :"#000000",
        secondary :"#0f8466"
      }
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}