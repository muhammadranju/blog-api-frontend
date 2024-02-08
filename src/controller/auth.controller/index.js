const loginGetController = (req, res, next) => {
  try {
    return res
      .status(200)
      .render("pages/auth/login.ejs", { title: "Login page" });
  } catch (error) {
    next(error);
  }
};

const loginPostController = (req, res, next) => {
  try {
    // const { username, email, password } = req.body;
    console.log(req.body);
    return res
      .status(201)
      .render("pages/auth/login.ejs", { title: "Login page" });
  } catch (error) {
    console.log(error);
    next();
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

module.exports = {
  loginGetController,
  loginPostController,
  singupGetController,
};
