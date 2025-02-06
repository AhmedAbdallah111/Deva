/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-servises": "url('/Public/images/')",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px white", // Adjust stroke size and color
          "text-stroke": "1px white",
        },
        ".text-transparent": {
          color: "transparent",
        },
      });
    },
  ],
};
