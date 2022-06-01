const mongoose = require("mongoose");
const User = require("./models/userSchema");
const Tweet = require("./models/tweetSchema");

try {
  mongoose.connect("mongodb://localhost/twitter", { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => console.log("[MongoDB] Connection established"))
    .on("error", (error) => console.log("[MongoDB] Error: " + error));

} catch (error) {
  console.log('[MongoDB] Error: ' + error + 'Reconnecting...');
  mongoose.connect("mongodb://localhost/twitter", { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => console.log("[MongoDB] Connection established"))
    .on("error", (error) => console.log("[MongoDB] Error: " + error));

}

module.exports = {
  User,
  Tweet,
};
