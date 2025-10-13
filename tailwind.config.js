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
        orange_300: "rgba(201, 180, 131, 0.2)",
        green_200: "#3E746F",
        yellow_100: "#FFBF00",
        gray_100: "#3B3D40",
        gray_200: "#E0DCD1",
      },
      boxShadow: {},
      dropShadow: {},
    },
  },
  plugins: [],
};
