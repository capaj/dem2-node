var WebSocketServer = require('websocket').server;
var express = require('express')
    , http = require('http');

var WSapp = express();
WSapp.configure(function(){
    WSapp.set('port', 8080)
});

var server_forWS = http.createServer(WSapp).listen(8080, function(){
    console.log("Websocket server listening on port 8080");
});

wsServer = new WebSocketServer({
    httpServer: server_forWS,
    autoAcceptConnections: false
});
module.exports = wsServer;

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }
    var ip = request.remoteAddress;
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted from ' + ip);
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message from ' + connection.remoteAddress + ': ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Connection from ' + ip + ' closed.');
    });
});
