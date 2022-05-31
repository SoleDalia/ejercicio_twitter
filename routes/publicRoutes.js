const express = require("express");
const publicRouter = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
const { showUserProfile } = require("../controllers/pagesController");

// Rutas Públicas:
// ...

publicRouter.get("/home", isLoggedIn, (req, res) => {
  const user = req.user;
  res.render("feed", { user });
  console.log(user);
});

publicRouter.get("/user/:id", isLoggedIn, showUserProfile);

module.exports = publicRouter;
