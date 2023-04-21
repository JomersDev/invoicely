
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet': '#7C5DFA',
        'light-violet': '#9277FF',
        'navy': '#1E2139',
        'light-navy': '#252945',
        'lavender': '#DFE3FA',
        'cool-grey': '#888EB0',
        'ube': '#7E88C3',
        'chinese-black': '#0C0E16',
        'red': '#EC5757',
        'pink': '#FF9797',
        'ghost-white': '#F8F8FB',
        'eerie-black': '#141625'
      },
      fontFamily: {
        'league-spartan' : ['League Spartan', 'sans-serif'],
      },
      screens: {
        'lg': '1440px'
      }
    },
  },
  plugins: [],
}

