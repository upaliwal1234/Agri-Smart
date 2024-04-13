const mongoose = require('mongoose');

const expenditureSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true
  },
  expenditure: {
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

const Expenditure = mongoose.model('Expenditure', expenditureSchema);

module.exports = Expenditure;
