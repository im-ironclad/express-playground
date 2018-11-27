var Validator = require('validator');
var isEmpty = require('../is-empty');

module.exports = function validateRegisterInput(data) {
  var errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email_address = !isEmpty(data.email_address) ? data.email_address : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password_confirm) ? data.password_confirm : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'We need your name';
  }

  if (!Validator.isEmail(data.email_address)) {
    errors.email_address = 'That email address is invalid';
  }

  if (Validator.isEmpty(data.email_address)) {
    errors.email_address = 'An email address is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Your password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'A password is required';
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = 'Both of the passwords must match';
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = 'A password confirmation is required';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
