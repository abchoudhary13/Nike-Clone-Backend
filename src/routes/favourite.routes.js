const { Router } = require("express");
const {
  getFav,
  addToFav,
  removeFav,
} = require("../controllers/favourite.controller");

const favouriteRouter = Router();

favouriteRouter.get("/get-favourites", getFav);

favouriteRouter.post("/add-to-favourites", addToFav);

favouriteRouter.delete("/remove-from-favourites", removeFav);

module.exports = favouriteRouter;
