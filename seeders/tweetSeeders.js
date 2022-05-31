const { faker } = require("@faker-js/faker");
const { Tweet, User } = require("../db/connection");

faker.locale = "es";

module.exports = {
  populateTweets: async () => {
    Tweet.collection.drop();
    const users = await User.find();
    for (let i = 0; i < 20; i++) {
      const random = Math.floor(Math.random() * users.length);
      const newTweet = await new Tweet({
        text: faker.lorem.sentence(3),
        author: users[random],
        creationdate: faker.date.recent(),
      });
      newTweet.save();
    }
    console.log("[Database] Se corrió el seeder de Tweets.");
  },
};
