const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsletterSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;