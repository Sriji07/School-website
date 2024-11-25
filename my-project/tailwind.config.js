/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all components in the src folder are scanned
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for gradients and design
        teal: {
          100: "#e6fcf5",
          300: "#81e6d9",
          500: "#38b2ac",
          600: "#319795",
          700: "#2c7a7b",
        },
        blue: {
          100: "#ebf8ff",
          400: "#63b3ed",
          600: "#3182ce",
          800: "#2b6cb0",
          900: "#2a4365",
        },
        pink: {
          100: "#ffe4e6",
          400: "#f687b3",
        },
        yellow: {
          200: "#faf089",
          400: "#ecc94b",
          500: "#d69e2e",
        },
        green: {
          100: "#f0fff4",
          600: "#38a169",
        },
        purple: {
          500: "#9f7aea",
        },
      },
      fontFamily: {
        // Custom fonts
        display: ["Poppins", "sans-serif"], // For headings
        body: ["Roboto", "sans-serif"], // For body text
      },
      keyframes: {
        // Custom animations
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: 0 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        // Using custom animations
        fadeIn: "fadeIn 1s ease-in",
        slideIn: "slideIn 1s ease-in-out",
        zoomIn: "zoomIn 0.8s ease-out",
        ping: "ping 6s infinite",
        pulse: "pulse 4s infinite",
        spin: "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
