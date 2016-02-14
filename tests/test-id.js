/* globals describe, it, before, after */

var expect = require('chai').expect

var Id = require('../src/index.js')

describe('Id', function () {
  var id1
  var id2

  before(function (done) {
    done()
  })

  after(function (done) {
    done()
  })

  it('create random Id', function (done) {
    id1 = new Id()
    expect(id1.toHex()).to.be.a('string')
    expect(id1.toDec()).to.be.a('number')
    done()
  })

  it('create another random Id', function (done) {
    id2 = new Id()
    expect(id2.toHex()).to.be.a('string')
    expect(id2.toDec()).to.be.a('number')
    expect(id1.toHex()).to.not.equal(id2.toHex())
    expect(id1.toDec()).to.not.equal(id2.toDec())
    done()
  })

  it('hash respects crypto hash props', function (done) {
    var content1 = 'DHTs have all the Ids'
    var content2 = 'Banana split'

    var hash1 = Id.hash(content1)
    var hash2 = Id.hash(content2)
    var hash3 = Id.hash(content1)

    expect(hash1).to.have.length(12)
    expect(hash2).to.have.length(12)
    expect(hash3).to.have.length(12)

    expect(hash1).to.not.equal(hash2)
    expect(hash1).to.equal(hash3)

    done()
  })

  it('create id with base number', function (done) {
    var tmp = new Id(2)
    expect(tmp.toHex()).to.equal('000000000002')
    expect(tmp.toDec()).to.equal(2)
    done()
  })

  it('create id with base hex string', function (done) {
    var tmp = new Id('000000000004')
    expect(tmp.toHex()).to.equal('000000000004')
    expect(tmp.toDec()).to.equal(4)
    done()
  })

  it('next', function (done) {
    var tmp1 = new Id('ffffffffffff')
    var tmp2 = new Id('000000000001')
    expect(tmp1.next()).to.equal('000000000000')
    expect(tmp2.next()).to.equal('000000000002')
    done()
  })
})
