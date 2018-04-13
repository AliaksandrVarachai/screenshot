const http = require('http');
const fs  = require('fs');
//const { URL } = require('url');
// const http = require('http');

// let server  = http.createServer();

let server = http.createServer(function(req, res) {
  let filePath = req.url === '/' ? './index.html' : '.' + req.url;
  res.writeHead(200, {
    'Content-Type': 'text-plain'
  });
  fs.readFile(filePath, 'utf8', (err, data) => {
    res.end(data);
  });
});

console.log('Server is started on http://localhost:9080');
server.listen(9080, 'localhost');
