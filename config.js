var config = {};

config.mongodb = {};
config.server = {};

config.server.port = process.env.WEB_PORT || 9999;

config.mongodb.username = process.env.MONGODB_USERNAME || 'arpit';
config.mongodb.password=  process.env.MONGODB_PASSWORD || 'xxxx';
config.mongodb.host=  process.env.MONGODB_HOST || 'ds047752.mlab.com';
config.mongodb.port = process.env.MONGODB_PORT || 47752;
config.mongodb.databaseName = process.env.MONGODB_NAME || 'my-database';

module.exports = config;
