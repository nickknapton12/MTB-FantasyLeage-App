const router = require('express').Router();
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');
const league = require('../models/league.model');
const User = require('../models/user.model');

router.post('/newLeague', async (req, res) => {
    let token = req.body.token;
    try {
        var verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (er) {
        res.send({
            "token": "invalid Token"
        })
    }

    var user = await User.find({ _id: verifiedToken._id });

    password = req.body.password;
    publicOrNot = "private";
    if(req.body.public == true){
        publicOrNot = "public";
        password = " ";
    }
    

    //Create new League
    const newleague = new league({
        name: req.body.name,
        users: user[0].username,
        password: password,
        public: publicOrNot,
        photo: "https://es.pinkbike.org/246/sprt/i/fantasy/2020/DH-Tile.jpg"
    });

    // Save League
    try {
        const savedLeague = await newleague.save();
        var theOldLeague = "";

        if (req.body.oldLeague != undefined) {
            theOldLeague = req.body.oldLeague;
            await league.updateOne(
                { name: theOldLeague },
                { $pull: { users: user[0].username } }
            )
        }
        console.log('here')
        await User.updateOne(
            { _id: verifiedToken._id, leagues: theOldLeague },
            { $set: { "leagues.$": req.body.name } },
        )

        res.send("Success");
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router