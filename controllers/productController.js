const Product = require("../models/product"); // Import model Product

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  const code = req.params.id;
  const product = await Product.findOne({code: code});
  if (product) {
    return res.status(200).json({
      product,
    });
  }
  return res.status(404).json({
    message: "Produk tidak ditemukan",
  });
};

module.exports = { getAllProducts, getProductById };
