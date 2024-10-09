const http = require('http');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const names = process.env.NAMES ? process.env.NAMES.split(',') : ['No names defined'];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${process.env.GREETING || 'Hello'}, World!\n`);
  } else if (req.url === '/names') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ names }));
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

~     

