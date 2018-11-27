const bcrypt = require('bcrypt');

// Import needed utilities
const validateRegisterInput = require('../../../validation/auth/register');

// Import needed model(s)
const User = require('../../models/User');

module.exports = {
  /**
   * Register a new User
   * 
   * - TODO: Steps for route
   * ✓ Validate the input fields
   * ✓ Make sure there isn't an existing user in DB for the email address
   * ✓ Hash password and store new User w/ credentials in DB
   * Sign JWT token for session authentication
   * Return the token to attach to headers client-side
   */
  store(req, res) {
    // Do server-side validation as a backup to the client validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Return a status of 400 along with errors if there are any
    if (!isValid) return res.status(400).json(errors);
    // If all of the inputs are good to go, continue...

    // Cross-check DB for existing user with email address
    User.findOne({ email: req.body.email_address.toLowerCase() })
      .then(user => {
        if (user) {
          // Let user know email address is claimed
          errors.email_address = 'Email address is already claimed.';
          return res.status(400).json(errors);
        } else {
          // Hash password and register the user since it wasn't claimed
          bcrypt.hash(req.body.password, 10)
            .then(hash => {
              const newUser = new User({
                name: req.body.name,
                email: req.body.email_address.toLowerCase(),
                password: hash
              });
              // Attempt saving the user
              newUser.save()
                .catch(err => res.status(400).json(err.response.data));
              // Now that the user has been created, sign JWT token
            })
            .catch(err => res.status(400).json(err));
          }
      })
      .catch(err => res.status(400).json(err));




    // Example bcrypt hashing
    //   bcrypt.hash(req.body.password, 10)
    //     .then(hash => {
    //       res.json({ hashedPass: hash });
    //     })
    //     .catch(err => {
    //       res.status(422).send('There was an error');
    //     });
    // }
  }
}