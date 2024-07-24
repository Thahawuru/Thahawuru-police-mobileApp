/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["monospace"],
      },
      colors: {
        "primary-blue": "#010177df", // Example default color
      },
    },
  },
  plugins: [],
};
