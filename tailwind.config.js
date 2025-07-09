/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair"],
        nexa: ["Nexa", "sans-serif"],
        nexaLight: ["NexaLight", "sans-serif"],
        nexaRegular:["NexaRegular", "sans-serif"],
        NexaBook:["NexaBook"]
      },
      colors:{
        primary:"#FF6608"
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'marquee-reverse': 'marquee-reverse 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      
    },
  },
  plugins: [],
}

