// const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// TODO: Include bcrypt to hash and then cross-check passwords

module.exports = {
  signJWT(req, res) {
    let errors = {};
    let email = req.body.email_address;
    let password = req.body.password;

    User.findOne({ email })
      .then(user => {
        // Return with errors if user not found
        if (!user) {
          errors.email_address = "User not found.";
          return res.status(404).json(errors);
        }

        /**
         * Check if password entered matches users password
         */

        // If successful, Create payload for JWT
        // const payload = {
        //   id: user.id,
        //   name: user.name,
        // }

        // Sign Auth Token
        // jwt.sign(
        //   payload,
        //   'secret',
        //   { expiresIn: 3600 },
        //   (err, token) => {
        //     if (err) res.status(422).send(err);
        //     res.json({token: `Bearer${token}`});
        //   }
        // );

        // res.render('pages/home.twig'); not rendering
      })
      .catch(err => console.log(err));
    // var email_address = req.body.email_address;
    // var password = req.body.password;
    // return res.json({
    //   email_address: email_address,
    //   password: password
    // });
  }
}