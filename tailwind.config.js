/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif",
      },
      colors: {
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "color-background": "#171717",
        "menu-color": "#172554",
      },
      backgroundImage: {
        "open-menu": "url('../public/svg/menu.svg')",
        "close-menu": "url('../public/svg/close.svg')",
      },
    },
  },
  plugins: [],
};
