export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          dark: '#0a1f14'
        },
        earth: {
          100: '#fef3c7',
          500: '#d97706',
          700: '#b45309',
          900: '#78350f'
        }
      }
    },
  },
  plugins: [],
}
