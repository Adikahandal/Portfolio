/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        accent: 'rgb(var(--accent))',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(213, 239, 255, 0.13)',
        'glass-sm': '5px 4px 20px 0 rgba(177, 224, 253, 0.85)',
      },
    },
  },
  plugins: [],
};
