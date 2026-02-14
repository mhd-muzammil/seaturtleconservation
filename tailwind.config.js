/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        primary: "#a4c639",
        dark: "#232323",
        "text-dark": "#1e1e1e",
        "text-gray": "#666666",
        "light-gray": "#f7f7f7",
        "section-gray": "#aaaaaa",
        khaki: "darkkhaki",
        "green-light": "#CDD1CB", // hsl(98, 8%, 80%) approximation
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "fun-facts": "url('/assets/images/page-heading-bg (2).jpg')",
      },
    },
  },
  plugins: [],
};
