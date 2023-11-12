import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        myOrange: {
          50: "#fff8e6",
          100: "#ffebcc",
          200: "#ffd699",
          300: "#ffc266",
          400: "#ffb733",
          500: "#f48c2a", // Base color
          600: "#d17a26",
          700: "#ad661f",
          800: "#895219",
          900: "#733f14",
        },
      },
    },
  },
  plugins: [],
}
export default config
