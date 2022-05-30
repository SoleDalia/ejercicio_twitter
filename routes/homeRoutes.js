const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", (req, res) => {
  res.render("signup");
});

router.get("/2signup", (req, res) => {
  res.render("2signup");
});

router.get("/3signup", (req, res) => {
  res.render("3signup");
});

router.get("/error", (req, res) => {
  res.render("error");
});

module.exports = router;
