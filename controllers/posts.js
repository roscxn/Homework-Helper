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

function newPost(req, res) {
  res.render('posts/new');
}

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
    const post = await Post.findById(req.params.id)
    return res.render("posts/show", { "post": post } 
    );
  }

  module.exports = {
    index,
    new: newPost,
    create,
    myPosts,
    show
  }
  
