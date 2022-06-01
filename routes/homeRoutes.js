const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const passport = require("passport");
const router = express.Router();
<<<<<<< HEAD
const { isNotLoggedIn } = require("../middlewares/auth");
const { Router } = require("express");
=======
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
const res = require("express/lib/response");
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55

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

<<<<<<< HEAD
router.get("/logout", (req, res) => {
  req.logOut(function () {
    res.redirect('/');
  });
});

router.get('/modal', (req, res) => {
  res.render('modal');
})
=======
router.get("/modal", function (req, res) {
  res.render("modal");
});

router.get("/logout", function (req, res) {
  res.redirect("/");
});
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55

module.exports = router;
