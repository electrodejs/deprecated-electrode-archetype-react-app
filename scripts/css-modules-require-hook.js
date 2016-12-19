/* eslint-disable global-require */
"use strict";

var path = require("path");

module.exports = function (options) {
  options = options || {};
  options.generateScopedName = options.generateScopedName || "[hash:base64]";
  options.rootDir = options.rootDir || path.resolve(process.cwd(), "client");

  require("css-modules-require-hook")(options);
};
