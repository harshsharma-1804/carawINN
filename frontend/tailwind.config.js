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
        160: "45rem",
        170: "50rem",
        180: "55rem",
        190: "60rem",
        200: "65rem",
        220: "70rem",
        240: "75rem",
        250: "80rem",
        270: "85rem",
        960: "240rem",
        0.2: "20%",
        0.8: "80%",
        0.9: "90%",
        0.95: "95%",
        0.98: "98%",
      },
      colors:{
        body:{
          primary: "#fff2e6",
          secondary: "#ffe5cc",
          tertiary: "#ffdccc",
        },
        footer: {
          primary: "#ffeee6",
          secondary: "#FFC0CB",
        },
        home: {
          primary: "#ab9696",
        },
        button:{
          primary: "bh-red-800",
          secondary: "#ff9999",
          tertiary: "#ffcccc",
        },
      },
    },
  },
  plugins: [],
}

