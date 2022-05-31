const express = require("express");
const publicRouter = express.Router();
const { isNotLoggedIn, isLoggedIn } = require("../middlewares/auth");
// Rutas Públicas:
// ...

publicRouter.get("/home", isLoggedIn, (req, res) => {
    res.render("feed", { user: req.user });
})

module.exports = publicRouter;
