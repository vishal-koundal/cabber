/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: () => ({
        brand: '#000000',
        primary: '#e9543f ',
        secondary: '#343434',
        light: '#f6f6f6',
        grayDark: '#797979',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        drop: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
    },
  },
  plugins: [require('daisyui')],
}
