const express = require("express");
const { newUser, showUser, findUser, createUser } = require("../controllers/pagesController");
const router = express.Router();

// home
router.get("/", (req, res) => {
  res.render("home");
});

// loguearse

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", (req, res) => {
  findUser(req, res);
});

// registrarse
router.get("/2signup", (req, res) => {
  res.render("2signup");
});

router.post("/2signup", (req, res) => {
  createUser(req, res);
});

module.exports = router;
