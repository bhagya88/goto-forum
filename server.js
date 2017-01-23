var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
//var Strategy = require('passport-local').Strategy;
//var methodOverride = require('method-override');


var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var flash    = require('connect-flash');

var Promise = require('bluebird');
var logger = require('morgan');

var posts = require('./api/routes/posts.js');



var PORT = process.env.PORT || '3000';
var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/reddit";

mongoose.Promise = Promise;
// Database configuration with mongoose
mongoose.connect(mongoURI);
require('./api/config/passport')(passport); 

var db = mongoose.connection;

db.on('error',function(error){
	console.log('Mongoose error',error);
})

db.once('open',function(){
 	console.log('Mongoose connection successful');
});

var app = express();


app.use(logger('dev'));

app.use(bodyParser.json());

app.use(express.static('public'));// override with POST having ?_method
//app.use(methodOverride('_method'));


// set up our express application

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));


// required for passport
app.use(session({
    secret: 'gotoforum', // session secret
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
 // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./api/routes/routes.js')(app, passport); // 


// middleware to log request to console
app.use(logger('combined'));
app.use('/posts',posts);
app.listen(PORT);
