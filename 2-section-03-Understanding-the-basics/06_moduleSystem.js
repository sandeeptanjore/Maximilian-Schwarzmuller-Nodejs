const http = require('http');
const routes = require('./07_routes');

const server = http.createServer(routes);

server.listen(3000);
