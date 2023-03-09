const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  if (req.session.userid) {
    const user = await User.findById(req.session.userid).exec();
    res.locals.user = user;
    next();
  } else {
    res.status(403).send("SORRY");
  }
};

router.get("/", isAuth, postsCtrl.index);

module.exports = router;