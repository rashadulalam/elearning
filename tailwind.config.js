/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      }
    },
  },
  plugins: [],
}

