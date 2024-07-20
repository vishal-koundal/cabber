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
        primary: '#5046e5 ',
        secondary: '#343434',
        light: '#f6f6f6',
        grayDark: '#797979',
        borderLight: '#e5e5e5',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary':
          'linear-gradient(to top, #5046e5 0%, #5046e5, 0.3) 100%)',
      },
      boxShadow: {
        drop: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
    },
  },
  plugins: [require('daisyui')],
}
