const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // will delete the dist directory every time we build

module.exports = merge(common, {
  mode: "production",

  // define output points
  output: {
    filename: "[name].[contenthash].bundle.js", // [contenthash] Convert an input of any length in to a fixed size string of text. no matter how long the text is, it will be converted into an array of numbers an letters.
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
});
