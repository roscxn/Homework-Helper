const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
// const User = require("../models/User");

// const isAuth = async (req, res, next) => {
//   if (req.session.userid) {
//     const user = await User.findById(req.session.userid).exec();
//     res.locals.user = user;
//     next();
//   } else {
//     res.status(403).send("Session expired. Please login again <a href='/users/login'>here</a>.");
//   }
// };

router.get("/", postsController.index);
router.get("/new", postsController.new);
router.post("/", postsController.create);
router.get("/my", postsController.myPosts);
router.get("/:id", postsController.show);

router.get("/:id/edit", postsController.edit);
router.put("/:id", postsController.update);

router.delete("/:id", postsController.delete);

// router.get("/", isAuth, postsController.index);
// router.get("/new", isAuth, postsController.new);
// router.post("/", isAuth, postsController.create);
// router.get("/my", isAuth, postsController.myPosts);
// router.get("/:id", isAuth, postsController.show);
// router.get("/:id/edit", isAuth, postsController.edit);
// router.put("/:id", isAuth, postsController.update);
// router.delete("/:id", isAuth, postsController.delete);

module.exports = router;