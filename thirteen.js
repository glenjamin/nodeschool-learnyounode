var url = require('url');
var http = require('http');

var moment = require('moment');

var server = http.createServer(function(req, res) {
    req.setEncoding('utf8');

    var reqUrl = url.parse(req.url, true);

    var time = moment(reqUrl.query.iso);

    if (reqUrl.pathname == '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            hour: time.hour(), minute: time.minute(), second: time.second()
        }))
    } else if (reqUrl.pathname == '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            unixtime: time.valueOf()
        }))
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({error: "Not Found"}))
    }
});

server.listen(process.argv[2]);
