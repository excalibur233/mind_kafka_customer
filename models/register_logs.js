const mongoose = require('mongoose');

const RegisterLogsSchema = mongoose.Schema({
    username: {type: String, trim: true, required: true},
    phone: {type: String, trim: true, required: true},

    created: {type: Date, default: Date.now()},
});

mongoose.model('register_logs', RegisterLogsSchema);
