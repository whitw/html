const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	// aws ip
	host: "0.0.0.0",
	// mysql username
	user: "ssafy",
	// mysql user password
	password: "ssafy_8_A",
	// db name
	database: "order_system",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = { pool };
