const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };

const userSchema = new Schema(
  {
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    password: reqString,
    gender: reqString,
    dateOfBirth: reqString,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;
