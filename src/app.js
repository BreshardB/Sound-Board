var express = require('express');
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require("express-error-handler");
var socket = require("socket.io");

var app = express();

app.use(express.static(__dirname + '../assets'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('_method'));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

app.disable('etag');

app.listen(port);
