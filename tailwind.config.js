/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "alice-blue": "#EAF0F6",
        azul: "#186AA6",
        "davy's-gray": "#4D4F51",
        "dim-gray": "#686464",
        "slate-gray": "#64748B",
        vermilion: "#DD4C3B",
      },
    },
  },
  plugins: [],
};
