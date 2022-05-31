const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const passport = require("passport");
const router = express.Router();

// home
router.get("/", (req, res) => {
  res.render("home");
});

// loguearse

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/signin",
}));

router.post("/signin", (req, res) => {
  findUser(req, res);
});

router.post("/signup", createUser);


module.exports = router;
