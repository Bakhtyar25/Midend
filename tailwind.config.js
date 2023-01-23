/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light_blue: '#EAF8F9', 
        dark_blue: '#99C4C8',
        light_text: '#66BFBF', 
        light_yellow: '#FEE89E', 
        text_gray: '#718096',
        bg_btn: '#2DD3E3',
      },
    },
  },
  plugins: [],
}
