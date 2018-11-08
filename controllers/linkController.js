// Require Link Model
const Link = require('../models/Link');

module.exports = {
  /**
   * GET - /links
   * 
   * Return list of all links in DB
   */
  get(req, res) {
    Link.find({})
      .then(links => {
        let data = {
          linkList: links
        }
        return res.status(200).render('pages/links.twig', data);
      })
      .catch(err => console.log(err));
  }
}