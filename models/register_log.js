const mongoose = require('mongoose');

const RegisterLogSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},
    type: {type:String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

const RegisterLog = mongoose.model('RegisterLog', RegisterLogSchema);
module.exports = RegisterLog;
