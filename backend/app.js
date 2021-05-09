var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const usersRouter = require('./routes/salle.route');

const app = express();
const mongoose = require('mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose
    .connect('mongodb+srv://root:root@cluster0.tjtrp.mongodb.net/ppd_database?retryWrites=true&w=majority',
        { useNewUrlParser: true,
          useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/users', usersRouter);


module.exports = app;
