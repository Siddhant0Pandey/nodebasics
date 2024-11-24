import http from "http";

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/home") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>HEllo, this is home page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<p>Hello this is about page</p>");
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "page not found" }));
      }
    } else {
      res.end("Wrong method");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end({ message: "Server Error" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is listining on port  : ${PORT}`);
});
