/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#00b5d1",
          
          "secondary": "#00a400",
                    
          "accent": "#1a00ff",
                    
          "neutral": "#130c05",
                    
          "base-100": "#fed7aa",
                    
          "info": "#00ebff",
                    
          "success": "#00926f",
                    
          "warning": "#ff6400",
                    
          "error": "#ff384a",
        },
      },
    ],
  },
};