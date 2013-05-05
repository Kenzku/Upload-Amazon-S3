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
        //JSON.stringify(self.policy)
//        var buf = new Buffer();
        var buf = new Buffer('test');
//        var json = JSON.stringify(buf);

        console.log(buf);
        return buf;
    }
}

module.exports=Policy;