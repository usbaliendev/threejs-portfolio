/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#fafafa",
        tertiary: "#181818",
        accent: "#168bf6",
        "black-100": "#0D0D0D",
        "black-200": "#0A0A0A",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herogb1.jpg')",
      },
      animation: {
        text: "text 5s ease infinite",
        twatterfall: "waterfall 5s ease infinite",
        "waving-hand": "wave 2s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        waterfall: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom center",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [],
};
