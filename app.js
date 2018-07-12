var app = require('./config/server');
const PORT = 8888;
app.listen(PORT, function(){
	console.log('Service is up and running on port ' + PORT);
});