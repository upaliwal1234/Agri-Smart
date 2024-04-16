const mongoose = require('mongoose');

const irrigationSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    bestPractices: {
        type: String,
        required: true
    },
    imageURL : {
        type: String,
        required: true
    }
});

const Irrigation = mongoose.model('Irrigation', irrigationSchema);

module.exports = Irrigation;
