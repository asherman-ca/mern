const express = require("express");
const router = express.Router();

// already looks at api/users/...

router.get("/test", (req, res) => {
  res.json({
    msg: "Posts Works"
  });
});

module.exports = router;
