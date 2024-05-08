var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "answer": "you got answer, boaz frid!" }
  );
});



module.exports = router;