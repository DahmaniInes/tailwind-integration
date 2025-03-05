/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*", "./src/*"],
  theme: {
      extend: {
          colors: {
              primary: "#314584",
              secondary: "#f13946",
              tertiary: "#6e757a",
          },
          fontFamily: {
              body: ["Work Sans"],
          },
          fontSize: {
              navSize: "24px",
              heroSize: "74px",
              pSize: "18px",
          },
      },
  },

  plugins: [],
}

