const mongoose = require('mongoose');
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require('react-dom');
const rider = require('./rider.model');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{ type: String, required: true, unique: true },   
    email:{ type: String, required: true, unique: true },
    firstName:{ type: String, required: true },
    lastName:{ type: String, required: true },
    password:{ type: String, required: true },
    team:[{ type: String }],
    leagues:[{ type: String }],
    totalPoints:{ type: String },
    results1:{ type: String },
    results2:{ type: String },
    results3:{ type: String },
    results4:{ type: String },
    results5:{ type: String },
    results6:{ type: String },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;