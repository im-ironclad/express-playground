// Require Controllers 
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/auth/loginController');
const linkController = require('../controllers/linkController');

module.exports = (app, passport) => {
  
  // Home Routes
  app.get('/', homeController.get);
  app.get('/home', passport.authenticate('jwt'), homeController.home);

  // Login
  app.get('/login', loginController.view);
  app.post('/login', loginController.login);

  // Links Route(s)
  app.get('/links', linkController.get);
}