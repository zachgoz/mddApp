var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var Status = mongoose.model('Status');
var ProblemType = mongoose.model('ProblemType');
var Priority = mongoose.model('Priority');
var Equipment = mongoose.model('Equipment');
var ServiceOrder = mongoose.model('ServiceOrder');
var _ = require('underscore');
var async = require('async');

var thisday = new Date("February 24, 2014 03:15:00");

