const { Router } = require("express");
const validation = require("../middlewares/auth.middleware");
const {
  addToCart,
  getCartData,
  updateCart,
  deleteFromCart,
} = require("../controllers/cart.controller");

const cartRouter = Router();

cartRouter.post("/add-cart", addToCart);
cartRouter.get("/get-cart", getCartData);
cartRouter.patch("/update-cart", updateCart);
cartRouter.delete("/delete-cart", deleteFromCart);

module.exports = cartRouter;
