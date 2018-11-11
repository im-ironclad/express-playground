module.exports = {
  get(req, res) {
    let data = {};
    // Return response
    return res.status(200).send('hello from api');
  },

  home(req, res) {
    return res.send('Welcome Home');
  }
}