const config = require('../config/config');
const mongoose = require('mongoose');

module.exports = function () {
    const mongodb = mongoose.connect(config.db_uri);

    require('./register_logs');
    require('./authentication_logs');
    require('./login_logs');

    return mongodb;
};

