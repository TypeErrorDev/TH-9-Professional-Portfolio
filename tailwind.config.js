/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        "body-tw": "#17171F", // super dark almost black // rgb(23, 23, 31) // CMYK (26%, 26%, 0%, 88%)
        "selected-text-tw": "#A3A3FF", // light purple // rgb(163, 163, 255) // CMYK (36%, 36%, 0%, 0%)
        "theme-tw": "#3F3FFF", // bright dark blue // rgb(63, 63, 255) // CMYK (75%, 75%, 0%, 0%)
        "nav-tw": "#404053", // Dark purple grey // rgb(64, 64, 83) // CMYK (23%, 23%, 0%, 67%)
        "secondary-tw": "#9191A4", // super white grey // rgb(145, 145, 164) // CMYK (12%, 12%, 0%, 36%)
        "badge-tw": "#3F3F51", // Darkish grey // rgb(63, 63, 81) // CMYK (22%, 22%, 0%, 68%)
        "input-border-tw": "#565666", // Light grey // rbg(86, 896, 102) // CMYK (16%, 16%, 0%, 60%)
        "input-tw": "#2A2A35", // Dark blue almost black // rgb(42, 42, 53) // CMYK (21%, 21%, 0%, 79%)
        "alt-color": "#1789fc", // light blue // rgb(23, 137, 252) // CMYK (91%, 46%, 0%, 1%)
        "black-tw": "#000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
