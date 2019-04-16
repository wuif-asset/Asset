var crypto = require('crypto');
function setPassword(value) {
    Signture = crypto.createHmac('sha1', '123456'); //SecrectKey 秘钥
    Signture.update(value);
    var newpass = Signture.digest('hex');
    return newpass
}
module.exports = {setPassword};