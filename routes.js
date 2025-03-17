const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        console.log(parsedBody);
        res.writeHead(302, { Location: '/' });
        return res.end();
      });
    });
  }

  res.setHeader('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js</h1></body>');
  res.write('</html>');
  res.end();
};

//1st way of exporting
//this is called as registering my function
// module.exports = requestHandler;

//2nd way of exporting
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text',
// };

//3rd way of exporting
exports.handler = requestHandler;
exports.someText = 'Some hard coded notes';
