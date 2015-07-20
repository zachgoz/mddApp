/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./model/db');
var routes = require('./routes');
var user = require('./routes/user');
var customer = require('./routes/customer');

var helloworld = require('./routes/helloworld');

var sample = require('./routes/sample');

var dbquery = require('./routes/dbquery');



var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('S3CR3T'));
app.use(express.session({
	expires : new Date(Date.now() + 3600000)
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.locals._      = require('underscore');
app.locals.moment = require('moment');
app.locals.accounting = require('accounting');
app.locals.numeral = require('numeral');
app.locals.Today = new Date("February 24, 2014 03:15:00");

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);

//Workshop samples
app.get('/helloworld', helloworld.hello);

app.get('/sample', sample.presentform);
app.post('/sample', sample.echodata);

app.get('/dbquery1', dbquery.query1);				//  DB Query Examples 
app.get('/dbquery2', dbquery.query2);
app.get('/dbquery3', dbquery.query3);
app.get('/dbquery4', dbquery.query4);
app.get('/dbquery5', dbquery.query5);
app.get('/dbquery6', dbquery.query6);
app.get('/dbquery7', dbquery.query7);
app.get('/dbquery8', dbquery.query8);
app.get('/dbquery9', dbquery.query9);
app.get('/dbquery10', dbquery.query10);
app.get('/dbquery11', dbquery.query11);
app.get('/dbquery12', dbquery.query12);

//Login and Validate User Routes, Logout
app.get('/login', user.loginForm);							//Display Login Form
app.post('/login', user.doLogin);							//Accept Form Data, Execute Login Action
app.get('/login/error', user.loginError);
app.post('/login/error', user.doLoginError);
app.get('/logout', user.doLogout);							//Invalidate Session and Logout.


//Customer Routes

app.get('/customer/create', customer.create);				//Form to Create a new Service Order
app.post('/customer/create', customer.doCreate); 				//Process New Service Ticket

//SeviceDetails


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});