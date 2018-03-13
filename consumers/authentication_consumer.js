const AuthenticationLog = require('../models/authentication_log');

module.exports = function (obj) {
    const mLog = new AuthenticationLog();
    mLog.username = obj.username;
    mLog.phone = obj.phone;

    mLog.save(function (err) {
        console.log(err);
    });
};


