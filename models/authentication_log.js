const mongoose = require('mongoose');

const AuthenticationLogSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

const AuthenticationLog = mongoose.model('AuthenticationLog', AuthenticationLogSchema);
module.exports = AuthenticationLog;
