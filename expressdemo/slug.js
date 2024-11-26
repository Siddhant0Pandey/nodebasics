const express = require("express");
const app = express();
const port = 4000;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Von" },
  { id: 3, name: "Neuman" },
];

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(users.filter((user) => user.id === id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
