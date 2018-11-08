// Require .env
require('dotenv').config();

// Require packages
const Twig = require('twig');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require models
const models = require('./models');

// Require Routes
const home = require('./routes/pages/home');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(`
  mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds155293.mlab.com:55293/db-express-playground`, {
  useNewUrlParser: true
});
// Create db instance and check for success or error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('database connected'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'twig');
app.set('twig-options', {
  allow_async: true,
  strict_variables: false
});

app.use('/', home);

// Create/Call our routes and pass along our models
// routes(app, models);

app.listen(port);