require("dotenv").config();

const express = require("express");
const router = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const initializePassport = require("./middlewares/passport");
const session = require("express-session");
const { populateUsers } = require("./seeders/userSeeders");
const { populateTweets } = require("./seeders/tweetSeeders");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.json());

app.use(
  session({
    secret: "aguanteElEquipo12",
    resave: false,
    saveUninitialized: false,
  }),
);

initializePassport(app);

router(app);

populateUsers();
populateTweets();

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.`);
});
