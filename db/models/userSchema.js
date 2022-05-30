const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: DataTypes.STRING(100), defaultValue: false, allowNull: false },
  email: { type: String, required: true, unique: true },
  description: { type: String },
  photo: { type: String },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tweet" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", userSchema);
