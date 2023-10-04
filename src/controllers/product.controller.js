const ProductModel = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res
      .status(200)
      .json({ msg: "Products fetched successfully", data: products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(400).json({ err: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const addProducts = async (req, res) => {
  try {
    const product = await ProductModel(req.body);
    await product.save();
    res.status(200).json({ msg: "Product saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { getProducts, addProducts,getSingleProduct };
