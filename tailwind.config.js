/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #C9B4831A, #FFFFFF)",
        "gradient-primary":
          "linear-gradient(to right, #004D45, #004D45E5, #004D45CC)",
      },
      colors: {
        primary: "#FBF7F1",
        secondary: "#004D45",
        border: "#202124",
        orange_200: "#D7BE94",
        orange_300: "rgba(201, 180, 131, 0.2)",
        green_200: "#3E746F",
        yellow_100: "#FFBF00",
        yellow_200: "#C9B48333",
        gray_100: "#3B3D40",
        gray_200: "#E0DCD1",
      },
      boxShadow: {},
      dropShadow: {
        card: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
