const path = require("path");


module.exports = {
  // definy entry point
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },

  module: {
    rules: [
      //array the contains different object
      //each loader is an object the contains different things
      {
        test: /\.html$/,
        use: ["html-loader"], // require any images and imported into Javascript
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "img",
          },
        },
      },
    ],
  },
};
