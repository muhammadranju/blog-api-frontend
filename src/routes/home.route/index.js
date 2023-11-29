const router = require("express").Router();

router.route("/").get();

router.route("/about").get();
router.route("/contact").get();

module.export = router;
