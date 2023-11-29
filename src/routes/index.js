const router = require("express").Router();

const home = require("./home.route");
const post = require("./post.route");
const category = require("./category.route");
const author = require("./author.route");

router.use([home, post, category, author]);

module.export = router;
