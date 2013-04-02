var WebSocketServer = require('ws').Server;


var wss = new WebSocketServer({port: 8080});

wss.on('connection', function(connection) {
    connection.on('message', function(message) {

        console.log('Received Message: ' + message);
//        console.log('Received Message from ' + connection.remoteAddress + ': ' + message);
        connection.send(message);

    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Connection from ' + ' closed.');
    });
});