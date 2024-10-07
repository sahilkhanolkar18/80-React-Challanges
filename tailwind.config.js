module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      laptop: "1024px",
      desktop: "1280px",
      mobile: { max: "820px" },
      xs: { max: "640px" },
      xxs: { max: "370px" },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        background: "#E388AB",
        primary: {
          100: "#fff1cc", // lightest shade
          200: "#ffe299",
          300: "#ffd366",
          400: "#ffc433",
          500: "#f59f00", // base color
          600: "#cc8500",
          700: "#996300",
          800: "#664200", // darkest shade
        },
      },
    },
  },
  plugins: [],
};
