const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // this mode is going to tell it to stop minifying

  // define output points
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});
