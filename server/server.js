var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'))

app.listen(3000, function(error) {
	console.log('dirname is', __dirname)
	console.log("server is listening on port 3000")
});