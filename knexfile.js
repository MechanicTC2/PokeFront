// Update with your config settings.
const mysql = require('mysql');


var localSQLConnection = {
  host: 'pvnet-testing.cjdmtmc8kuwg.us-west-1.rds.amazonaws.com',
  user: 'pvnetuser',
  password: 'CDy21xM8c9NA',
  database: 'MechanicTC2',
};

// Production database connection
const SQLConnection = localSQLConnection;

module.exports = {
  development: {
    client: 'mysql',
    connection: SQLConnection,
    migrations: {
      directory: './database/migrations',
      tablename: 'knlex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  localSQLConnection
};
