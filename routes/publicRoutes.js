const express = require("express");
const publicRouter = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
<<<<<<< HEAD
const { showUserProfile } = require("../controllers/pagesController");
const { editUserProfile } = require('../controllers/userController');

=======
>>>>>>> eb20a24fad7708100640890df15c19c2bc65ba55
// Rutas Públicas:
// ...

publicRouter.get("/home", isLoggedIn, (req, res) => {
    res.render("feed", { user: req.user });
})

publicRouter.post('/user/edit', isLoggedIn, editUserProfile);

module.exports = publicRouter;
