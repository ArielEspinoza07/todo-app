const knex = require("knex");
const { Model } = require("objection");

const knexConfig = require("../knexfile");

const environment = process.env.APP_ENV || "prod";
const driver = process.env.DB_DRIVER || "mysql";
const connectionConfig = knexConfig[environment][driver];

const connection = knex(connectionConfig);
Model.knex(connection);

module.exports = connection;