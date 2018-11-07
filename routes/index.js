const faker = require('faker');

var appRouter = function (app) {

  // Base home route
  app.get('/', function(req, res) {
    data = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email()
    }
    res.status(200).render('pages/home.twig', data);
  });

}

module.exports = appRouter;