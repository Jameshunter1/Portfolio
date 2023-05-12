/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        secondary: "#5572af",
        "secondary-light": "rgba(36, 36, 36, 0.4)",
        "secondary-dark": "rgba(36, 36, 36, 0.8)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
