const OrderModel = require("../models/order.model");
const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ user: userID });
    res.status(200).json({ msg: "Orders fetched successfully", orders });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const postOrders = async (req, res) => {
  try {
    const order = await OrderModel({ ...req.body });
    await order.save();
    res.status(200).json({ msg: "Order placed successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { getOrders, postOrders };
