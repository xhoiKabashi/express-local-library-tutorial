const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", (req, res, next) => {
  res.send("I'm cool");
});

router.get("/cool/super", (req, res, next) => {
  res.send("I'm super");
});

module.exports = router;
