const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userid: String, 
    password: String,
    name: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
