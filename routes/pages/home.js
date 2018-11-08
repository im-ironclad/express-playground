const express = require('express');
const router = express.Router();
const faker = require('faker');

router.get('/', (req, res) => {
  let data = {
    id: faker.random.number(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
  }

  res.status(200).render('pages/home.twig', data);
});

module.exports = router;