const { Router } = require("express");
const express = require("express");
const publicRouter = express.Router();

// Rutas Públicas:
// ...

publicRouter.get("/home", (req, res) => {
    res.render("feed");
})

module.exports = publicRouter;
