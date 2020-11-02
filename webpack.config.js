const path = require("path");

module.exports = {
  mode: "development", // this mode is going to tell it to stop minifying

  // definy entry point
  entry: "./src/index.js",

  // define output points
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
