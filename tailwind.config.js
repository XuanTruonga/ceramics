/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        "blue": "#007bff",
        "blueBold": "#003d8f",
        "pinkLight": "#f3eee4",
        "indigo": "#6610f2",
        "purple": "#6f42c1",
        "pink": "#f3eee4",
        "red": "#ff2c42",
        "orange": "#fd7e14",
        "yellow": "#ffc107",
        "green": "#28a745",
        "blueDark": "#3b5998",
        "cyan": "#17a2b8",
        "white": "#fff",
        "gray": "#6c757d",
        "grayDark": "#343a40",
        "primary": "#ca6f04",
        "primaryLight": "#fb9620",
        "text": "#ccc",
        "success": "#28a745",
        "info": "#17a2b8",
        "warning": "#ffc107",
        "danger": "#dc3545",
        "light": "#f8f9fa",
        "dark": "#343a40",
      }
    },
  },
  plugins: [],
}

