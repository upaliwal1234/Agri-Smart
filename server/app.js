const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.error(err))

const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`Server is running at localhost:${PORT}`);
    }
})