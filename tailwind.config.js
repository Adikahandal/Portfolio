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
        firefly: 'rgb(var(--firefly))',
      },
      backgroundImage: {
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(233, 246, 255, 0.5) 0%, rgba(142, 212, 255, 0) 100%)"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(218, 241, 255, 0.197)',
        'glass-sm': '5px 5px 20px 0 rgba(142, 212, 255, 0.7)',
      },
      keyframes: {
        'firefly-glow': {
          '0%': {
            transform: 'scale(0.5)',
            boxShadow: '0 0 5px rgba(0, 123, 255, 0.6)',  
          },
          '50%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(0, 123, 255, 1)',   
          },
          '100%': {
            transform: 'scale(0.5)',
            boxShadow: '0 0 5px rgba(0, 123, 255, 0.6)',  
          },
        },

        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        'firefly': 'firefly-glow 2s ease-in-out infinite',       
      },
    },
  },
  plugins: [],
};
