/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Example sans-serif fonts
        serif: ["Georgia", "Times", "serif"], // Example serif fonts
        mono: ["Courier New", "monospace"], // Example monospace fonts
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "retro"],
  },
};
