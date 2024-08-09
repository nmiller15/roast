const Pool = require('pg').Pool;
require('dotenv').config();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

//console.log(process.env)

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const store = new pgSession({
  pool,
  createTableIfMissing: true
})

// Testing query in production environment
//pool.query('SELECT origin FROM roasts;').then((response) => console.log(response)).catch((err) => console.error('Query error', err));

module.exports = {
  store,
  pool,
  query: (text, params) => pool.query(text, params),
};
