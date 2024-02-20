/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2563eb",
        primaryText: "#1c1917",
        secondaryText: "#57534e",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
