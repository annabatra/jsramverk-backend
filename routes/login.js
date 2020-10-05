var express = require('express');
var router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // for parsing application/json
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.use(express.json());


let config = require('../config/config.json');


const secret = process.env.JWT_SECRET || config.secret;

// Get route for login
router.get("/", function(req, res) {
    const data = {
        data: {
            msg: "Got a GET request on login"
        }
    };

    res.json(data);
});

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/login",
                title: "Email or password missing",
                detail: "Email or password missing in request"
            }
        });
    }

    db.get("SELECT * FROM users WHERE email = ?",
        email,
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    errors: {
                        status: 500,
                        source: "/login",
                        title: "Database error",
                        detail: err.message
                    }
                });
            }

            if (rows === undefined) {
                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: "/login",
                        title: "User not found",
                        detail: "User with provided email not found."
                    }
                });
            }

            const user = rows;

            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/login",
                            title: "bcrypt error",
                            detail: "bcrypt error"
                        }
                    });
                }

                if (result) {
                    let payload = { email: email };
                    let jwtToken = jwt.sign(payload, secret, { expiresIn: '1h' });

                    return res.json({
                        data: {
                            type: "success",
                            message: "User logged in",
                            user: payload,
                            token: jwtToken
                        }
                    });
                }

                return res.status(401).json({
                    errors: {
                        status: 401,
                        source: "/login",
                        title: "Wrong password",
                        detail: "Password is incorrect."
                    }
                });
            });
        });
});

module.exports = router;
