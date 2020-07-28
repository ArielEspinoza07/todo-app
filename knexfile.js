require("dotenv").config();

const knexConfig = {
  db: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations",
    },
  },
  development: {
    mysql: {
      client: "mysql2",
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
    pg: {
      client: "pg",
      connection: {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
    sqlite: {
      client: "sqlite3",
      connection: {
        filename: process.env.DB_URL,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
  },
  production: {
    mysql: {
      client: "mysql2",
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
    pg: {
      client: "pg",
      connection: {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
    sqlite: {
      client: "sqlite3",
      connection: {
        filename: process.env.DB_URL,
      },
      migrations: {
        tableName: "migrations",
        directory: "./db/migrations",
      },
    },
  },
};

module.exports = knexConfig;
