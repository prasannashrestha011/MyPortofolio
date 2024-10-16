import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "#f0f0f0", // Light gray color for the gray theme
          200: "#d0d0d0", // Another shade of gray, if needed
        },
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
