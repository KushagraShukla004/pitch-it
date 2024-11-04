import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"], // Enable dark mode with a 'dark' class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        md: "900px",
      },
      colors: {
        background: {
          DEFAULT: "#F2F4F5", // Light mode primary background
          dark: "#121212", // Dark mode primary background
          card: "#FFFFFF", // Light mode card background
          cardDark: "#2D2D2D", // Dark mode card background
        },
        primary: "#0E7C7B", // Teal for highlights/buttons
        secondary: "#3A3D98", // Deep blue for accents
        accent: {
          yellow: "#FFCB47", // Soft golden yellow for accent elements
        },
        error: "#E63946", // Red for error messages
        text: {
          primary: "#1B1F23", // Dark gray for main text
          light: "#E0E0E0", // Light gray for dark mode text
          heading: "#FFFFFF", // White for headings in dark mode
          muted: "#A0A0A0", // Muted gray for less important text
        },
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
