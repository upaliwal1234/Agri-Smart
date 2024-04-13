const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  soilInfo: {
    nitrogen: {
      type: Number,
    },
    phosphorus: {
      type: Number,
    },
    potassium: {
      type: Number,
    },
    pH: {
      type: Number,
    }
  },
  crops: [{
    type: String
  }],
  location: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
