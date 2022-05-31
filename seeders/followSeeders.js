const { faker } = require("@faker-js/faker");
const { User } = require("../db/connection");

faker.locale = "es";

module.exports = {
  populateFollow: async () => {
    for (let i = 0; i < 200; i++) {
      const random1 = Math.floor(Math.random() * 20);
      const random2 = Math.floor(Math.random() * 20);
      const randomUser1 = await User.findOne().skip(random1);
      const randomUser2 = await User.findOne().skip(random2);
      if (random1 !== random2) {
        await User.updateOne(
          { _id: randomUser1, followers: { $ne: randomUser2 } },
          {
            $push: {
              followers: randomUser2,
            },
          },
        );
        await User.updateOne(
          { _id: randomUser2, following: { $ne: randomUser1 } },
          {
            $push: {
              following: randomUser1,
            },
          },
        );
      }
    }
    console.log("[Database] Se corrió el seeder de Follow.");
  },
};
