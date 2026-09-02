/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        paper: '#16181C',
        panel: '#1D2126',
        ink: '#ECEAE6',
        office: { DEFAULT: '#7DA6D9', bg: '#1D2A36' },
        remote: { DEFAULT: '#8FBF85', bg: '#1E2A1D' },
        leave: { DEFAULT: '#D98B94', bg: '#2C1E20' },
        holiday: { DEFAULT: '#E0B84D', bg: '#2E2617' },
        weekend: { DEFAULT: '#A8A29A', bg: '#232323' },
      },
    },
  },
  plugins: [],
}
