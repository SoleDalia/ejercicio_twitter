const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/twitter");

mongoose.connection
  .once("open", () => console.log("[MongoDB] conexion establecida"))
  .on("error", (error) => console.log(error));
