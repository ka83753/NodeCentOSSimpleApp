var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World from Distelli. Your Node.js application is working in test!\n');
}).listen(8005);

console.log('Server started');
