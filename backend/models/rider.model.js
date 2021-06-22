const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riderSchema = new Schema({
    name:{ type: String, required: true, unique: true },   
    photo:{ type: String, required: true },
    points:{ type: Number, required: true, default: 0 }
}, {
    timestamps: true,
});

const rider = mongoose.model('rider', riderSchema);

module.exports = rider;