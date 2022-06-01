const express = require("express");
const publicRouter = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
const { showUserProfile } = require("../controllers/pagesController");
const { editUserProfile } = require('../controllers/userController');

// Rutas Públicas:
// ...

publicRouter.get("/home", isLoggedIn, (req, res) => {
  const user = req.user;
  res.render("feed", { user });
  console.log(user);
});

publicRouter.get("/user/:id", isLoggedIn, showUserProfile);

publicRouter.post('/user/edit', isLoggedIn, editUserProfile);

module.exports = publicRouter;
