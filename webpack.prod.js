const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",

  // define output points
  output: {
    filename: "main.[contenthash].js", // [contenthash] Convert an input of any length in to a fixed size string of text. no matter how long the text is, it will be converted into an array of numbers an letters.
    path: path.resolve(__dirname, "dist"),
  },
});
