const loginGetController = (req, res, next) => {
  try {
    return res
      .status(200)
      .render("pages/auth/login.ejs", { title: "Login page" });
  } catch (error) {
    next(error);
  }
};
const singupGetController = (req, res, next) => {
  try {
    return res
      .status(200)
      .render("pages/auth/signup.ejs", { title: "Signup page" });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginGetController, singupGetController };
