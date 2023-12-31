/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#030304",
        yellowish: "#FFFF00",
        gray: " #999999",
      },
    },
  },
  plugins: [],
};
