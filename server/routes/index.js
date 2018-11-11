// Require Controllers 
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/auth/loginController');

// const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = (app, passport) => {
  // Home Routes
  app.get('/', homeController.get);
  app.get('/home', homeController.home);

  // Login
  app.get('/login', loginController.view);
  app.post('/login', loginController.login);
}