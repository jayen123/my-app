/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // 'primary': 'linear-gradient(135deg, #F81F01 0%, #EE076E 100%)',
        'lpink': '#EE076E',
        'lred': '#F81F01',
        'dblack': '#101010',
        'lblack': '#191919',
        'lgray': '#E9ECEF',
        'dgray': '#CED4DA'
      },
    },
  },
  plugins: [],
}
