const Comment = require('../models/comment');

const createComment = async (req, res) => {
  try {
    const comment = await comment.findById(req.params.id);
    comment.push(req.body);
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