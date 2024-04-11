/** @type {import('tailwindcss').Config} */
import defaultColors from 'tailwindcss/colors'

export type DefaultColors = typeof defaultColors

const colors = {
  'dark-white': ' #f0f0f0',
  black: '#333333',
  primary: {
    // DEFAULT: '#9bb3e8',
    DEFAULT: '#5A5BE8',
    light: '#c2d0f2',
    dark: '#4338ca',
  },
  alert: '#e8e29b',
  success: '#9be8a5',
  error: '#e89bae',
}

export type Colors = typeof colors

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}