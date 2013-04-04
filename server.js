
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
//    ws_server = require('./ws_server.js'),
    models = require('./models'),
    path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 80);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
var io = require('socket.io').listen(server);

//io.set('heartbeats', false);  // we would like this, but it does not work like this
io.set('log level', 2);
io.set('transports', [ 'websocket']);

io.configure('production', function(){
    io.enable('browser client etag');

});

io.configure('development', function(){

});

var rpc = require('socket.io-rpc');
rpc.createMaster(io, app);
rpc.expose('myChannel', {
    getTime: function () {
        return new Date();
    },
    myTest: function (param) {
        return "Returning some string with " + param;
    }
});

io.sockets.on('connection', function (socket) {
//    socket.emit('news', { hello: 'world' });
    socket.on('my event', function (data) {
        console.log('socket.on: ');
        console.log(data);
    });
});