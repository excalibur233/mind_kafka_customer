const config = require('../config/config');

const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const Offset = kafka.Offset;
const Client = kafka.Client;
const topic = config.kafka_topic;

module.exports = function () {
    const client = new Client(config.kafka_host);
    const topics = [{topic: topic, partition: 0}];
    const options = {autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024};

    const consumer = new Consumer(client, topics, options);
    const offset = new Offset(client);

    return consumer;
};
