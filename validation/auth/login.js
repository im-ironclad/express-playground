const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email_address = !isEmpty(data.email_address) ? data.email_address : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(data.email_address)) {
    errors.email_address = 'That\'s not a valid email address'
  }

  if (validator.isEmpty(data.email_address)) {
    errors.email_address = 'An email address is required to log in'
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'You gotta use your password to login'
  }

  return {
    errors, //: errors
    isValid: isEmpty(errors)
  }
}