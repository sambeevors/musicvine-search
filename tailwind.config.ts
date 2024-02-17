import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["brandon-grotesque", ...fontFamily.sans],
      },
      colors: {
        brand: {
          main: {
            DEFAULT: "#f23d75",
            bg: {
              DEFAULT: "#151919",
              secondary: "#323434",
              hover: "#232525",
            },
            text: {
              DEFAULT: "#fff",
              "search-result": "#cdd2d1",
              link: "#f23d75",
            },
            border: {
              DEFAULT: "#323434",
              focus: "#6f7475",
            },
          },
        },
      },
      animation: {
        activate: "activate 0.3s ease-out",
      },
      keyframes: {
        activate: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;
