/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/*.vue'],
  content: [],
  theme: {
    colors: {
      transparent : 'transparent',
      current : 'currentColor',
      'white' : '#ffffff',
      'red' : {
        700 : '#b91c1c',
      },
      'orange' : {
        700 : '#c2410c',
      },
      'blue' : {
        700 : '#1d4ed8',
        800 : '#1e40af',
      },
      'indigo' : {
        700 : '#4338ca',
        950 : '#1e1b4b',
      },
      'purple' : {
        800 : '#6b21a8',
      },
      'fuchsia' : {
        950 : '#4a044e',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderColor: ['active']
    },
  },
  plugins: [],
}

