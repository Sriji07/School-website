/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in the src folder
    "./public/**/*.html", // Ensures HTML templates are scanned
  ],
  theme: {
    extend: {
      colors: {
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
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
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
        fadeIn: "fadeIn 1s ease-in",
        slideIn: "slideIn 1s ease-in-out",
        slideInFromTop: "slideInFromTop 1s ease-in-out",
        slideInFromBottom: "slideInFromBottom 1s ease-in-out",
        zoomIn: "zoomIn 0.8s ease-out",
        ping: "ping 6s infinite",
        pulse: "pulse 4s infinite",
        spin: "spin 10s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
