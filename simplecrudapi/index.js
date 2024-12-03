const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const app = express();

app.get("/", (req, res) => {
  res.send("tihs is home page");
});

app.listen(PORT, () => {
  console.log("server is listing on port: ", PORT);
});
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed", err.message);
  });
