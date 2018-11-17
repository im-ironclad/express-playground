// Require .env
require('dotenv').config();

// Require packages
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

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

// Call our routes and pass along the router and passport
require('./routes')(router, passport);
// Set prefix of / for development
app.use('/', router);

// If we are in production serve static build and assets
if (process.env.NODE_ENV === 'production') {
  // Set prefix of /api for production
  app.use('/api', router);
  // Set static folder
  app.use(express.static(path.resolve(__dirname, '../client', 'public')));

  // Catchall similar to using historyApiFallback in dev
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'public', 'index.html'));
  });
}

app.listen(port, function () {
  console.log(`Server listening on port ${port}`)
})