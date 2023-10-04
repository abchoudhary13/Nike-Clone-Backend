const FavouriteModel = require("../models/favourite.model");

const getFav = async (req, res) => {
  const { userId } = req.query;
  try {
    const favData = await FavouriteModel.find({ user: userId });
    res.status(200).json({ data: favData });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const addToFav = async (req, res) => {
  try {
    const favData = await FavouriteModel(req.body);
    await favData.save();
    res.status(200).json({ msg: "Item added to Favourites" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const removeFav = async (req, res) => {
  try {
    const favData = await FavouriteModel.findByIdAndDelete({
      _id: req.query.productId,
    });
    res.status(200).json({ msg: "Item removed from favourites" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { addToFav, getFav, removeFav };
