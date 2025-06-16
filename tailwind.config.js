/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
