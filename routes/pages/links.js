const express = require('express');
const router = express.Router();

const Link = require('../../models/Link');

// Base links route
router.get('/', (req, res) => {
  Link.find({}, function (err, linkList) {
    if (err) return res.send(err);
    let data = {
      linkList: linkList
    };
    return res.status(200).render('pages/links.twig', data);
  });
});

module.exports = router;