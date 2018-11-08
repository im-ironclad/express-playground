// Require .env
require('dotenv').config();

// Require packages
const Twig = require('twig');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require Routes
const home = require('./routes/pages/home');
const links = require('./routes/pages/links');

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
mongoose.connect(`
  mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds155293.mlab.com:55293/db-express-playground`, {
  useNewUrlParser: true
})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'twig');
app.set('twig-options', {
  allow_async: true,
  strict_variables: false
});

// Use our routes
app.use('/', home);
app.use('/links', links);

// Create/Call our routes and pass along our models
// routes(app, models);

app.listen(port);