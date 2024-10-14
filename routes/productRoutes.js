const express = require("express");
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

// GET api/products
router.get("/products", getAllProducts);

// GET api/products/:id
router.get("/products/:id",getProductById);

module.exports = router;
