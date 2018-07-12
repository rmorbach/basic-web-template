/**
 * Creates a database connection using mysql driver.
 */
var mysql = require('mysql');

//TODO - change parameters to meet your database info
var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'database'
	});
}

module.exports = function () {
	return connMySQL;
}