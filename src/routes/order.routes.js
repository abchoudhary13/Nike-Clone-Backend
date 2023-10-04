const { Router } = require("express");
const { getOrders, postOrders } = require("../controllers/order.controller");
const validation = require("../middlewares/auth.middleware");

const orderRouter = Router();

orderRouter.post("/post-orders", postOrders);
orderRouter.get("/get-orders", getOrders);

module.exports = orderRouter;
