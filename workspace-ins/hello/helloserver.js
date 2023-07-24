const http = require('node:http');
const fs = require('node:fs');

const port = 8000;
http.createServer(function(req, res){
  // console.log(req.url);
  // res.writeHead(200);
  // res.write('<h1>Hello HTTP Server!</h1>');
  // res.end();
  fileServe(req, res);
}).listen(port, function(){
  console.log('Start HTTP Server.', port);
});
// http://localhost:8000/hello.html

function fileServe(req, res){
  let filename = req.url.substring(1);

  // 동기 방식의 함수 호출
  try{
    let data = fs.readFileSync(filename);
    res.writeHead(200);
    res.end(data);
  }catch(err){
    console.error(err);
    res.writeHead(404);
    res.end('<h1>' + req.url + ' file not found!</h1>');
  }

}