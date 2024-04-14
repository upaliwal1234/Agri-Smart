const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const cors = require('cors');
const mlRoutes = require('./routes/mlRoutes');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.error(err))

app.use(cors());
app.use(express.json())
app.use('/api/user', userRoutes);
app.use('/api/analysis', inventoryRoutes);
app.use('/api/predict', mlRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`Server is running at localhost:${PORT}`);
    }
})