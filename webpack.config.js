var path = require("path");
var webpack = require("webpack");

module.exports = (env, argv) => ({
  entry: "./lib/browser.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname)
  }
});