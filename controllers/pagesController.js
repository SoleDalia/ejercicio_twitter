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
const createUsers = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
    console.log(error);
  }
};

// traigo todos los tweets
const showTweets = async (req, res) => {
  const tweets = await Tweet.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.render("feed", { tweets });
};

// traigo profile
const ShowProfiles = async (req, res) => {
  const user = User.findByPk(req.params.id);
  if (!user) return res.json("404 error profile not found");
  else res.render("profile", { user });
};

module.exports = {
  findUser,
  createUsers,
  showTweets,
  ShowProfiles,
};
