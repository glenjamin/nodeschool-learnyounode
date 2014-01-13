var dir = process.argv[2];
var ext = process.argv[3];

require('./six-module.js')(dir, ext, function(err, files) {
  if (err) throw err;

  console.log(files.join("\n"));
})
