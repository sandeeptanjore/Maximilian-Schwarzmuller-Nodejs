const http = require('http');
//console.log(http);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message </title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" NAME ="message"><button type="submit">Send</form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  res.setHeader('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page </title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
