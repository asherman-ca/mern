const express = require("express");
const router = express.Router();

// load User model from mongoose

const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get("/test", (req, res) => {
  res.json({
    msg: "Users Works"
  });
});

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  res.json({
    msg: "Register User"
  });
});

module.exports = router;
