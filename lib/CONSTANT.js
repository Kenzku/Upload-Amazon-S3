/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 23:53
 */

exports.BASE64 ={
    // reference : http://stackoverflow.com/questions/8571501/how-to-check-whether-the-string-is-base64-encoded-or-not
    REG_EXR : {
        v1 : /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/gmi,
        v2 : /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)$/gmi
    }
}

exports.ERROR = {
    POLICY : {
        SIGNATURE : 'no secrete key found'
    }
}