var concat = require('concat-stream');

var http = require('http');

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.pipe(concat(function(data) {
        console.log(data.length);
        console.log(data);
    }))
});
