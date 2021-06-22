const router = require('express').Router();
const User = require('../models/user.model');
const bcyrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('./validation');

router.post('/SignUp', async (req, res) => {

    // Validate data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //Hash password
    const salt = await bcyrpt.genSalt(10);
    const hashPassword = await bcyrpt.hash(req.body.password, salt);
    
    //Create new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashPassword,
        team: ["","","","",""],
        leagues: ["Global", "", ""]
    });

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);

    // Save User
    try{
        const savedUser = await user.save();
        res.send({ "token": token });
    }catch(err){
        res.status(400).send(err);
    }
});


//Login
router.post('/', async (req,res) => {
    const { error } = loginValidation;
    if(error) return res.status(400).send(error.details[0].message);
    
    //check if email exists
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email or password is wrong');
    //check if password exists
    const validPass = await bcyrpt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    // Create and assign token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.send({ "token": token });
    //res.send('Logged in')
})

router.post('/verifytoken', async (req,res) => {
    let token = req.body.token;
    try{
        let verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        //console.log(verifiedToken._id);
        res.send({
            "id": verifiedToken._id
        })
    }catch(er){ 
        res.send({
            "token": "invalid"
        })
    }
})



module.exports = router