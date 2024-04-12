/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green-sabzlearn":"#2bce56",
        "dark-sabzlearn":"#464749",
      },
      fontFamily:{
        "iranSans":"iran-sans",
        "iranSans-black":"iran-sans-black",
        "iranSans-bold":"iran-sans-bold",
        "iranSans-light":"iran-sans-light",
        "iranSans-medium":"iran-sans-medium",
        "iranSans-ultraLight":"iran-sans-ultraLight",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}

