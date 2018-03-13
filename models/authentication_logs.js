const mongoose = require('mongoose');

const AuthenticationLogsSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

mongoose.model('authentication_logs', AuthenticationLogsSchema);
