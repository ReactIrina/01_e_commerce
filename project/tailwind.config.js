/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#1E2832",
        primaryBG: "#1E28320D",
        Icons: "#545B63",
        Brand: "#CC1100",
        TextColor: "#3D3D3D",
      },
    },
  },
  plugins: [],
};
