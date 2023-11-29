const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve("src/views"));
app.use(express.static(path.resolve("src/public")));

app.get("/", (req, res) => {
  return res.render("pages/index");
});

module.exports = app;
