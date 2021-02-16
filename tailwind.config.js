const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/pages/**/*.ts', './src/pages/**/*.tsx', './src/components/**/*.ts', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      2.5: '.625rem',
      6.5: '1.625rem',
      18: '4.5rem',
      ...defaultTheme.spacing,
    },
    screens: {
      sm: '375px',
    },
    colors: {
      main: '#174DE5',
      green: '#5CB940',
      red: '#E51718',
      white: '#FFF',
      gray: {
        light: '#F8F9FD',
        DEFAULT: '#B4B4B4',
        dark: '#7E7E7E',
      },
      black: '#1c1a1a',
    },
    fontFamily: {
      sans: ['Apple SD Gothic Neo'],
    },
    fontSize: {
      xs: '.75rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '2rem',
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    borderRadius: {
      DEFAULT: '0.8125rem',
    },
    boxShadow: {
      DEFAULT: '0 2px 2px 0 rgba(106, 114, 136, 0.2)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
