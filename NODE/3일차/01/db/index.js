const mysql = require("mysql2/promise");
const data = require("./mysql_pwd");
console.log(data);
const pool = mysql.createPool({
    // aws ip
    host: data.host,
    // mysql username
    user: data.user,
    // mysql user password
    password: data.password,
    // db name
    database: data.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = { pool }