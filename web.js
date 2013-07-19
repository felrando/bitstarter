var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(128);
    buffer = fs.readFileSync('index.html');
    response.send(buf.toString(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
