const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    }
},{timestamps:true})

const Reply = mongoose.model('Reply', replySchema);
module.exports = Reply;