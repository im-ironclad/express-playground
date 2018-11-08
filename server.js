// Require .env
require('dotenv').config();

// Require packages
const Twig = require('twig');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Require needed models
const User = require('./models/User');

// Connect to the database
mongoose.connect(process.env.DB_CONNECTSTRING, { useNewUrlParser: true})
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport stuff
app.use(passport.initialize());
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch(err => console.log(err));
}));

app.set('view engine', 'twig');
app.use(express.static(path.join(__dirname, 'assets/build')));

require('./routes')(app, passport);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the API',
}));

app.listen(port);