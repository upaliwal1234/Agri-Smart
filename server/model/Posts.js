const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    reply: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reply'
        }
    ]

}, { timestamps: true });

const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;
