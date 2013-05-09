
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    models = require('./schema'),
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
//io.set('heartbeat interval', 180);
io.set('transports', [ 'websocket']);

io.configure('production', function(){
    io.enable('browser client etag');

});

io.configure('development', function(){

});

var rpc = require('socket.io-rpc');
rpc.createServer(io, app);
rpc.expose('myChannel', {
    getTime: function () {
        return new Date();
    },
    myTest: function (param) {
        return "Returning some string with " + param;
    }
}, function (handshakeData, callback) {
    console.dir(handshakeData);
    if (handshakeData.query.password === 'fubar') {
        callback(null, true);
    } else {
        callback(null, false);
    }
});



io.sockets.on('connection', function (socket) {
//    socket.emit('news', { hello: 'world' });
    console.log('connection came ');
    rpc.loadClientChannel(socket,'clientChannel', function (socket, fns) {
        fns.fnOnClient("pokus hokus").then(function (ret) {
            console.log("client returned: " + ret);
        });
    });
    socket.on('my event', function (data) {
        console.log('my event came ');
        console.log(data);
//        rpc.loadChannel('')
//        socket.rpc.myChannel
    });
});