const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

module.exports = {
  view(req, res) {
    res.status(200).render('pages/auth/login.twig');
  },

  async login(req, res) {
    let errors = {};
    let email = req.body.email_address;

    User.findOne({ email })
      .then(user => {
        // Return with errors if user not found
        if (!user) {
          errors.email_address = "User not found."
          return res.status(404).json(errors);
        }

        // If successful, Create payload for JWT
        const payload = {
          id: user.id,
          name: user.name,
        }

        let signedToken;
        // Sign Auth Token
        jwt.sign(
          payload,
          'secret',
          { expiresIn: 3600 },
          (err, token) => {
            return res.cookie('jwtToken', `Bearer${token}`, {
                maxAge: 900000,
                httpOnly: true 
              }).render('pages/home.twig');
          }
        );
        
      })
      .catch(err => console.log(err));
  }
}