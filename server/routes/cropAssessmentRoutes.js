const express = require('expresss');
const router = express.Router();
const User = require('../models/User.js');
router.post('/api/cropAssessment', async (req, res) => {
    const { nitrogen, potassium, phosphorus, PH, temperature, humidity, rainfall } = req.body;
    // Assuming you've loaded your ML model and preprocessing steps
    // Import necessary libraries and load your model
    const mlModel = require('./path/to/your/ml/model');

    // Preprocess the input data
    // You may need to scale or encode the input features based on your model requirements

    // Prepare input data for prediction
    const inputData = [[nitrogen, potassium, phosphorus, PH, temperature, humidity, rainfall]];

    // Make prediction using the ML model
    const predictedCrop = mlModel.predict(inputData); // Replace with your model prediction logic

    // Array of all crops (replace with your actual array of crops)
    const allCrops = ['Wheat', 'Rice', 'Corn', 'Soybean', 'Barley', 'Cotton', 'Sugarcane', 'Potato', 'Tomato', 'Banana'];

    // Send the predicted crop and array of all crops to the frontend
    res.json({ predictedCrop, allCrops });
})