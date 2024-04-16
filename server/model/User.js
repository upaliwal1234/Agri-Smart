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
  ],
  inventory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Inventory'
    }
  ]
});
const User = mongoose.model('User', userSchema);

module.exports = User;
