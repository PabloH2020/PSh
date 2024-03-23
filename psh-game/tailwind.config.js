/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-red':'#ff0000',
        'custom-dark':'#414141',
        'custom-gray':'#FFFFFF',
        'custom-green':'#5B9E32',
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

