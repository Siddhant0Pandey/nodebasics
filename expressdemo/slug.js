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

app.get("/api/name/:name", (req, res) => {
  const name = req.params.name;
  const filteredUsers = users.filter((user) => user.name === name);

  if (filteredUsers.length === 0) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(filteredUsers);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
