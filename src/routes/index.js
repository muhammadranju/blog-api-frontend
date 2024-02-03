const router = require("express").Router();

const home = require("./home.route");
const post = require("./post.route");
const category = require("./category.route");
const author = require("./author.route");
const auth = require("./auth.route");

router.use(home);
router.use(post);
router.use(category);
router.use(author);
router.use(auth);

module.exports = router;
