const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // will delete the dist directory every time we build
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  // define output points
  output: {
    filename: "[name].[contenthash].bundle.js", // [contenthash] Convert an input of any length in to a fixed size string of text. no matter how long the text is, it will be converted into an array of numbers an letters.
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      // its an array cause because sometimes we're minifying more of one extension.
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, //test particular files, don't every single file. Its gonna test only files finished with the css extension.
        use: [
          MiniCssExtractPlugin.loader, //. Extract css into files
          "css-loader", // 2.  Turns css into common js
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
});
