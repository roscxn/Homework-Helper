const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const seed = async (req, res) => {
  const plainTextPassword = "345";
  bcrypt.hash(plainTextPassword, saltRounds, async (err, hash) => {
    const user = await User.create({ userid: "ros", password: hash, name: "Ros" });
    res.send(user);
  });
};

const index = async (req, res) => {
  const context = { msg: "Welcome back!" };
  res.render("users/login", context);
};


/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */

const login = async (req, res) => {
  const { userid, password } = req.body;
  const user = await User.findOne({ userid }).exec();
  if (user === null) {
    const context = { msg: "Invalid User ID or Password" };
    res.render("users/login", context);
    return;
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      req.session.user = {user_id: userid, name: user.name };
      res.redirect(`/posts`);
      console.log(req.session)
    } else {
      const context = { msg: "Incorrect User ID or Password" };
      res.render("users/login", context); 
    }
  });
  
};

const logout = async (req,res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  })
};

module.exports = {
  index,
  login,
  seed,
  logout
};