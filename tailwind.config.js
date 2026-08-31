/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        paper: '#F7F4EE',
        ink: '#2A2723',
        office: { DEFAULT: '#355C7D', bg: '#E4EBF1' },
        remote: { DEFAULT: '#6C8E68', bg: '#E7EFE4' },
        leave: { DEFAULT: '#A0616A', bg: '#F2E3E4' },
        holiday: { DEFAULT: '#B8891F', bg: '#F3EAD3' },
        weekend: { DEFAULT: '#9C958A', bg: '#EAE7E0' },
      },
    },
  },
  plugins: [],
}
