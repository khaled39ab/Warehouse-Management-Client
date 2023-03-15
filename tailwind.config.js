/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      daisyui: {
        // themes: [
        //   {
        //     mytheme: {
        //       home: "#164E63",
        //     },
        //   },
        //   "dark",
        //   "cupcake",
        // ],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
