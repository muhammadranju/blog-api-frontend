const router = require("express").Router();

router.route("/posts").get();

router.route("/posts/ID").get();

module.export = router;
