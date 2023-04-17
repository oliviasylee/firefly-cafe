const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://oliviasylee:ready2go!@cluster0.ogoxous.mongodb.net/fireflyCafe?retryWrites=true&w=majority', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;