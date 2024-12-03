const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the product name"],
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, "Quantity cannot be negative"],
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Price cannot be negative"],
  },
  image: {
    type: String,
    required: [false, "Image URL is required"],
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
