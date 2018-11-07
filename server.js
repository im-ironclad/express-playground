const Twig = require('twig');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'twig');
app.set('twig-options', {
  allow_async: true,
  strict_variables: false
});

// Create/Call our routes
routes(app);

app.listen(port);