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
  module: {
    rules: [
      //array the contains different object
      //each loader is an object the contains different things
      {
        test: /\.css$/, //test particular files, don't every single file. Its gonna test only files finished with the css extension.
        use: ["style-loader", "css-loader"], //with loaader we'll gonna use it (css loader takes your css and it turns in to javascript, style loader will take that javascript and inject it into the DOM (they load in reverse order, even if "style-loader" comes first))
      },
    ],
  },
};
