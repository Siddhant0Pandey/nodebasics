import { createServer } from "http";
const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Von" },
  { id: 3, name: "Neuman" },
];

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.statusCode === 404;
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is listining on port  : ${PORT}`);
});
