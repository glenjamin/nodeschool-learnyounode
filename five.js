var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
    if (err) throw err;
    
    var filtered = files.filter(function(file) {
	return path.extname(file) == '.' + ext;
    });

    console.log(filtered.join("\n"));
    
})
