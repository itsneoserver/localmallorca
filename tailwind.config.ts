import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        card: "var(--card)",
        card2: "var(--card2)",
        line: "var(--line)",
        line2: "var(--line2)",
        text: "var(--text)",
        text2: "var(--text2)",
        text3: "var(--text3)",
        gold: "var(--gold)",
        gold2: "var(--gold2)",
        wa: "var(--wa)",
      },
      fontFamily: {
        sans: ["var(--ff)", "system-ui", "sans-serif"],
        serif: ["var(--fs)", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 8px 30px -10px rgba(201,169,110,.45)",
        soft: "0 8px 30px -16px rgba(0,0,0,.6)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, var(--gold) 0%, var(--gold2) 100%)",
      },
      borderRadius: { xl2: "1.25rem" },
      transitionTimingFunction: {
        soft: "cubic-bezier(.22,.9,.32,1)",
      },
    },
  },
  plugins: [],
};
export default config;
