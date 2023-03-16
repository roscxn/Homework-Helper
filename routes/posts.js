const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const User = require("../models/User");



const isAuth = async (req, res, next) => {
  try {
    if (req.session.user.user_id) {
      const user = await User.findById(req.session.user.user_id).exec();
      res.locals.user = user;
      next();
    } else {
    const context = { msg: "Session expired. Please login again." };
    res.render("users/login", context);
    }
  } catch (err) {
    const context = { msg: "Session expired. Please login again." };
    res.render("users/login", context);
  }
};

// const isAuth = async (req, res, next) => {
//   try {
//     if (req.session.user.user_id) {
//       const user = await User.findById(req.session.user.user_id).exec();
//       res.locals.user = user;
//       next();
//     } else {
//       res.status(403).send('Session expired. Please login again <a href="/users/login">here</a>.');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Session expired. Please login again <a href="/users/login">here</a>.');
//   }
// };


router.get("/", isAuth, postsController.index);
router.get("/new", isAuth, postsController.new);
router.post("/", isAuth, postsController.create);
router.get("/my", isAuth, postsController.myPosts);
router.get("/:id", isAuth, postsController.show);
router.get("/:id/edit", isAuth, postsController.edit);
router.put("/:id", isAuth, postsController.update);
router.delete("/:id", isAuth, postsController.delete);

module.exports = router;
