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
    colors: {
      background: "#E388AB",
    },
    extend: {},
  },
  plugins: [],
};
