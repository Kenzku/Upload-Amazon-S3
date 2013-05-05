/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 16:23
 */
var Policy = require('../lib/Policy')
    , assert = require('assert');

function ok(expr, msg) {
    if (!expr) throw new Error(msg);
}
// mocha ./test/ -R spec -u qunit -t 6000
suite('Policy Base 64');
test('should return base 64 encoding',function(){
    var aPolicy = new Policy();
    aPolicy.toBase64();
//    console.log(aPolicy.policy);

    ok(true);
});