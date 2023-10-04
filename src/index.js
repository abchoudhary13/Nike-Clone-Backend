const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");
const cartRouter = require("./routes/cart.routes");
const orderRouter = require("./routes/order.routes");
const favouriteRouter = require("./routes/favourite.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/favourites", favouriteRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

module.exports = app;
