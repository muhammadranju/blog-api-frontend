const path = require("path");
const express = require("express");
const preFix = require("./routes");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve("src/views"));
app.use(express.static(path.resolve("src/public")));

app.use(preFix);

app.use((req, res, next) => {
  const error = new Error();
  error.message = `Con't find ${req.originalUrl} on the server!`;
  error.status = 404;

  next(error);
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: err.status,
    error: err,
  });
});

module.exports = app;
