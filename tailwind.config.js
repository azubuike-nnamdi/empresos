/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikSemiBold: ["Rubik-SemiBold", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
        rubikExtraLight: ["Rubik-ExtraLight", "sans-serif"],
        rubikBlack: ["Rubik-Black", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#EBE3E3",
          200: "#0061FF1A",
          300: "#C4261A",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
}

