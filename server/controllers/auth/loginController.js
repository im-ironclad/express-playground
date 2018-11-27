const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Require needed utilities
const validateLoginInput = require('../../../validation/auth/login');

// Require needed model(s)
const User = require('../../models/User');

module.exports = {
  /**
  * Log a User in and sign JWT Token
  * 
  * - TODO: Steps for route
  * ✓ Validate the input fields
  * Make sure there is a user in DB for the email address
  * If user account found, compare password with bcrypt
  * If password is correct, Sign JWT token for session authentication
  * Return the token to attach to headers client-side
  */
  signJWT(req, res) {
    let { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    User.findOne({ email: req.body.email_address })
      .then(user => {
        if (!user) {
          errors.email_address = 'No user found with this email address'
          return res.status(400).json(errors);
        }
        // User found and shit got hit
        // Cross check password using bcrypt
        bcrypt.compare(req.body.password, user.password)
          .then(res => {
            // res == true
          });
      })
      .catch(err => res.status(400).json(err.response.data));


















    /**
     * TRY NOT REFERENCING BELOW
     * TRY NOT REFERENCING BELOW
     * TRY NOT REFERENCING BELOW
     * TRY NOT REFERENCING BELOW
     * TRY NOT REFERENCING BELOW
     * TRY NOT REFERENCING BELOW
     */
    // User.findOne({ email })
    //   .then(user => {
    //     // Return with errors if user not found
    //     if (!user) {
    //       errors.email_address = "User not found.";
    //       return res.status(404).json(errors);
    //     }

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
      // })
      // .catch(err => console.log(err));
    // var email_address = req.body.email_address;
    // var password = req.body.password;
    // return res.json({
    //   email_address: email_address,
    //   password: password
    // });
  }
}