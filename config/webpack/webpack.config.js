"use strict";

var archetype = require("../archetype");
var _ = archetype.devRequire("lodash");
var mergeWebpackConfig = archetype.devRequire("webpack-partial").default;
var WebpackConfig = archetype.devRequire("webpack-config").default;
var getRootConfig = require("./get-root-config");
var addDllReferences = require("./add-dll-references");

var baseConfig = require("./base.js");
var defineConfig = require("./partial/define.js");
var optimizeConfig = require("./partial/optimize");
var localesConfig = require("./partial/locales");
var productionSourcemapsConfig = require("./partial/sourcemaps-remote");
var failConfig = require("./partial/fail");

var config = new WebpackConfig().merge(_.flow(
  mergeWebpackConfig.bind(null, {}, baseConfig),
  optimizeConfig(),
  localesConfig(),
  defineConfig(),
  productionSourcemapsConfig(),
  failConfig()
)()).merge(getRootConfig("webpack.config.js"));

addDllReferences(config);

module.exports = config;
