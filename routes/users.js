var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users");
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

router.get("/login", usersController.index);
router.post("/login", usersController.login);
router.get("/seed", usersController.seed);
router.get("/logout", usersController.logout)

module.exports = router;
