var http = require('http'); //add the http module 
var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" :"text/plain"});
    response.write("Hello");
    response.end();
}); // Create a server

myServer.listen(2604);
