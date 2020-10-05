var express = require('express');
var router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(express.json());


// Testing routes with method
router.get("/week/:msg", function(req, res) {
    db.each("SELECT * FROM reports WHERE week = " + req.params.msg, function(err, row) {
        const data = {
            data: {
                week: req.params.msg,
                report: row.report
            }
        };
        res.json(data);
    });
});

module.exports = router;
