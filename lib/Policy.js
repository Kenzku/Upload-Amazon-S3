/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 14:51
 */

var crypto = require('crypto')
    , nconf = require('nconf')
    , CONSTANT = require('../lib/CONSTANT')
    ;

function Policy(){
    var self = this;

    self.policy = {
            "expiration": "2013-05-30T12:00:00.000Z",
            "conditions": [
                {"acl": "private" },
                {"bucket": "first-tryout" },
                ["starts-with", "$key", "uploads/"],
                ["content-length-range", 0, 20971520],
                {"acl": "private"},
                {"success_action_redirect": "http://localhost/"},
                ["starts-with", "$Content-Type", ""],
                ["content-length-range", 0, 20971520]
            ]
    };

    self.toBase64 = function() {
        var policy = JSON.stringify(self.policy);
        var buf = new Buffer(policy);

        return buf.toString('base64');
    }

    self.getSignature = function (errorCB) {
        // read environment variable
        nconf.env();
        var SECRET_ACCESS_KEY = nconf.get('SECRET_ACCESS_KEY') || null;
        if (!SECRET_ACCESS_KEY){
            if (errorCB && typeof errorCB === 'function'){
                errorCB(CONSTANT.ERROR.POLICY.SIGNATURE);
                return;
            }else{
                throw CONSTANT.ERROR.POLICY.SIGNATURE;
            }
        }
        var anHmac = crypto.createHmac('sha1', SECRET_ACCESS_KEY);
        anHmac.update(self.toBase64());
        var signature = anHmac.digest('base64');
        return signature;
    }

}

module.exports=Policy;