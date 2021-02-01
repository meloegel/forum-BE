const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'loegel',
        password: 'password',
        database: 'forum-be'
    },
    pool: { min: 0, max: 7 }
});

const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);