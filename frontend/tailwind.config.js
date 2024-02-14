/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        25:"6.5rem",
        30: "8rem",
        65: "17rem",
        70: "18rem",
        74: "19.3rem",
        75: " 20rem",
        90: "22rem",
        100: "25rem",
        110: "28rem",
        120: "30rem",
        130: "32rem",
        150: "40rem",
        0.95: "95%",
        0.98: "98%"
      },
      colors:{
        body:{
          primary: "#fff2e6",
          secondary: "#f5f5f5",
        },
        footer: {
          primary: "#ffeee6",
          secondary: "#FFC0CB",
        },
      },
    },
  },
  plugins: [],
}

