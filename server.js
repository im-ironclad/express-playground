// Require .env
require('dotenv').config();

// Require packages
const Twig = require('twig');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Set view engine
app.set('view engine', 'twig');
app.use(express.static(path.join(__dirname, 'assets/build')));

// Require needed models
const User = require('./models/User');

// Connect to the database
mongoose.connect(process.env.DB_CONNECTSTRING, { useNewUrlParser: true})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport initaliation and config
app.use(passport.initialize());
require('./config/passport')(passport);

require('./routes')(app, passport);
// Catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the API',
}));

app.listen(port);