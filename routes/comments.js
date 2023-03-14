const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.post('/posts/:id/comments', commentsController.createComment);
router.delete("/posts/:postId/comments/:commentId", commentsController.deleteComment);

module.exports = router;