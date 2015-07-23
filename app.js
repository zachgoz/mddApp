/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./model/db');
var routes = require('./routes');
var user = require('./routes/user');
var customer = require('./routes/customer');
var request = require('./routes/request');

var helloworld = require('./routes/helloworld');

var sample = require('./routes/sample');

var dbquery = require('./routes/dbquery');

var profile = require('./routes/profile');

// My Devices Routes
var mydevices = require('./routes/mydevices');
var deviceDetail = require('./routes/device-detail');

// My Requests Routes
var myrequests = require('./routes/myrequests');
var requestDetail = require('./routes/request-detail');


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

// My Devices Getters and Setters
app.get('/mydevices', mydevices.devices);
app.get('/device-detail', deviceDetail.deets);

// My Devices Getters and Setters
app.get('/myrequests', myrequests.requests);
app.get('/request-detail', requestDetail.deets);

//Workshop samples
app.get('/helloworld', helloworld.hello);

app.get('/sample', sample.presentform);
app.post('/sample', sample.echodata);

app.get('/profile', profile.profile);
app.get('/request', request.request);

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