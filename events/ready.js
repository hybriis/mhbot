const chalk = require('chalk');
const settings = require('../settings.json');
module.exports = client => {
  client.user.setPresence( {game: { name: settings.prefix + 'help' } } );
  console.log(chalk.bgGreen.black('I\'m Online'));
};
