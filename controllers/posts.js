const post = require("../models/post");
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
    const userName = req.session.user.name;
    req.body.name = userName;
    const imageUrl = req.body.imageUrl;
    res.locals.imageUrl = imageUrl; 
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
  } catch (error){
    console.log(error);
    res.redirect('/posts');
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
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { post });
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true }).exec();
    res.redirect("/posts/my");
  } catch (err) {
    console.error(err);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).exec();
    const context = { id, post };
    res.render("posts/edit", context);
  } catch (err) {
    console.error(err);
  }
};

const del = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    res.redirect("/posts/my");
  } catch (err) {
    console.error(err);
  }
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
  
