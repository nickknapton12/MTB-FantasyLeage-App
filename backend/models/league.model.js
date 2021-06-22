const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name:{ type: String, required: true, unique: true },   
    photo:{ type: String },
    users:[{ type: String, required: true }],
    password: { type: String, required: true},
    public: {type: String, required: true}
}, {
    timestamps: true,
});

const league = mongoose.model('league', leagueSchema);

module.exports = league;