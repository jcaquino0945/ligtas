var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("User Code: " + req.query.code);
});

module.exports = router;
