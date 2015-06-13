var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var rootPath = path.join(__dirname, '..');
var serverPath = path.join(rootPath, 'server');
var routesPath = path.join(serverPath, 'routes');

var app = express();

app.locals.pretty = true;

app.locals.cache = 'memory';

app.use(require('compression')({level: 9}));

app.use('/bower_components', express.static(path.join(rootPath, 'bower_components')));

app.engine('html', require('consolidate').swig);
app.set('views', path.join(serverPath, 'views'));
app.set('view engine', 'html');

app.use(require('serve-favicon')(path.join(__dirname, '..', 'public', 'assets', 'img', 'favicon.ico')));
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require(path.join(routesPath, 'indexRoutes')));
app.use('/api', require(path.join(routesPath, 'api', 'apiRoutes')));

app.use(require(path.join(routesPath, 'errorRoutes')));

module.exports = app;