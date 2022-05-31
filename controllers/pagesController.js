const { User, Tweet } = require("../db/connection");

//login

const findUser = async (req, res) => {
  const showUser = await User.findOne({ where: { email: req.body.email } });
  if (!showUser) {
    res.json("data is not correct");
  }
  if (showUser.password !== req.body.password) {
    res.json("data is not correct");
  }
  if (showUser.username !== req.body.username) {
    res.json("data is not correct");
  }
  res.redirect("/home");
};

// create
async function createUser(req, res) {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.redirect("/signin");
  } catch (error) {
    res.redirect("/");
  }
}

// traigo todos los tweets
const showTweets = async (req, res) => {
  const tweets = await Tweet.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.render("feed", { tweets });
};

// traigo el profile del usuario solicitado
const showUserProfile = async (req, res) => {
  const otherUser = await User.findById(req.params.id);
  const loggedUser = await User.findById(req.user._id);
  try {
    if (req.params.id === req.user.id) res.render("profile", { user: loggedUser });
    else res.render("otherProfile", { otherUser, user: loggedUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findUser,
  createUser,
  showTweets,
  showUserProfile,
};
