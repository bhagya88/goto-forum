var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
//var methodOverride = require('method-override');

var Promise = require('bluebird');
var logger = require('morgan');

var posts = require('./api/routes/posts.js');


var PORT = process.env.PORT || '3000';
var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/reddit";

mongoose.Promise = Promise;
// Database configuration with mongoose
mongoose.connect(mongoURI);
var db = mongoose.connection;

db.on('error',function(error){
	console.log('Mongoose error',error);
})

db.once('open',function(){
 	console.log('Mongoose connection successful');
});

var app = express();

app.use(express.static('./build'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false 
}));

app.use(bodyParser.json());

app.use(express.static('public'));// override with POST having ?_method
//app.use(methodOverride('_method'));


// middleware to log request to console
app.use(logger('combined'));
app.use('/posts',posts);
app.listen(PORT);
