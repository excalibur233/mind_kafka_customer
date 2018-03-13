const mongoose = require('mongoose');

const LoginLogsSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

mongoose.model('login_logs', LoginLogsSchema);
