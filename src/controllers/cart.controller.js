const CartModel = require("../models/cart.model");

const getCartData = async (req, res) => {
  const { userID } = req.query;
  try {
    const cartData = await CartModel.find({ user: userID });
    res.status(200).json({ data: cartData });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const addToCart = async (req, res) => {
  try {
    const cartData = await CartModel(req.body);
    await cartData.save();
    res.status(200).json({ msg: "Item added to Cart" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateCart = async (req, res) => {
  try {
    const cartData = await CartModel.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.status(200).json({ msg: "Cart updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteFromCart = async (req, res) => {
  const {productID} = req.query;
  try {
    const cartData = await CartModel.findByIdAndDelete({ _id: productID });
    res.status(200).json({ msg: "Cart updated successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getCartData, addToCart, updateCart, deleteFromCart };
