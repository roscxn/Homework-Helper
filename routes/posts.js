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
    res.status(403).send("Session expired. Please login again <a href='/users/login'>here</a>.");
  }
};

router.get("/", isAuth, postsCtrl.index);
router.get("/new", isAuth, postsCtrl.new);
router.post("/", isAuth, postsCtrl.create);
router.get("/my", isAuth, postsCtrl.myPosts);
router.get("/:id", isAuth, postsCtrl.show);

module.exports = router;