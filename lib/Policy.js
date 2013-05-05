/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 14:51
 */

//var Buffer = require('buffer');

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
//        console.log(policy.match(/\n|\r/));
        var buf = new Buffer(policy);

//        console.log(buf.toString('base64'));
        return buf.toString('base64');
    }


}

module.exports=Policy;