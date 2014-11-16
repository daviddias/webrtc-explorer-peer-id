var git_sha1 = require('git-sha1');

exports = module.exports;

var uuid; // uuid are stored in hex

exports.gen = function () {
  uuid = git_sha1((~~(Math.random() * 1e9)).toString(36) + Date.now());
  return uuid;
};

// to get the last generated
exports.get = exports.uuid = function () {
  return uuid;
};

