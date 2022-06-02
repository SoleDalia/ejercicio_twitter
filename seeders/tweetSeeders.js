const { faker } = require("@faker-js/faker");
const { Tweet, User } = require("../db/connection");

faker.locale = "es";

module.exports = {
  populateTweets: async () => {
    await Tweet.collection.drop();
    const users = await User.find();
    for (let i = 0; i < 100; i++) {
      const random = Math.floor(Math.random() * users.length);
      const tweetAuthor = users[random];
      const newTweet = await new Tweet({
        text: faker.lorem.sentence(10),
        author: tweetAuthor,
        creationdate: faker.date.recent(),
      });
      newTweet.save();
      await User.findByIdAndUpdate(tweetAuthor._id, {
        $push: { tweets: newTweet },
      });
    }
    console.log("[Database] Se corrió el seeder de Tweets.");
  },
};
