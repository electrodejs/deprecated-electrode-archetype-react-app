"use strict";

var archetype = require("../../archtype");
var mergeWebpackConfig = archetype.devRequire("webpack-partial").default;

var getDefaultEntry = function (entry) {
  return [
    `webpack-dev-server/client?http://${archetype.webpack.devHostname}:${archetype.webpack.devPort}`,
    "webpack/hot/only-dev-server",
    entry
  ];
};

var getMultiBundleEntry = function (entries) {
  var multiBundleEntry = {};
  for (var entryName in entries) {
    multiBundleEntry[entryName] = getDefaultEntry(entries[entryName]);
  }
  return multiBundleEntry;
};

module.exports = function () {
  return function (config) {
    var entry = config.__wmlMultiBundle ?
      getMultiBundleEntry(config.entry) :
      getDefaultEntry(config.entry);

    return mergeWebpackConfig(config, {
      devtool: "eval",
      entry: entry
    });
  };
};
