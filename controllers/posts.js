const Post = require("../models/post");

const index = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.render('posts/index', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const newPost = async (req, res) => {
  try {
    res.render('posts/new');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const create = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
  } catch (error){
    console.log(error);
    res.direct('/posts');
  }
}

const myPosts = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.render('posts/my', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

const show = async (req, res) => {
  try {
    const individualPost = await Post.findById(req.params.id);
    res.render('posts/show', { individualPost });
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

const update = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndUpdate(id, req.body, { new: true })
    .exec()
    .then((post) => {
      res.redirect("/posts/my");
    });
};

const edit = (req, res) => {
  const { id } = req.params; 
  const e =
  Post.findById(id)
    .exec()
    .then((post) => {
      const context = { id, post, e };
      res.render("posts/edit", context);
    });
};

const del = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .exec()
    .then((post) => {
      console.log("post deleted: " + post._id);
      res.redirect("/posts/my");
    });
};

  module.exports = {
    index,
    new: newPost,
    create,
    myPosts,
    show,
    update,
    edit,
    delete: del
  }
  
