const express = require('express');
const router = express.Router();
const Irrigation = require('../model/Irrigation');

router.get('/irrigationschedule/:crop', async (req, res) => {
    try {
        const { crop } = req.params;
        if (!crop) {
            return res.status(400).json({ message: 'Crop name is required' });
        }
        const irrigations = await Irrigation.findOne({ crop:crop });
        if (!irrigations || irrigations.length === 0) {
            return res.status(404).json({ message: 'No irrigation schedules found' });
        }
        res.status(200).json(irrigations);
    } catch (error) {
        console.error('Error fetching irrigation schedules:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/search/autoComplete/:crop', async (req, res) => {
    try {
        const { crop } = req.params;
        console.log("Hello" + crop);
        const response = await Irrigation.find({ name: { $regex: crop, $options: 'i' } }).sort({ name: 1 }).limit(5);
        console.log(response)
        if (!response) {
            return res.status(404).json({ message: "Movie Not Found" });
        }
        console.log("hhh")
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;
