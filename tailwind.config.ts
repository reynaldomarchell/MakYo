import type { Config } from "tailwindcss";

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
      fontFamily: {
        magra: ["var(--font-magra)"],
        linden_hill: ["var(--font-linden_hill)"],
        mulish: ["var(--font-mulish)"],
        lexend_deca: ["var(--font-lexend_deca)"],
      },
    },
  },
  plugins: [],
};
export default config;
