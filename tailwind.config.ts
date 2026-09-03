import type { Config } from "tailwindcss";

// Design tokens for Disc Centers of America – Henderson (White / Red / Grey / Blue).
// Loaded by Tailwind v4 through `@config` in app/globals.css.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E", // primary CTA + urgency accents (DCOA red)
          reddark: "#A50D25", // CTA hover
          blue: "#0E3A5E", // headings, structure, trust (deep navy)
          bluemid: "#1E6FB8", // links, secondary accents, icon fills
          bluesoft: "#EAF2F9", // soft blue fills / highlight backgrounds
          ink: "#1F2A37", // body text
          grey: "#5B6773", // secondary text
          line: "#E4E9EF", // borders / hairlines
          surface: "#F5F7FA", // alt section background
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      screens: {
        nav: "900px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,58,94,0.06), 0 10px 30px -14px rgba(14,58,94,0.22)",
        lift: "0 14px 30px -12px rgba(200,16,46,0.45)",
      },
    },
  },
};

export default config;
