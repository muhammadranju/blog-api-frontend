const router = require("express").Router();

const post = require("../../controller/post.controller");

router.route("/posts/:id").get(post.articlesSingleGetController);

router.route("/posts").get(post.articlesGetController);

module.exports = router;
