module.exports = {
  get(req, res) {
    let data = {};
    res.status(200).render('pages/home.twig', data);
  },

  home(req, res) {
    res.send('Welcome Home');
  }
}