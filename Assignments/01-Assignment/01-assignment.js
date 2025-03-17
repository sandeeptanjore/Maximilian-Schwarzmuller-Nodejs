const http = require('http');
console.log('HTTP :' + http);

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message </title></head>');
    res.write('<h1>Hello Sandeep </h1>');
    res.write(
      `<body>
       <form action='/create-user' method='POST'>
          <input name='user' placeholder='enter user name' />
          <button>Submit</button>
      </form>
      </body>`
    );

    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Enter Message </title></head>');
    res.write('<ul><li>Sandeep </li></ul>');
    res.write('<ul><li>Soni </li></ul>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toLocaleString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      // return res.end();
    });
  }
});

server.listen(3000);
