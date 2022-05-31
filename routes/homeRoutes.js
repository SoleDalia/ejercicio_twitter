const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const passport = require("passport");
const router = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");

// home
router.get("/", isNotLoggedIn, (req, res) => {
  res.render("home");
});

// loguearse

router.get("/signin", isNotLoggedIn, (req, res) => {
  res.render("signin");
});

router.post("/signin", isNotLoggedIn, passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/signin",
}));

router.post("/signin", isNotLoggedIn, (req, res) => {
  findUser(req, res);
});

router.post("/signup", isNotLoggedIn, createUser);


module.exports = router;
