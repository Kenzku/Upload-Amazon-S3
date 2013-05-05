/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 13:21
 */
var nconf = require('nconf');

exports.show = function(req, res){
        // change to your AWS S3 bucket
        var ACTION = nconf.get('S3_BUCKET');
        // I put the key in my local environment variable in .bash_profile
        var YOUR_AWS_ACCESS_KEY = nconf.get('YOUR_AWS_ACCESS_KEY');
        var YOUR_POLICY_DOCUMENT_BASE64_ENCODED = '';
        var YOUR_CALCULATED_SIGNATURE = '';

    res.render('s3',{
        title:'S3 POST Form',
        ACTION : ACTION,
        YOUR_AWS_ACCESS_KEY : YOUR_AWS_ACCESS_KEY,
        YOUR_POLICY_DOCUMENT_BASE64_ENCODED : YOUR_POLICY_DOCUMENT_BASE64_ENCODED,
        YOUR_CALCULATED_SIGNATURE : YOUR_CALCULATED_SIGNATURE
    });
};