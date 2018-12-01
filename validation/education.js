const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.field = !isEmpty(data.field) ? data.field : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'Job title field is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Company field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From field is required';
  }

  if (Validator.isEmpty(data.field)) {
    errors.field = 'Field field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
