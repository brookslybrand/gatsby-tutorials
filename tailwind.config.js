module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
