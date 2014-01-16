var concat = require('concat-stream');

var http = require('http');

all(getUrl, process.argv.slice(2), function(err, data) {
    console.log(data.join("\n"))
})

function all(fn, args, finished) {
    var result = [], count = 0;
    args.forEach(function(arg, i) {
        fn(arg, function(err, data) {
            if (err) return finished(err);

            count += 1;
            result[i] = data;

            if (count == args.length) {
                finished(null, result);
            }
        });
    })
}

function getUrl(url, callback) {
    http.get(url, function(res) {
        res.setEncoding('utf8');
        res.on('error', callback)
        res.pipe(concat(function(data) {
            callback(null, data);
        }))
    });
}



