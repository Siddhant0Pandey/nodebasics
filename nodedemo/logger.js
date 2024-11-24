import { createServer } from "http";
const PORT = process.env.PORT || 8000;

const logger = (req, res, next) => {
  next();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.method === "GET" && req.url === "/api/login") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "hello this is logger middleware" }));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("Page not found");
      res.end();
    }
  });
});
server.listen(PORT, () => {
  console.log(`Server is listining on port  : ${PORT}`);
});
