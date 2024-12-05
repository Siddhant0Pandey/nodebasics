const express = require("express");
const Product = require("./models/product.model");
const Users = require("./models/users.model");

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const uri = process.env.DATABASE_URL;
const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    console.log(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log("server is listing on port: ", PORT);
});

// mongoose connection
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed", err.message);
  });
