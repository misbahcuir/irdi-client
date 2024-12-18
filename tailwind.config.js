/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "hero-m-height": "calc(100vh - 68px)",
        "hero-l-height": "calc(100vh - 84px)",
      },
      colors: {
        primary: "#028182",
        secondary: "#ffffff",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#028182",
          secondary: "#ffffff",
          accent: "#028182",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        dark: {
          primary: "#028182",
          secondary: "#ffffff",
          accent: "#028182",
          neutral: "#1f2937",
          "base-100": "#1d232a",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
