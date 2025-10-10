/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#FBF7F1",
        secondary: "#004D45",
        border: "#202124",
        orange_200: "#D7BE94",
      },
      boxShadow: {},
      dropShadow: {},
    },
  },
  plugins: [],
};
