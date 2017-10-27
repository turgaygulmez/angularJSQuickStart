var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

var publicPath = __dirname + '/public';

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public path
app.use(express.static(publicPath));

// work as router
app.get('/', function (req, res) {
	res.sendFile(path.join(publicPath+ '/index.html'));
});

/*CRUD functions*/

/*
	get retrived data from req. Ex: req.body.firstName
	send data with res. Ex: res.end("successfully inserted")
*/
app.get('/data', function (req, res) {
	console.error('not implemented');
});

app.post('/data', function (req, res) {
	console.error('not implemented');
});

app.put('/data', function (req, res) {
	console.error('not implemented');
});

app.delete('/data', function (req, res) {
	console.error('not implemented');
});

/*app listen conf*/

app.listen(3000, function () {
	console.log('app running');
});
