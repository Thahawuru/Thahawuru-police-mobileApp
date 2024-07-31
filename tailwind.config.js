/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["monospace"],
      },
      colors: {
        "primary-blue": "#0F0D4B",
        "secondry-blue":"#0F0D4B",
        "secondry-1":"#0F0D4B",
        "secondry-2" :"#EBF5FF" 
      },
    },
  },
  plugins: [],
};
