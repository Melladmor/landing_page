import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-yellow": "linear-gradient(to right, #FF9900, #F2CB00)",
      },
      colors: {
        primary: "#16205F",
        orange: "#F99600",
        primary_yellow: "#FFF856",
        primary_gray: "#F9F9F9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
