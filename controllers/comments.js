const Post = require('../models/post');

const createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    await comment.save();
    res.redirect(`/posts/${post._id}`);
  } catch (error){
    console.log(error);
    res.status(500).send('Error creating review');
  }
}


module.exports = {
    createComment
};