/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      bglat: { min: "1024px", max: "1365px" },
      lat: { min: "769px", max: "1024px" },
      tab: { min: "321px", max: "768px" },
    },
  },
  plugins: [],
};
