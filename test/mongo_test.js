const config = require('../config/config');
const mongoose = require('mongoose');
const mongodb = mongoose.connect(config.db_uri);

const RegisterLog = require('../models/register_log');
const mLog_1 = new RegisterLog({username: 'wwj', phone: '15623093771'});

const AuthenticationLog = require('../models/authentication_log');
const mLog_2 = new AuthenticationLog({username: 'wwj', phone: '15623093771'});

const LoginLog = require('../models/login_log');
const mLog_3 = new LoginLog({username: 'wwj', phone: '15623093771'});

mLog_1.save(function (err) {
    console.log('error: ' + err);
});

mLog_2.save(function (err) {
    console.log('error: ' + err);
});

mLog_3.save(function (err) {
    console.log('error: ' + err);
});
