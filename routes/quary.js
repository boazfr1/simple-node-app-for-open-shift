var express = require('express');
var con = require('../db.config');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send(
    { "answer": "you got answer, boaz frid!" }
  );
});

router.get('/greetings', function (req, res) {
    con.query("SELECT * FROM greeting", function (err, result) {
        if (err) {
            console.log("Error fetching greetings:", err);
            res.status(500).json({ error: "Failed to fetch greetings" });
            return;
        }
        console.log("Greetings fetched successfully:", result);
        res.json(result);
    });
});

router.post('/insert', function (req, res) {
    console.log("req.body:", req.body);
    let sql = `INSERT INTO greeting (text) VALUES
    ('Hello, world!'),
    ('Welcome to our website.'),
    ('Greetings from OpenShift OKD.'),
    ('Have a great day!'),
    ('This is some random data.');
    `
    con.query(sql, function (err, greet) {
        console.log("greet:", greet);
        if (err) {
            console.log(err);
            res.send(JSON.stringify({ "answer": greet, "bool": false }))
        };
        res.send(JSON.stringify({ "answer": greet, "bool": true }));
    })
});

module.exports = router;


