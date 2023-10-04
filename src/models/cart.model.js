const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const cartSchema = Schema({
  title: reqString,
  gender: reqString,
  description: reqString,
  category: reqString,
  price: reqNumber,
  size: reqArray,
  color: reqString,
  rating: reqNumber,
  img: reqArray,
  quantity: reqNumber,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const CartModel = model("cart", cartSchema);

module.exports = CartModel;
