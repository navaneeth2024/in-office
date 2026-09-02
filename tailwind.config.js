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
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        office: {
          DEFAULT: 'rgb(var(--color-office) / <alpha-value>)',
          bg: 'rgb(var(--color-office-bg) / <alpha-value>)',
        },
        remote: {
          DEFAULT: 'rgb(var(--color-remote) / <alpha-value>)',
          bg: 'rgb(var(--color-remote-bg) / <alpha-value>)',
        },
        leave: {
          DEFAULT: 'rgb(var(--color-leave) / <alpha-value>)',
          bg: 'rgb(var(--color-leave-bg) / <alpha-value>)',
        },
        holiday: {
          DEFAULT: 'rgb(var(--color-holiday) / <alpha-value>)',
          bg: 'rgb(var(--color-holiday-bg) / <alpha-value>)',
        },
        weekend: {
          DEFAULT: 'rgb(var(--color-weekend) / <alpha-value>)',
          bg: 'rgb(var(--color-weekend-bg) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
