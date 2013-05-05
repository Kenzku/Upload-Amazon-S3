/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 13:21
 */

exports.show = function(req, res){
        var ACTION = 'http://cosmetics.s3.amazonaws.com';
        var YOUR_AWS_ACCESS_KEY = 'AKIAJ6KW64HY6L2UK5KQ';
        var YOUR_POLICY_DOCUMENT_BASE64_ENCODED = '';
        var YOUR_CALCULATED_SIGNATURE = '';

    res.render('s3',{
        title:'S3 POST Form',
        action : ACTION,
        YOUR_AWS_ACCESS_KEY : YOUR_AWS_ACCESS_KEY,
        YOUR_POLICY_DOCUMENT_BASE64_ENCODED : YOUR_POLICY_DOCUMENT_BASE64_ENCODED,
        YOUR_CALCULATED_SIGNATURE : YOUR_CALCULATED_SIGNATURE
    });
};