const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product.routes");
const Users = require("./models/users.model");

dotenv.config();

const PORT = process.env.PORT || 3000;
const uri = process.env.DATABASE_URL;

const app = express();

app.use(express.json());

app.use("/api", productRoutes);

//
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
  console.log("Server is listening on port:", PORT);
});

// Mongoose connection
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed", err.message);
  });
