
const http = require('http');
const fs = require("fs");
const port = 4000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {

  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });  
  
  }

  if (req.url === "/") {
    handleReadFile(200, "index.html");
  } else if (req.url === "/about") {
     handleReadFile(200, "about.html");
    // fs.readFile("about.html", (err, data) => {
    //   res.writeHead(200, { "Content-type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else if (req.url === "/contact") {
    handleReadFile(200, "contact.html");
    
    // fs.readFile("contact.html", (err, data) => {
    //   res.writeHead(200, { "Content-type": "text/html" });
    //   res.write(data);
    //   res.end();
    // });
  } else 
    fs.readFile("error.html", (err, data) => {
      handleReadFile(404, "error.html");
      
      // res.writeHead(404, { "Content-type": "text/html" });
      // res.write(data);
      // res.end();
    });
  
});

server.listen(port, hostName, () => {
  console.log(`server is runing at http://${hostName}:${port}`);
});