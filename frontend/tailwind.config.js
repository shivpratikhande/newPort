/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-300px)", // Initial position outside the viewport
          },
          to: {
            opacity: "1",
            transform: "translateY(0)", // Final position inside the viewport
            
          },
        },
      },
      animation:{
        slidein400:"slidein 1s ease 400ms forwards",
        slidein100:"slidein 1s ease 100ms forwards"

      }
    },
  },
  plugins: [],
};
