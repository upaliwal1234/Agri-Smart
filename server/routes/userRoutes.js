const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || "hi";
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
        return res.status(400).send("All Fields are necessary");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(401).send("User With This Email Already Exists");
    }
    else {
        try {
            const salt = bcrypt.genSaltSync(10);
            const myEncPassword = bcrypt.hashSync(password, salt);
            const user = await User.create({
                username: username,
                email: email,
                password: myEncPassword
            });
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json("User not Created");
        }
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            return res.status(400).send("All details are necessary")
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).send("User does not exists")
        }
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id, email, cityName: user.cityName
                },
                secret,
                {
                    expiresIn: "2h"
                }
            );
            user.password = undefined;
            return res.status(200).json({
                success: true,
                token,
                user
            });
        }
        else {
            console.log("Password is incorrect");
            return res.status(400).send("Password is incorrect");
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json("User not found");
    }
})

router.get('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await User.findById(id);
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.patch('/profile/edit/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const { username, email, cityName } = req.body;
        const user = await User.findById(userId);
        user.username = username;
        user.email = email;
        user.cityName = cityName;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})


module.exports = router;