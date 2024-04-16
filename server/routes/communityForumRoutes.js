const express = require('express');
const router = express.Router();
const Posts = require('../model/Posts');
const Reply = require('../model/Reply');
const User = require('../model/User');
router.get('/getPosts', async (req, res) => {
    try {
        const response = await Posts.find({});
        if (!response) {
            return res.status(404).send("Data Not Found")
        }
        return res.status(200).send(response);
    }
    catch (e) {
        return res.status(401).send("Internal Server Error");
    }
})

router.post('/addPost', async (req, res) => {
    try {
        const { id, title, text } = req.body;
        const user = await User.findById(id);
        const response = await Posts.create({ name: user.username, title, text });
        const { id, title, text } = req.body;
        const user = await User.findById(id);
        const response = await Posts.create({ name: user.username, title, text });
        if (!response) {
            return res.status(404).send("Something went wrong")
        }
        user.posts.push(response);
        await user.save();
        user.posts.push(response);
        await user.save();
        return res.status(200).send({ response, message: "Post added Successfully" });
    }
    catch (e) {
        return res.status(401).send("Internal Server Error");
    }
})

router.get('/getPost/:id', async (req, res) => {
router.get('/getPost/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Posts.findById(id).populate('reply');
        if (!response) {
            return res.status(404).send("Data Not Found")
        }
        return res.status(200).send(response);
    }
    catch (e) {
        return res.status(401).send("Internal Server Error");
    }
})

router.post('/addReply', async (req, res) => {
    try {
        const { postId, name, text } = req.body;
        const response = await Reply.create({ name, text });
        if (!response) {
            return res.status(404).send("Something went wrong");
        }
        const post = await Posts.findById(postId);
        post.reply.push(response);
        await post.save();
        return res.status(200).send(response);
    }
    catch (e) {
        return res.status(401).send("Internal Server Error");
    }
})

module.exports = router;