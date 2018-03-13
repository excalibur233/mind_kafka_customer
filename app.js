const config = require('./config/config');

const mongodb = require('./models/mongodb');
const database = mongodb();

const kafka = require('./consumers/kafka');
const consumer = kafka().consumer;
const offset = kafka().offset;

consumer.on('message', function (message) {
    const value = message.value;
    console.log('kafka consumer: ' + value);
});

consumer.on('error', function (err) {
    console.log('kafka error: ' + err);
});

/*
 * If consumer get `offsetOutOfRange` event,
 * fetch data from the smallest(oldest) offset.
 */
consumer.on('offsetOutOfRange', function (topic) {
    topic.maxNum = 2;
    offset.fetch([topic], function (err, offsets) {
        if (err) {
            return console.error(err);
        }
        var min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
        consumer.setOffset(topic.topic, topic.partition, min);
    });
});
