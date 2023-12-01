const path = require("path");
const express = require("express");
const preFix = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve("src/views"));
app.use(express.static(path.resolve("src/public")));

app.use(preFix);

module.exports = app;
