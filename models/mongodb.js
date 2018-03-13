const config = require('../config/config');
const mongoose = require('mongoose');

module.exports = function () {
    const mongodb = mongoose.connect(config.db_uri);

};

