const { POSTGRES_CONFIG } = require('./constants');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: POSTGRES_CONFIG.USER_NAME,
    password: POSTGRES_CONFIG.PASSWORD,
    host: POSTGRES_CONFIG.HOST,
    port: POSTGRES_CONFIG.PORT,
    database: POSTGRES_CONFIG.DB_NAME,
});

module.exports = pool;
