
const http = require("http")
const fs = require("fs");

const port = process.env.port;
const hostName = "127.0.0.1";

const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("index.html", 200, req, res)
  }
  else if (req.url === "/about") {
    handleReadFile("about.html", 200, req, res);
  }
  else if (req.url === "/contact") {
    handleReadFile("contact.html", 200, req, res);
  } else  {
    handleReadFile("404.html", 400, req, res);
  } 

});

server.listen(port,hostName, () => {
  console.log(`server is runing at http://${hostName}:${port}`);
})