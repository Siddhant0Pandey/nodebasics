const express = require("express");
const app = express();
const port = 4000;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Von" },
  { id: 3, name: "Neuman" },
];

app.get("/", (req, res) => {
  res.send("Hello World! welcome");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
