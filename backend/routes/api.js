const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const Rider = require('../models/rider.model');
const League = require('../models/league.model');


// Adding riders
router.route('/addRider').post((req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }

    var rider = Rider.findById(req.body.ridername)
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getAllRiders').post((req, res) => {
    Rider.find({}, function (err, rider) {
        var riders = [];

        rider.forEach(function (rider) {
            riders.push(rider);
        });

        res.send({
            riders
        });
    });
});

router.route('/getTeam').post(async (req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }

    var user = await User.findById(verifiedToken._id)
    var photos = [];
    for (let i = 0; i < 5; i++) {
        var rider = user.team[i];
        var foundRider = await Rider.find({ "name": rider });

        try {
            photos.push(foundRider[0].photo);
        } catch (er) {

        }

    }

    res.send({
        team: user.team,
        photos: photos
    })
});

router.route('/getLeagues').post(async (req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }

    var user = await User.findById(verifiedToken._id)
    var photos = [];
    for (let i = 0; i < 3; i++) {
        var league = user.leagues[i];
        var foundLeague = await League.find({ "name": league });

        try {
            photos.push(foundLeague[0].photo);
        } catch (er) {

        }

    }

    res.send({
        leagues: user.leagues,
        leaguePhotos: photos
    })
});

router.route('/updateRider').post(async (req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }

    await User.updateOne(
        { _id: verifiedToken._id, team: req.body.oldRider },
        { $set: { "team.$": req.body.newRider } },
    )
        .then(() => res.status(200).send("Updated Team"))
        .catch(er => res.status(400).send(er));
});

router.route('/updateLeague').post(async (req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }

    var theLeague = await League.find({ name: req.body.newLeague })
    var reqPassword = req.body.password;

    if (req.body.newLeague == undefined) {
        res.status(400).send("not found")
    } else {
        if (theLeague[0].public == "public") {
            reqPassword = theLeague[0].password;
        }

        if (theLeague[0].password != reqPassword) {
            res.status(400).send("Invalid password")
        } else {
            var theOldLeague = "";
            var user = await User.find({ _id: verifiedToken._id });

            if (req.body.oldLeague != undefined) {
                theOldLeague = req.body.oldLeague;
                await League.updateOne(
                    { name: theOldLeague },
                    { $pull: { users: user[0].username } }
                )
            }

            await League.updateOne(
                { name: req.body.newLeague },
                { $push: { users: user[0].username } }
            )

            await User.updateOne(
                { _id: verifiedToken._id, leagues: theOldLeague },
                { $set: { "leagues.$": req.body.newLeague } },
            )
                .then(() => res.status(200).send("Updated Leagues"))
                .catch(er => res.status(400).send(er));
        }
    }




});

router.route('/getAllPublicLeagues').post((req, res) => {
    League.find({}, function (err, league) {
        var leagues = [];

        league.forEach(function (league) {
            if (league.public == "public") {
                leagues.push(league);
            }
        });

        res.send({
            leagues
        });
    });
});

router.route('/getAllUsersInLeague').post(async (req, res) => {
    let token = req.body.token;
    var league = req.body.league;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid"
        })
    }
    var user = await User.findById({ _id: verifiedToken._id })

    if (user.leagues.indexOf(league) !== -1) {
        var foundLeague = await League.find({ name: league });
    } else {
        res.status(400).send("Not in League");
    }

    var allUsers = [];
    for (let i = 0; i < foundLeague[0].users.length; i++) {
        allUsers.push(foundLeague[0].users[i]);
    }

    var allUserObjects = [];
    for (let i = 0; i < allUsers.length; i++) {
        allUserObjects.push((await User.find({ username: allUsers[i] }))[0]);
    }


    allUserObjects = allUserObjects.sort(function (a, b) {
        return parseFloat(b.totalPoints) - parseFloat(a.totalPoints);
    })

    var userNames = [];
    var totalPoints = [];
    var results1 = [];
    var results2 = [];
    var results3 = [];
    var results4 = [];
    var results5 = [];
    var results6 = [];
    for (let i = 0; i < allUserObjects.length; i++) {
        userNames.push(allUserObjects[i].username)
        totalPoints.push(allUserObjects[i].totalPoints)
        results1.push(allUserObjects[i].results1)
        results2.push(allUserObjects[i].results2)
        results3.push(allUserObjects[i].results3)
        results4.push(allUserObjects[i].results4)
        results5.push(allUserObjects[i].results5)
        results6.push(allUserObjects[i].results6)
    }

    res.send({
        usernames: userNames,
        totalPoints: totalPoints,
        results1: results1,
        results2: results2,
        results3: results3,
        results4: results4,
        results5: results5,
        results6: results6,
    })

});


module.exports = router