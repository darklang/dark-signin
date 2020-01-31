#!/usr/bin/env node

var fs = require('fs')

var usercanvas = process.argv[2];
var oldcanvas = "sample-signin";
var filename = "src/api.js";

console.log(`Setting Dark canvas to ${usercanvas}`);

fs.readFile(filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(new RegExp(oldcanvas, "g"), usercanvas);

  fs.writeFile(filename, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});


