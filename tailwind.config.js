/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        'xl': "1260px",
      },
    },
    extend: {
      colors: {
        black: "#000",
        light: "#fff",
        gray: "#424551",
        storm: "#787a80",
        ebony: "#1e212c",
        primary: "#ff5a30",
        athens: "#f4f5f7",
        active: "#fc3300",
      },
      boxShadow: {
        main: "0 80px 80px -20px rgba(154, 156, 165, 0.08), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 4px 4px -4px rgba(30, 33, 44, 0.03)",
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
