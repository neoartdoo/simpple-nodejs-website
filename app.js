var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(' zdravo konju');
}) ;

/*
var http = require('http'); //add the http module 
var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" :"text/html"});
    response.write("<h3>Hello and start your website</h3> ");
    response.end();
}); // Create a server */
/*
myServer.listen(2604);

*/

var server = app.listen(2604, function() {
    console.log("Open 127.0.0.1:2604 in your browser")
});
