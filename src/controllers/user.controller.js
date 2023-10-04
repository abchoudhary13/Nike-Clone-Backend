const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(400).json({ msg: "Email already exists" });
  } else {
    bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        res.status(400).json({ msg: err });
      } else {
        try {
          const user = await UserModel({ ...req.body, password: hash });
          await user.save();
          res.status(200).json({ msg: "User registered successfully" });
        } catch (error) {
          res.status(400).json({ msg: error });
        }
      }
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (!result) {
        res.status(400).json({ msg: "Wrong password" });
      } else {
        const token = jwt.sign({ userID: existingUser._id }, "secretkey");
        res
          .status(200)
          .json({
            msg: "Logged in successfully",
            token,
            userName: existingUser.firstName,
            userID: existingUser._id,
          });
      }
    });
  } else {
    res.status(400).json({ msg: "User not found" });
  }
};

module.exports = { register, login };
