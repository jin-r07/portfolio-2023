import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        "MADETOMMY_Regular" : ["MADETOMMY_Regular", "Regular"]
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".clip-menu": {
          "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)",
        }
      })
    },
  ],
}

export default config;
