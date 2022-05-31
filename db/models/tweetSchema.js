const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  text: { type: String, required: true, max: 140 },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  creationdate: { type: Date, required: true },
  likes: { type: Array },
});

module.exports = mongoose.model("Tweet", tweetSchema);
