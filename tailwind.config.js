/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f6ff',
        'cyber-purple': '#b026ff',
        'cyber-pink': '#ff2a6d',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neural-pattern': "url('/neural-pattern.svg')",
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 246, 255, 0.5), 0 0 20px rgba(0, 246, 255, 0.3), 0 0 30px rgba(0, 246, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
} 