const User = require("../db/models/userSchema.js");
const { faker } = require("@faker-js/faker");

// const generateUser = async () => {
//   for (let i = 0; i < 10; i++) {
//     const user = new User({
//       firstName: faker.name.firstName(),
//       lastName: faker.name.firstName(),
//       age: faker.datatype.number({ min: 18, max: 99 }),
//     });
//     await user.save();
//   }
// };

module.exports = generateUser;
