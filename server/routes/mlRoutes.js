// mlRoutes.js

const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const path = require('path');

// POST route to make predictions
router.post('/croppredict', (req, res) => {
    try {
        // Extract input data from request body
        const { N, P, K, temperature, humidity, ph, rainfall } = req.body;

        // Define the Python script path
        const pythonScript = path.join(__dirname, '../script/predict_crop.py');

        // Serialize features to JSON
        const featuresJson = JSON.stringify({ N, P, K, temperature, humidity, ph, rainfall });

        // Spawn a Python process and execute the script
        const pythonProcess = spawn('python', [pythonScript]);

        // Pass features input to Python script
        pythonProcess.stdin.write(featuresJson);
        pythonProcess.stdin.end();

        // Read output from Python script
        pythonProcess.stdout.on('data', (data) => {
            const prediction = data.toString().trim(); // Trim to remove extra whitespace
            // Send the prediction back to the client
            res.json({ prediction });
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(data.toString());
            res.status(500).json({ message: 'Internal server error' });
        });

        pythonProcess.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Python process exited with code ${code}`);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
