import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        destructive: "var(--destructive)",
        accent: "var(--accent)",
        card: "var(--card)",
        // Add more as needed
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
