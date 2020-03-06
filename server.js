var http = require('http');

var server = http.createServer((req, res) => {
  console.log('收到请求了');
  res.end('This is a message from remote server.');
});

server.listen(8001, '127.0.0.1', data => {
  console.log('服务已经开启，端口号为8001....');
});