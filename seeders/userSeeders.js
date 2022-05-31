const { faker } = require("@faker-js/faker");
const { User } = require("../db/connection");

faker.locale = "es";

module.exports = {
  populateUsers: async () => {
    User.collection.drop();

    for (let i = 0; i < 5; i++) {
      const userFirstName = faker.name.firstName();
      const userLastName = faker.name.lastName();
      const newUser = await new User({
        firstname: userFirstName,
        lastname: userLastName,
        username: userFirstName + userLastName,
        email: `${userFirstName + userLastName}@gmail.com`,
        password: "123",
        description: faker.lorem.sentence(1),
      });
      newUser.save();
    }

    console.log("[Database] Se corrió el seeder de Users.");
  },
};
