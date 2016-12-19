"use strict";

var archetype = require("../archetype");
var _ = archetype.devRequire("lodash");
var Path = archetype.PlatformPath;
var webpack = archetype.devRequire("webpack");
var WebpackConfig = archetype.devRequire("webpack-config").default;
var removeDllReferences = require("./remove-dll-references");
var getRootConfig = require("./get-root-config");

/* eslint-disable func-style */

function getDllEntry() {
  try {
    return require( // eslint-disable-line global-require
      Path.join(process.cwd(), archetype.clientSrcDir, "dll.config.js")
    );
  } catch (err) {
    return {};
  }
}

var extensions = {};
var baseConfigPath = require.resolve("./webpack.config");

extensions[baseConfigPath] = function (config) {
  var statsPlugin = _.find(config.plugins, {
    opts: {
      filename: "../server/stats.json"
    }
  });
  var isomorphicPlugin = _.find(config.plugins, {
    options: {
      assetsFile: "../isomorphic-assets.json"
    }
  });

  statsPlugin.opts.filename = "../../dll/server/stats.dll.json";
  isomorphicPlugin.options.assetsFile = "../../dll/isomorphic-assets.dll.json";
  config.entry = {};

  return config;
};

var dllConfig = new WebpackConfig().extend(extensions).merge({
  entry: getDllEntry(),
  output: {
    path: Path.join(process.cwd(), "dll/js"),
    filename: "[name].bundle.[hash].js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: Path.join(process.cwd(), "dll/js/[name]-manifest.[hash].json")
    })
  ]
}).merge(getRootConfig("webpack.config.dll.js"));

removeDllReferences(dllConfig);

module.exports = dllConfig;
