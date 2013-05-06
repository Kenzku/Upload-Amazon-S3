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
                {"success_action_redirect": "http://localhost:3000/"},
                ["starts-with", "$Content-Type", ""],
                ["content-length-range", 0, 20971520]
            ]
    };
    /**
     * Base64-encode the policy document
     * NOTE: the policy document is a JSON object
     * before encoded, it has been stringified
     * @returns {String} base64 encoded string
     */
    self.toBase64 = function() {
        var policy = JSON.stringify(self.policy);
        var buf = new Buffer(policy);

        return buf.toString('base64');
    }
    /**
     * Calculate a signature value (SHA-1 HMAC) from the base64 encoded policy document
     * using your AWS Secret Key credential as a password/key in `createHmac`.
     * The signature is also base64 encoded.
     * NOTE: you can find AWS Secret Key in your AWS account->Security Credentials.
     * @param errorCB (error)
     * @returns {String} base64 encoded string
     */
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