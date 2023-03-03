const database = require("mysql2/promise");

const pool = database.createPool({
  host: "",
  password: "",
  database: "",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = {pool};