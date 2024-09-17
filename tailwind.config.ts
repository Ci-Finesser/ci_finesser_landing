import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './public/assets/fonts/**/*.{ttf,woff,woff2,otf}'
  ],
  theme: {
    extend: {
      screens: {
        'sd': { 'min': '760px', 'max': '1282px' },
      },
      fontFamily: {
        'graphik': ['Graphik'],
        'satoshi': ['Satoshi'],
        'satoshi-bold': ['SatoshiBold']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-100% - 3rem))" },
      },
    },
    animation: {
      scroll: "scroll 30s linear infinite",
    },
  },
  plugins: [],
};
export default config;
