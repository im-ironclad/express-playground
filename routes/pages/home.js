const express = require('express');
const router = express.Router();
const faker = require('faker');

const Link = require('../../models').Link;

router.get('/', async (req, res) => {
  let data = {
    id: faker.random.number(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
  }

  data.linkList = await Link.find({}, function (err, linkList) {
    if (err) return handleError(err);
    return linkList
  });

  res.status(200).render('pages/home.twig', data);
});

module.exports = router;