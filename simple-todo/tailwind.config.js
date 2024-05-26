/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "3rem",
        lg: "5rem",
        xl: "7rem",
        "2xl": "9rem",
      },
      center: true,
    },
  },
  plugins: [],

  safelist: ["bg-[#4886FF]", "bg-[#FF5E48]"],
};
