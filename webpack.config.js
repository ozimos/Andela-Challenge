let path = require("path");
let webpack = require("webpack");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
