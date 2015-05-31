var express = require('express');
var app = express();
var bodyParser = require('body-parser'); //bodyparser + json + urlencoder
var morgan  = require('morgan'); // logger
var db = require('./configs/database');
//Configuration
app.set('port', 4001);
app.listen(app.get('port'));
app.use(bodyParser());
app.use(morgan());

app.all('*', function(req, res, next) {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	if ('OPTIONS' == req.method) return res.send(200);
	next();
});


//Routes
var routes = {};
routes.example = require('./routes/example.js');


//Routing URLs
app.get('/read/:id', routes.example.read);
app.post('/create', routes.example.create);
app.put('/edit', routes.example.edit);
app.delete('/delete/:id', routes.example.delete);


console.log('[INFO] Your project API started on port ' + app.get('port'));