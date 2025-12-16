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
        brand: '#1a1a1a', // softer black
        primary: '#5046e5', // your existing color
        primaryHover: '#4036d1', // darker shade for hover
        secondary: '#343434', // keep
        secondaryHover: '#2a2a2a',
        light: '#f5f5f5', // keep
        grayDark: '#797979', // keep
        grayLight: '#bfbfbf', // added for text / icons
        borderLight: '#e5e5e5', // keep
        background: '#fafafa', // added clean BG tone
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
};
