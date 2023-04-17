const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jaecho203:u6jAx61UxjEj5cjq@cluster0.fuds4wh.mongodb.net/?retryWrites=true&w=majority/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;