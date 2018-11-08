module.exports = {
  view(req, res) {
    res.status(200).render('pages/auth/login.twig');
  },
  async login(req, res) {
    // Get post data and create new user
    // If success, sign jwt token and return to homepage
    // If error, return error
  }
}