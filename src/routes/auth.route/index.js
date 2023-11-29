const router = require("express").Router();

router.route("/user/login").get();
router.route("/user/login").post();

router.route("/user/signup").get();
router.route("/user/singup").post();

router.route("/user/forgot-password").get();
router.route("/user/forgot-password").post();

router.route("/user/reset-password").get();
router.route("/user/reset-password").post();

module.exports = router;
