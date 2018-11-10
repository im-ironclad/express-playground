const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

module.exports = {
  view(req, res) {
    res.status(200).render('pages/auth/login.twig');
  },

  login(req, res) {
    let errors = {};
    let email = req.body.email_address;

    User.findOne({ email })
      .then(user => {
        // Return with errors if user not found
        if (!user) {
          errors.email_address = "User not found.";
          return res.status(404).json(errors);
        }

        // If successful, Create payload for JWT
        const payload = {
          id: user.id,
          name: user.name,
        }

        // Sign Auth Token
        jwt.sign(
          payload,
          'secret',
          { expiresIn: 3600 },
          (err, token) => {
            if (err) res.status(422).send(err);
            res.json({token: `Bearer${token}`});
          }
        );

        // res.render('pages/home.twig');
      })
      .catch(err => console.log(err));
  }
}