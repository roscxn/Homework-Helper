var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override");
const session = require("express-session");

const MongoStore = require("connect-mongo");
// const sessionStore = MongoStore.create({
//   mongoUrl: process.env.DATABASE_URL,
//   collectionName: "sessions",
// });

require("dotenv").config();
require("./config/database");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');
var postsRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("trust proxy", 1);

app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // store: sessionStore,
    resave: false,
    // saveUninitialized: true,
    saveUninitialized: false,
    store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    collectionName: 'sessions',
    dbName: "homework-helper",
    // cookiers: { secure: true },
  }),
})
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
