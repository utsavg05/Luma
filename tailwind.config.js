/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "luma-bg": "#FAF7F2",

        // Text
        "luma-text-dark": "#2E2E2E",
        "luma-text-medium": "#8A8A8A",

        // Accents
        "luma-accent-orange": "#FF8A5B",
        "luma-accent-purple": "#6C63FF",
        "luma-accent-blue": "#5BC0EB",
        "luma-accent-green": "#4CAF50",
      },
    },
  },
  plugins: [],
};
