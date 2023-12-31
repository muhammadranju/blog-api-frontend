const URL = process.env.BASE_URL;

const articlesGetController = async (req, res, next) => {
  try {
    const articles = await fetch(`${URL}/articles`);
    const posts = await articles.json();
    res
      .status(200)
      .render("pages/posts", { title: "Post", posts: posts?.data });
  } catch (error) {
    next(error);
  }
};

const articlesSingleGetController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await fetch(`${URL}/articles/${id}`);
    const data = await posts.json();

    const articles = await fetch(`${URL}/articles`);
    const latestPost = await articles.json();

    console.log(data.error);

    return res.status(200).render("pages/blog_details", {
      post: data?.data,
      latestPost: latestPost?.data,
      title: data?.data?.title_url,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { articlesGetController, articlesSingleGetController };
