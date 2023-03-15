const Post = require("../models/post");


// First page after login 

const index = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    const contextUser = req.session.user.name;  //Welcome back "username" in the header
    res.render('posts/index', { posts, contextUser });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};

// When accessing the create post page

const newPost = async (req, res) => {
  try {
    const contextUser = req.session.user.name;
    res.render('posts/new', { contextUser });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};


// Create post function

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
    res.status(500).send('Create post error');
  }
}

// To view posts that belong to the user

const myPosts = async (req, res) => {
  try {
    const contextUser = req.session.user.name;
    const posts = await Post.find({ name: contextUser }).exec();
    res.render('posts/my', { posts, contextUser });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
};


// To view individual posts after clicking "details" from main page

const show = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const contextUser = req.session.user.name;
    res.render('posts/show', { post, contextUser });
  } catch (err) {
    res.status(500).send('Internal server error');
  }
};

// Update edited form

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true }).exec();
    res.redirect("/posts/my");
  } catch (err) {
    console.error(err);
  }
};

// Edit page

const edit = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id).exec();
    const contextUser = req.session.user.name;
    const context = { id, post };
    res.render("posts/edit", { ...context, contextUser });
  } catch (err) {
    console.error(err);
    res.status(500).send('Edit post error');
  }
};


// Delete a post

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
  
