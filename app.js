var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('THIS IS NODE.JS');
}) ;



var server = app.listen(2604, function() {
    console.log("Open 127.0.0.1:2604 in your browser")
});
