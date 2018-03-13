const config = require('../config/config');
const mongoose = require('mongoose');

module.exports = function () {
    const mongodb = mongoose.connect(config.db_uri);

    require('./register_log');
    require('./authentication_log');
    require('./login_log');

    return mongodb;
};

