const mysql = require("mysql2/promise");

require("dotenv").config();

const pool = mysql.createPool({
    // aws ip
    host: process.env.DB_HOST,
    // mysql username
    user: process.env.DB_USER,
    // mysql user password
    password: process.env.DB_PASSWORD,
    // db name
    database: process.env.DB_SCHEMA,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = { pool }