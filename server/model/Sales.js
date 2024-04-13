const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true
  },
  sales: {
    type: Number,
    required: true
  },
  season: {
    type: String,
    enum: ['spring', 'summer', 'autumn', 'winter'],
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;
