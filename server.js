#!/usr/bin/env node

var path = require('path');

var configPath = path.join(__dirname, 'config');
require(path.join(configPath, 'mongoose'));
var app = require(path.join(configPath, 'express'));

function normalizePort(val) {
    'use strict';

    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = require('http').createServer(app);

function onError(error) {
    'use strict';

    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    'use strict';

    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    require('debug')('nak-node-seminar:server')('Listening on ' + bind);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);