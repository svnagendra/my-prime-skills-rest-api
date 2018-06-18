var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World! This is a My Prime Skills App. An awesome app for talented developers to meet clients. "
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
module.exports = app;
