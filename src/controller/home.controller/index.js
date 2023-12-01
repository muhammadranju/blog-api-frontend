const URL = process.env.BASE_URL;

const homeGetController = async (req, res, next) => {
  try {
    const data = await fetch(`${URL}/articles`);
    const posts = await data.json();
    return res
      .status(200)
      .render("pages/index", { title: "Home", posts: posts.data });
  } catch (error) {
    next(error);
  }
};

module.exports = { homeGetController };
