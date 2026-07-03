/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Global Backgrounds
        cosmic: {
          950: '#020617', // Chuqur kosmik qora
          900: '#0f172a',
        },
        // Accent Colors
        'electric-purple': {
          DEFAULT: '#8b5cf6',
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        'electric-pink': {
          DEFAULT: '#ec4899',
          400: '#f472b6',
          500: '#ec4899',
        },
        'neon-green': {
          DEFAULT: '#10b981',
          400: '#34d399',
          500: '#10b981',
        },
        'electric-violet': {
          DEFAULT: '#7c3aed',
          400: '#8b5cf6',
          500: '#7c3aed',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom right, #020617, #0f172a)',
        'text-gradient': 'linear-gradient(to right, #a78bfa, #f472b6)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.6)',
        'glow-strong': '0 0 30px rgba(139, 92, 246, 0.8)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shine': 'shine 2s infinite linear',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
