/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './styles/tailwind/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxxs: '200px',
      xxs: '300px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      colors: {
        gray: '#919194',
        primary: '#f75757',
        primaryAlt: '#f52626',
      },
      textColor: {
        gray: '#919194',
        primary: '#f75757',
        primaryAlt: '#f52626',
        blackText: '#242424',
      },
      backgroundColor: {
        primaryBackground: '#f75757',
        primaryBackgroundAlt: '#f52626',
        blackBackground: 'rgb(34, 35, 40)',
        secondaryBackground: '#f5f8f9',
        grayBackground: '#919194',
      },
      backgroundImage: {
        'hero-home':
          "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6), rgba(0, 0, 0, .4)), url('/src/assets/images/ge-hero-home.jpeg')",
        'home-sect-four': "url('/src/assets/images/ge-hero-home.jpeg')",
        'hero-services': "url('/src/assets/images/ge-hero-services.jpg')",
        footer:
          "linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6), rgba(0, 0, 0, .4)), url('/src/assets/images/ge-2.jpg')",
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd':
          ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
