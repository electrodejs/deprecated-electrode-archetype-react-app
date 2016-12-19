"use strict";
/**
 * Webpack hot configuration
 */
var archetype = require("../archetype");
var _ = archetype.devRequire("lodash");
var Path = archetype.PlatformPath;
var mergeWebpackConfig = archetype.devRequire("webpack-partial").default;
var WebpackConfig = archetype.devRequire("webpack-config").default;
var hotConfig = require("./partial/hot");
var baseConfig = require("./base.js");
var defineConfig = require("./partial/define.js");
var devConfig = require("./partial/dev.js");
var getRootConfig = require("./get-root-config");

var config = module.exports = _.flow(
  mergeWebpackConfig.bind(null, {}, baseConfig),
  defineConfig(),
  devConfig(),
  hotConfig()
)();


config.devServer = {}; // use webpack default verbosity

/****
 * Hot Mods
 */
var babel = _.find(config.module.loaders, {name: "babel"});

// update babel loaders for hot loading
babel.loaders = [].concat(["react-hot"], babel.loaders);
babel.include = Path.resolve(archetype.clientSrcDir);

module.exports = new WebpackConfig().merge(config).merge(getRootConfig("webpack.config.hot.js"));
