// Require Controllers
const loginController = require('../controllers/auth/loginController');

// const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = (router, passport) => {
  /**
   * Auth routes to start
   */
  router.post('/login', loginController.signJWT);
}