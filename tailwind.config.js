/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "luma-bg": "#FAF7F2",
        "luma-accent-orange": "#FF8A5B",
        "luma-accent-purple": "#D4A5D4",
        "luma-accent-blue": "#A8D5E8",
        "luma-accent-green": "#C8D96E",
        "luma-text-dark": "#2E2E2E",
        "luma-text-medium": "#8B8B8B",
      },
      borderRadius: {
        "2xl": "16px",
      },
    },
  },
  plugins: [],
}