"use strict";

var archetype = require("../archetype");
var _ = archetype.devRequire("lodash");
var mergeWebpackConfig = archetype.devRequire("webpack-partial").default;
var WebpackConfig = archetype.devRequire("webpack-config").default;
var getRootConfig = require("./get-root-config");

var coverageConfig = require("./partial/coverage");
var inlineSourcemapsConfig = require("./partial/sourcemaps-inline");
var testConfig = require("./base-test.js");

module.exports = new WebpackConfig().merge(_.flow(
  mergeWebpackConfig.bind(null, {}, testConfig),
  coverageConfig(),
  inlineSourcemapsConfig()
)()).merge(getRootConfig("webpack.config.coverage.js"));
