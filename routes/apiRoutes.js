const router = require("express").Router();
const db = require("../models");
const jwt = require('jsonwebtoken');

router.route("/api/user").post((req, res, next) => {
    db.User.create(req.body)
        .then(function () {
            const userDataScrubbed = {};
            userDataScrubbed.email = req.body.email;
            userDataScrubbed.name = req.body.name;
            userDataScrubbed.userSettings = req.body.userSettings;

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
                    userDataScrubbed.userSettings = userData.userSettings;

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

router.route("/api/userSettings").post((req, res, next) => {
    console.log(req.body)
    userData = {
        email: req.body.email
    }

    db.User.findOneAndUpdate(userData,{"userSettings":req.body.userSettings})
        .then(function () {
            //add response for User watchlist update
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

router.route("/api/watchList").post((req, res, next) => {
    db.User.findOneAndUpdate({email},{watchlist})
        .then(function () {
            //add response for User watchlist update
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        })
})

router.route("/api/createSectors").post((req,res) => {
    console.log(req.body)
    let sectors = req.body.mainSectors
    db.Sector.create(sectors, function(err, docs) {
        if (err){
            console.log("Error: " + err)
        } else{
            console.log(docs)
        }
    })
})
router.route("/api/pullSectors").get((req,res) => {
    console.log("test pull")
    db.Sector.find({}, function(err, data){
        if (err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})

module.exports = router;