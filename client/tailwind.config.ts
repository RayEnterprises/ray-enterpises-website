import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px", // Extra small devices (phones)
        sm: "600px", // Small devices (tablets)
        md: "900px", // Medium devices (small laptops)
        cm: "960px",
        lg: "1200px", // Large devices (laptops and desktops)
        xl: "1536px", // Extra large devices (large desktops and TVs)
      },
      backgroundImage: {
        greenbg: "url('/images/greenbg.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        footer: "#2e2e2e",
        light: {
          primary: {
            DEFAULT: "#72c05b",
          },
          secondary: {
            DEFAULT: "#070d07",
            100: "#e7ddbe",
          },
        },
        dark: {
          primary: {
            DEFAULT: "#72c05b",
          },
          secondary: {
            DEFAULT: "#070d07",
            100: "#6D4E2B",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-animation-delay")],
};

export default config;
