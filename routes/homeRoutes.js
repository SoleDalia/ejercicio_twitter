const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const passport = require("passport");
const router = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
const res = require("express/lib/response");

// home
router.get("/", isNotLoggedIn, (req, res) => {
  res.render("home");
});

// loguearse

router.get("/signin", isNotLoggedIn, (req, res) => {
  res.render("signin");
});

router.post(
  "/signin",
  isNotLoggedIn,
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/signin",
  }),
);

router.post("/signin", isNotLoggedIn, (req, res) => {
  findUser(req, res);
});

router.post("/signup", isNotLoggedIn, createUser);

router.get("/modal", function (req, res) {
  res.render("modal");
});

router.get("/logout", function (req, res) {
  res.redirect("/");
});

module.exports = router;
