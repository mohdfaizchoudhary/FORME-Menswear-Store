import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#202020",
        ivory: "#FFF5EB",
        harvest: "#F05A28",
        charcoal: "#202020",
        sage: "#F8E8DB",
      },
    },
  },
  plugins: [],
} satisfies Config;