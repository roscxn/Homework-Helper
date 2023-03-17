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
    const sessionUser = req.session.user.name;
    const post = await Post.findOne({ "comments._id": commentId });
    const comment = post.comments.find((c) => c._id.toString() === commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }
    if (sessionUser === comment.name) {
      const result = await post.updateOne({ $pull: { comments: { _id: commentId } } });
      if (!result) {
        throw new Error("Comment not found");
      }
      res.redirect(`/posts/${req.params.postId}`);
    } else {
      res.status(401).send("Unauthorized to delete the comment");
    }
  } catch (err) {
    console.error(err);
  }
};


module.exports = {
    createComment,
    deleteComment,
};