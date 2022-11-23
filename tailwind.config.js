module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#222222"
      },
      screens: {
        "mobile": { "raw": "(max-width: 650px)" }
      },
      width: {
        "30": "7.5rem"
      }
    },
  },
  plugins: [],
}
