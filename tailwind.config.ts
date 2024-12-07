import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"], // Enable dark mode with a 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
      },
      colors: {
        destructive: {
          DEFAULT: "#E63946", // Your error red color
          hover: "#D62839", // Darker red for hover states
          text: "#FFFFFF", // White text on destructive background
        },
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(14, 124, 123)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};

export default config;

// #3A3D98
