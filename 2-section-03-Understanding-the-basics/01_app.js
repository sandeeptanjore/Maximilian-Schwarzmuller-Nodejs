const http = require('http');
//console.log(http);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();
  res.setHeader('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page </title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
