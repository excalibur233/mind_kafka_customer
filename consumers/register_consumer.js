const RegisterLog = require('../models/register_log');

module.exports = function (obj) {
    const mLog = new RegisterLog();
    mLog.username = obj.username;
    mLog.phone = obj.phone;
    mLog.type = obj.type;

    mLog.save(function (err) {
        console.log(err);
    });
};


