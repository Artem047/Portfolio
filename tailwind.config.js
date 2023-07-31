/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      bglat: { max: "1365px" },
      lat: { max: "1024px" },
      tab: { max: "768px" },
    },
  },
  plugins: [],
};
