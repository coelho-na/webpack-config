const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // definy entry point
  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      //array the contains different object
      //each loader is an object the contains different things
      {
        test: /\.scss$/, //test particular files, don't every single file. Its gonna test only files finished with the css extension.
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2.  Turns css into common js
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
};
