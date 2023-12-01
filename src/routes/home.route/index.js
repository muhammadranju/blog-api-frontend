const router = require("express").Router();

const home = require("../../controller/home.controller");

router.route("/").get(home.homeGetController);

router.route("/about").get();
router.route("/contact").get();

module.exports = router;
