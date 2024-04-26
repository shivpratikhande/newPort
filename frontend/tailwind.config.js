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
        slideright: {
          from: {
            opacity: "0",
            transform: "translateX(-30px)", // Initial position outside the viewport
          },
          to: {
            opacity: "1",
            transform: "translateX(0)", // Final position inside the viewport
            
          },
        },
        slideout: {
          from: {
            opacity: "0",
            transform: "translateY(300px)", // Initial position outside the viewport
          },
          to: {
            opacity: "1",
            transform: "translateY(0)", // Final position inside the viewport
            
          },
        },
      },
      animation:{
        slidein:"slidein 1s ease var(--slidein-delay,0) forwards",
        slideout:"slideout 3s ease var(--slideout-delay,0) forwards",
        slideright:"slideright 2s ease var(--slideright-delay,0) forwards",
        


      }
    },
  },
  plugins: [],
};
