module.exports = {
  get(req, res) {
    let data = {};
    // Return response
    return res.status(200).render('pages/home.twig', data);
  },

  home(req, res) {
    return res.send('Welcome Home');
  }
}