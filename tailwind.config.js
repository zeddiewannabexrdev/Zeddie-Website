/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'ar-scan': 'arScan 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        arScan: {
          '0%': { transform: 'translateY(-10vh)' },
          '50%': { transform: 'translateY(110vh)' },
          '100%': { transform: 'translateY(-10vh)' },
        }
      }
    },
  },
  plugins: [],
}
