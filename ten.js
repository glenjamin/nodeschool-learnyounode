var net = require('net');

var moment = require('moment');

var server = net.createServer(function(connection) {
    connection.end(moment().format('YYYY-MM-DD hh:mm') + "\n");
});

server.listen(process.argv[2]);
