let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI == null ? require('../token.json').db_uri : process.env.MONGODB_URI);

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to mongodb.');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongodb error:\n${err}`);
});

module.exports = mongoose;
