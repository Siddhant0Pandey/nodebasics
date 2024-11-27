const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Hello this is middleware");
  fs.appendFile(
    "test.txt",
    `\n ${Date.now()} : ${req.method} : ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.get("/home", (req, res) => {
  res.end("Hello this is home path");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
