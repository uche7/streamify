import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "streamifty-yellow": "#facc15",
        "streamifty-grey": "#80808080",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        streamifySFProDisplay: ["var(--font-sf-pro-display)"],
        streamifyCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        MobileScreen: { max: "480.5px" },
        TabletScreen: { min: "480.5px", max: "1024.5px" },
        DesktopScreen: { min: "1024.5px" },
      },
    },
  },
  plugins: [],
};
export default config;
