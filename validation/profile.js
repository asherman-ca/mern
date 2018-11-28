const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(date.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  //   data.company = !isEmpty(data.company) ? data.company : "";
  //   data.website = !isEmpty(data.website) ? data.website : "";
  //   data.location = !isEmpty(data.location) ? data.location : "";
  //   data.bio = !isEmpty(data.bio) ? data.bio : "";
  //   data.githubusername = !isEmpty(data.githubusername)
  // ? data.githubusername
  // : "";
  //   data.company = !isEmpty(data.company) ? data.company : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    error.handle = "Handle field is required";
  }

  if (Validator.isEmpty(data.status)) {
    error.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    error.skills = "Skills field is empty";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      error.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      error.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      error.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      error.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      error.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      error.instagram = "Not a valid URL";
    }
  }

  //   if (Validator.isEmpty(data.company)) {
  //     error.company = "Company field is required";
  //   }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
