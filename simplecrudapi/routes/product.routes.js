const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/products", createProduct);

router.get("/products", getProducts);

router.get("/product/:id", getProductById);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

module.exports = router;
