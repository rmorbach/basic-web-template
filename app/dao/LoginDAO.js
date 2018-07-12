/**
 * Data Access Object for login operations.
 * @param {Object} connection MySQL connection
 */
function LoginDAO(connection){
	this._connection = connection;
}

/**
 * Check if a valid user exists based on the username and password provided.
 * @param {String} username clear text user name
 * @param {String} password clear text passwor
 * @param {Object} callback function to be called by the end of the process.
 */
LoginDAO.prototype.login = function(username, password, callback){
    
    // Sanitize parameters
    username = username.trim();
    password = password.trim();

    //TODO - here is necessary to use hash function according to the one used in the database. 
    //var hash = crypto.createHash('sha256')
    //hash.update(password);
    //password = `${hash.digest('hex')}`;

    //MySQL Query example
    var loginQuery = `select *
	                        from users
	                        where username = "`+username+`" 
                            and password = "`+password+`"                            
                    limit 1`;

	this._connection.query(loginQuery, callback);
}


module.exports = function(){
	return LoginDAO;
}