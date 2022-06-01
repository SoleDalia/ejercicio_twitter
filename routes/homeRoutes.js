const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const passport = require("passport");
const router = express.Router();
const { isNotLoggedIn } = require("../middlewares/auth");
const { Router } = require("express");

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

router.get("/logout", (req, res) => {
  req.logOut(function () {
    res.redirect('/');
  });
});

router.get('/modal', (req, res) => {
  res.render('modal');
})

module.exports = router;
