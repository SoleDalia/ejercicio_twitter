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

// registrarse
router.get("/2signup", (req, res) => {
  res.render("2signup");
});

router.get("/4signup", (req, res) => {
  res.render("4signup");
});

router.post("/2signup", (req, res) => {
  createUser(req, res);
});

// extras borrar
router.get("/modal", (req, res) => {
  res.render("modal");
});

router.get("/3signup", (req, res) => {
  res.render("3signup");
});

router.get("/verify", (req, res) => {
  res.render("verify");
});
module.exports = router;
