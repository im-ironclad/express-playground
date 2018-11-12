// Require Controllers
const loginController = require('../controllers/auth/loginController');

// const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = (app, passport) => {
  /**
   * Auth routes to start
   */
  // Login
  app.post('/login', loginController.signJWT);
}