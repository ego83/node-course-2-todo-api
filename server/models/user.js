var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    unique: true,
    lowercase: true
  }
});

module.exports = {User};
