var Lab = require('lab');
var Code = require('code');
var lab = exports.lab = Lab.script();

var experiment = lab.experiment;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var Id = require('../src/index.js');

experiment(': ', function() {
    var id1;
    var id2;
    var id3;
    var id4;

    before(function(done) {
        done();
    });

    after(function(done) {
        done();
    });

    test('create random Id', function(done) {
        id1 = new Id();
        expect(id1.toHex()).to.be.a.string();
        expect(id1.toDec()).to.be.a.number();
        done();
    });

    test('create another random Id', function(done) {
        id2 = new Id();
        expect(id2.toHex()).to.be.a.string();
        expect(id2.toDec()).to.be.a.number();
        expect(id1.toHex()).to.not.equal(id2.toHex());
        expect(id1.toDec()).to.not.equal(id2.toDec());
        done();
    });

    test('hash respects crypto hash props', function(done) {
        var content1 = 'DHTs have all the Ids';
        var content2 = 'Banana split';

        var hash1 = Id.hash(content1);
        var hash2 = Id.hash(content2);
        var hash3 = Id.hash(content1);

        expect(hash1).to.have.length(12);
        expect(hash2).to.have.length(12);
        expect(hash3).to.have.length(12);

        expect(hash1).to.not.equal(hash2);
        expect(hash1).to.equal(hash3);

        done();
    });

    test('spin gives out of bounds id', function(done) {
        expect(Id.spin()).to.equal('1000000000000');
        done();
    });

    test('create id with base number', function(done) {
        var tmp = new Id(2);
        expect(tmp.toHex()).to.equal('000000000002');
        expect(tmp.toDec()).to.equal(2);
        done();
    });

    test('create id with base hex string', function(done) {
        var tmp = new Id('000000000004');
        expect(tmp.toHex()).to.equal('000000000004');
        expect(tmp.toDec()).to.equal(4);
        done();
    });

    test('next', function(done) {
        var tmp1 = new Id('ffffffffffff');
        var tmp2 = new Id('000000000001');
        expect(tmp1.next()).to.equal('000000000000');
        expect(tmp2.next()).to.equal('000000000002');
        done();
    });

});
