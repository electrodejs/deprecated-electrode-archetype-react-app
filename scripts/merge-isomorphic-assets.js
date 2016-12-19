"use strict";

var fs = require("fs");
var glob = require("glob");
var path = require("path");

var assetsPattern = path.resolve(process.cwd(), "@(dist|dll)/isomorphic-assets.*");
var assetsPath = path.resolve(process.cwd(), "dist/isomorphic-assets.json");

glob(assetsPattern, function(readErr, filenames) {
  var assets = filenames.reduce(function(result, filename) {
    var fileAssets = require(filename);

    Object.assign(result.marked, fileAssets.marked);
    Object.assign(result.chunks, fileAssets.chunks);

    return result;
  }, {
    chunks: {},
    marked: {}
  });

  fs.writeFile(assetsPath, JSON.stringify(assets, null, 2), function(err) {
    if (err) {
      throw err;
    }
  });
});

