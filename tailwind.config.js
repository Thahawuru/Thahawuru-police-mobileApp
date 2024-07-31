/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["monospace"],
      },
      colors: {
        "primary-blue": "#010177df",
        "secondry-blue":"#4A249D",
        "secondry-2" :"#F2EEFB" 
      },
    },
  },
  plugins: [],
};
