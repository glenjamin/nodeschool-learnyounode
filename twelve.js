var http = require('http');

var map = require('through2-map');

var upcase = map({decodeStrings: false}, function(chunk) {
    return chunk.toUpperCase();
});

var server = http.createServer(function(req, res) {
    req.setEncoding('utf8');
    req.pipe(upcase).pipe(res);
});

server.listen(process.argv[2]);
