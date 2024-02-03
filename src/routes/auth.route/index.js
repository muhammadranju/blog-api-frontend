const router = require("express").Router();

const {
  loginGetController,
  singupGetController,
} = require("../../controller/auth.controller");

router.route("/user/login").get(loginGetController);
router.route("/user/login").post();

router.route("/user/signup").get(singupGetController);
router.route("/user/singup").post();

router.route("/user/forgot-password").get();
router.route("/user/forgot-password").post();

router.route("/user/reset-password").get();
router.route("/user/reset-password").post();

module.exports = router;
