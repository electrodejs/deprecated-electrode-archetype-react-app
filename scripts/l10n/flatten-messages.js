var _ = require("lodash");
var Promise = require("bluebird");

var fs = Promise.promisifyAll(require("fs-extra"));
var getFilePaths = Promise.promisify(require("glob"));

var MESSAGES_PATTERN = "./tmp/messages/**/*.json";
var RAW_MESSAGES_DIR = "./dist/";
var RAW_MESSAGES_NAME = "raw-messages.json";

/**
 * @param  {String}  filePath  The file path
 * @param  {String}  name  The file name
 * @param  {Object}  contents  The contents written to the file
 * @return  {Promise}  A promise that resolves when the file has been written
 */
var writeFileAsJSON = function writeFileAsJSON(filePath, name, contents) {
  return Promise.try(function () { return JSON.stringify(contents, null, 2); })
    .then(function (result) { return fs.writeFileAsync(filePath + name, result); });
};

/**
 * @param  {String}  filePath  The file of a file to read
 * @return  {Promise}  A promise that resolves to a POJO with the file's contents
 */
var readFileAsJSON = function readFileAsJSON(filePath) {
  return fs.readFileAsync(filePath, "utf8")
    .then(JSON.parse);
};

/**
 * @param  {String}  messageFilesPathPattern  A glob resolving to a collection of paths of files
 *                                            containing messages.
 *                                            see: https://github.com/isaacs/node-glob
 * @return  {Promise}  A promise that resolves to a flat POJO with the default messages extracted
 *                     from all files
 */
var getAllDefaultMessages = function getAllDefaultMessages(messageFilesPathPattern) {
  return getFilePaths(messageFilesPathPattern)
    .map(readFileAsJSON)
    .reduce(function (previousValue, defaultMessageDescriptors) {
      defaultMessageDescriptors.forEach(function (descriptor) { previousValue[descriptor.id] = descriptor; });
      return previousValue;
    }, {});
};

var writeRawMessages = _.partial(writeFileAsJSON, RAW_MESSAGES_DIR, RAW_MESSAGES_NAME);

Promise.all([
  getAllDefaultMessages(MESSAGES_PATTERN),
  fs.ensureDirAsync(RAW_MESSAGES_DIR)
])
  .then(_.first)
  .then(writeRawMessages)
  .then(function () { process.exit(0); })
  .catch(function () { process.exit(1); });
