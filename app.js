const config = require('./config/config');

const mongodb = require('./models/mongodb');
const database = mongodb();

const kafka = require('./consumers/kafka');
const consumer = kafka();

consumer.on('message', function (message) {
    console.log('kafka consumer: ' + JSON.stringify(message));
});

consumer.on('error', function (err) {
    console.log('kafka error: ' + err);
});
