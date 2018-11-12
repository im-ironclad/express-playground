// Require .env
require('dotenv').config();

// Require packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(process.env.DB_CONNECTSTRING, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport initialization and config
app.use(passport.initialize());
require('./config/passport')(passport);

// Call our routes and pass along the app and passport
require('./routes')(app, passport);

// If we are in production serve static build and assets
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.resolve(__dirname, '../client', 'public')));

  // Not sure this is a good route to have..? Maybe turn into a 404 catchall
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '../client', 'public', 'index.html'));
  // });
}

app.listen(port, function () {
  console.log(`Server listening on port ${port}`)
});