const http = require('node:http');
const port = 8080;

const static = require('node-static');
const file = new static.Server();
http.createServer(function(req, res){
  file.serve(req, res);
}).listen(port, function(){
  console.log('Start HTTP Server.', port);
});
