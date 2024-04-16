const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  season: {
    type: String,
    enum: ['rabi', 'kharif', 'zaid'],
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
