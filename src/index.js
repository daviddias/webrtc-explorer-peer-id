var sha1 = require('git-sha1');

exports = module.exports = Id;

var maxHex = 'ffffffffffff';
var maxDec = parseInt(maxHex, 16);

function Id(_id) {
    var dec;
    var hex;

    if (typeof _id === 'number') {
        console.log('vai ao number', _id) 
        dec = _id;
        var tmp = ('00000000000000' + _id.toString(16));
        hex = tmp.substring(tmp.length - 12, tmp.length);
    }
    if (typeof _id === 'string') {
        dec = parseInt(_id, 16);
        hex = _id;
    }
    if (typeof _id === 'undefined') {
        hex = sha1((~~(Math.random() * 1e9)).toString(36) + Date.now())
            .substring(0, 12);
        dec = parseInt(hex, 16);
    }

    this.toHex = function() {
        return hex;
    };

    this.toDec = function() {
        return dec;
    };

    this.next = function() {
        if (hex === maxHex) {
            return '000000000000';
        } else {
            var a = ('000000000000' + ((dec + 1).toString(16)));
            return a.substring(a.length - 12, a.length);
        }
    };

    return this;
}

//
// bigger Id than available to make the message spin the ring
//
exports.spin = function() {
    return (maxDec + 1).toString(16);
};

//
// returns the Id in a hex value, which correspondes to the hash of the content
//
exports.hash = function(content) {
    return sha1(content).substring(0, 12);
};

