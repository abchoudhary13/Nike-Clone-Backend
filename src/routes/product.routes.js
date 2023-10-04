const { Router } = require("express");
const {
  getProducts,
  addProducts,
  getSingleProduct,
} = require("../controllers/product.controller");

const productRouter = Router();

productRouter.get("/getAll", getProducts);
productRouter.get("/get-single-product/:id", getSingleProduct);
productRouter.post("/add-product", addProducts);

module.exports = productRouter;
