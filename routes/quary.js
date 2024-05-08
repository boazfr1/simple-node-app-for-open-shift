var express = require('express');
var con = require('../db.config');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "answer": "you got answer, boaz frid!" }
  );
});



module.exports = router;