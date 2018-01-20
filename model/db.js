let mongoose = require('mongoose');
mongoose.connect(require('../token.json').db_uri);

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to mongodb.');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongodb error:\n${err}`);
});

module.exports = mongoose;
