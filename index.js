
const http = require('http');
const fs = require("fs");
const port = 4000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else 
    fs.readFile("error.html", (err, data) => {
      res.writeHead(404, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  
});

server.listen(port, hostName, () => {
  console.log(`server is runing at http://${hostName}:${port}`);
});