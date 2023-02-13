/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {},
  theme: {
    extend: {},
    fontFamily: {
      popp: ["Poppins", "sans - serif"],
      sol: ["Solway", " serif"],
    },
  },

  plugins: [],
};
