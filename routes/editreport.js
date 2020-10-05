var express = require('express');
var router = express.Router();
const db = require("../db/database.js");
const bodyParser = require("body-parser");

let config = require('../config/config.json');
const jwt = require('jsonwebtoken');

const jwtSecret = config.secret;


router.use(bodyParser.json());
router.use(express.json());


// Testing routes with method
router.get("/:msg", function(req, res) {
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


router.post("/:msg", (req, res, next) => checkToken(req, res, next),
    (req, res) => {
        const week = req.body.week;
        const report = req.body.report;

        db.run("UPDATE reports SET report = (?) WHERE week = (?)",
            report,
            week, (err) => {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/editreport",
                            title: "Database error",
                            detail: err.message
                        }
                    });
                }
                res.status(201).json({
                    data: {
                        title: "Got a POST request, sending back 201 Created",
                        msg: "table reports updated"
                    }
                });
            }
        );
    });

// function to verify user
function checkToken(req, res, next) {
    const token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, jwtSecret, function(err) {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        title: "Token not verified",
                        detail: "Token expired, cannot make changes"
                    }
                });
            }
            console.log("successfully validated token");
            next();

            return undefined;
        });
    } else {
        return res.status(401).json({
            errors: {
                status: 401,
                source: req.path,
                title: "No token",
                detail: "No token provided in request headers"
            }
        });
    }
}


module.exports = router;
