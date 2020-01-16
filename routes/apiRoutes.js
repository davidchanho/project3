const router = require("express").Router();
const db = require("../models");
const jwt = require('jsonwebtoken');

router.route("/api/user").post((req, res, next) => {
    db.User.create(req.body)
        .then(function () {
            const userDataScrubbed = {};
            userDataScrubbed.email = req.body.email;
            userDataScrubbed.name = req.body.name;

            jwt.sign(userDataScrubbed, 'privatekey', { expiresIn: '1h' }, (err, token) => {
                if (err) { console.log(err) }
                res.send(token);
            });
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

router.route("/api/auth").post((req, res, next) => {
    userData = {
        email: req.body.email
    }

    db.User.findOne(userData, function (err, userData) {
        if (err) {
            console.log("ERROR");
        } else if (!userData) {
            res.json({ error: "User Not Found" });
        } else {
            userData.comparePassword(req.body.password, function (err, isMatch) {
                if (err) throw err;
                if (!isMatch) {
                    res.json({ error: "Wrong Password for this user" });
                } else {
                    const userDataScrubbed = {};
                    userDataScrubbed.email = userData.email;
                    userDataScrubbed.name = userData.name;

                    jwt.sign(userDataScrubbed, 'privatekey', { expiresIn: '1h' }, (err, token) => {
                        if (err) { console.log(err) }
                        res.send(token);
                    });
                }
            })
        }
    })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

module.exports = router;