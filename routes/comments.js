const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.post('/posts/:id/comments', commentsController.createComment);

module.exports = router;