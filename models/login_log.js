const mongoose = require('mongoose');

const LoginLogSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

const LoginLog = mongoose.model('LoginLog', LoginLogSchema);
module.exports = LoginLog;
