/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Inter", ...defaultTheme.fontFamily.sans],
   },
   colors: {
    primary: "#BF0001",
   },
  },
 },
 plugins: [],
};
