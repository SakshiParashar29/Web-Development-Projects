/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily : {
        mullish : ["Mullish", "sans-serif"],
      },
      colors: {
        deepBlue: '#04032D',
        // deepBlue: '#020242',
        lightBlue: '#2b84ea',
        lightBlue300: '#4b94ed', 
        greenLight: '#61cea6',
        grayText: '#818597',
        lightGray: '#e2e2e2',
        grayBlue: '#344a6c',
        deepBlueHead: '#162f56',
        gray2: '#525a76', 
        mint: '#98FF98',
        peach: '#FFDAB9',
        Blue : '#191c2f',
      },
    },
  },
  plugins: [],
}

