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

        let responseData = ''; // Variable to accumulate response data

        // Pass features input to Python script
        pythonProcess.stdin.write(featuresJson);
        pythonProcess.stdin.end();

        // Read output from Python script
        pythonProcess.stdout.on('data', (data) => {
            responseData += data.toString(); // Accumulate response data
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(data.toString());
            // Don't send response here to avoid multiple responses
        });

        pythonProcess.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Python process exited with code ${code}`);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                // Send the accumulated response back to the client
                const prediction = responseData.trim(); // Trim to remove extra whitespace
                res.json({ prediction });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
