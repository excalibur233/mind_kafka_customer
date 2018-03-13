const mongoose = require('mongoose');
const mongodb = require('../models/mongodb');
const db = mongodb();

const RegisterLogsSchema = require('../models/register_log');
const RegisterLog = mongoose.model('RegisterLogsSchema', RegisterLogsSchema);

const mLog = new RegisterLog({username: 'xsm', phone: '15623093771'});
mLog.save();

