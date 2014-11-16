var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var experiment = lab.experiment;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var uuid = require('../index.js');

experiment('uuid: ', function () {
  var uuid_1;
  var uuid_2;

  before(function (done) {
    done();
  });

  after(function (done) {
    done();
  });

  test('create a uuid', function (done) {
    uuid_1 = uuid.gen();
    done();
  });

  test('create another uuid and compare', function (done) {
    uuid_2 = uuid.gen();
    if (uuid_1 !== uuid_2) {
      done();      
    }
  });

  test('get last uuid', function (done) {
    if(uuid_2 === uuid.get()){
      done();      
    }
  });
});