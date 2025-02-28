const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development", // this mode is going to tell it to stop minifying

  // define output points
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/, //test particular files, don't every single file. Its gonna test only files finished with the css extension.
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2.  Turns css into common js
          "sass-loader", // 1. Turns sass into css
        ],
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
});
