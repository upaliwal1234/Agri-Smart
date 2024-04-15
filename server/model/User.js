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
  cityName: {
    type: String
  },
  stateCode: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Posts'
    }
  ]
});
const User = mongoose.model('User', userSchema);

module.exports = User;
