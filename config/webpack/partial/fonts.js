"use strict";

var mergeWebpackConfig = require("webpack-partial").default;

var urlLoader = require.resolve("url-loader");
var fileLoader = require.resolve("file-loader");

module.exports = function () {
  return function (config) {
    return mergeWebpackConfig(config, {
      module: {
        loaders: [
          {
            name: "woff",
            test: /\.woff(2)?$/i,
            loader: urlLoader + "?limit=10000&mimetype=application/font-woff!isomorphic"
          },
          {
            name: "fonts",
            test: /\.(ttf|eot)$/i,
            loader: fileLoader + "!isomorphic"
          }
        ]
      }
    });
  };
};
