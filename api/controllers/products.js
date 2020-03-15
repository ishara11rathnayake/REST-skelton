const mongoose = require("mongoose");

const Product = require("../models/product");

exports.products_save_products = async (req, res, next) => {
  try {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price
    });

    const savedProduct = await product.save();

    res.status(200).json({
      message: "product saved successfully.",
      leave: savedProduct
    });
  } catch (error) {
    handleError(res, error);
  }
};

exports.products_get_products = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "It works!"
    });
  } catch (error) {
    handleError(res, error);
  }
};

const handleError = (res, error) => {
  console.log(error);
  res.status(500).json({
    error: error
  });
};
