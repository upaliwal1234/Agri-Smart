const express = require('express');
const router = express.Router();
const Irrigation = require('../model/Irrigation');

router.post('/irrigationschedule', async (req, res) => {
    try {
        const { crop } = req.body;
        if (!crop) {
            return res.status(400).json({ message: 'Crop name is required' });
        }
        const irrigations = await Irrigation.findOne({ crop });
        if (!irrigations || irrigations.length === 0) {
            return res.status(404).json({ message: 'No irrigation schedules found' });
        }
        res.json(irrigations);
    } catch (error) {
        console.error('Error fetching irrigation schedules:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
