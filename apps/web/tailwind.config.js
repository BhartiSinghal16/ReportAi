/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        soft: {
          green:  "#f0fdf4",
          amber:  "#fffbeb",
          red:    "#fff1f2",
          blue:   "#eff6ff",
          purple: "#faf5ff",
        }
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        card: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)",
      }
    },
  },
  plugins: [],
}