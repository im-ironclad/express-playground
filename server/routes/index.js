// Require Controllers
const loginController = require('../controllers/auth/loginController');
const registerController = require('../controllers/auth/registerController');

// const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = (router, passport) => {
  /**
   * Auth routes to start
   */
  router.post('/register', registerController.store);
  router.post('/login', loginController.signJWT);
}