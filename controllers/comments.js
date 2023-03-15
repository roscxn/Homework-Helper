const Post = require("../models/post");

// Comment for posts

const createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).exec();
    const userName = req.session.user.name;
    req.body.name = userName;
    const commentImg = req.body.commentUrl;
    res.locals.commentUrl = commentImg; 
    post.comments.push(req.body); 
    await post.save();
    res.redirect(`/posts/${post._id}`);    
  } catch (error){
    console.log(error);
    res.status(500).send('Error creating comment');
  }
}

// Delete comment

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const result = await Post.findOneAndUpdate({ "comments._id": commentId }, { $pull: { comments: { _id: commentId } } });
    if (!result) {
      throw new Error("Comment not found");
    }
    res.redirect(`/posts/${req.params.postId}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
    createComment,
    deleteComment,
};