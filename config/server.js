var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var app = express();

//Sets view engine and view files path.
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Sets static content path
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(expressSession({
	secret: "4C3BEB8A-06FD-4F02-A043-77CBD78AFD46", //Secret used to sign the session ID cookie.
	resave: false, //Force the session to be saved back to the session store.
	saveUninitialized: false //Forces a session that is "uninitialized" to be saved to the store
}));

consign()
	.include('app/routes')
	.then('config/dbConnection.js')	
	.then('app/models')
	.then('app/dao')
	.then('app/controllers')
	.into(app);

module.exports = app;