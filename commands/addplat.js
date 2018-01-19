const utils = require('../util/utilities.js');
exports.run = (client, message, args) => {
  if (args[0] == null) {
    message.channel.send('Please provide a platform.');
    return;
  }
  let argUpper = args[0].toUpperCase();
  let role;

  if (argUpper === 'XBOX') role = message.guild.roles.find('name','Xbox');
  else if (argUpper === 'PS4') role = message.guild.roles.find('name','PS4');
  else if (argUpper === 'PC') role = message.guild.roles.find('name','PC');
  else message.channel.send(args[0] + ' is not a recognized platform.');

  message.guild.fetchMember(message.author)
    .then((member) => {
      member.addRole(role)
        .then(() => utils.successReact(message))
        .catch((e) => console.log('Role for ' + argUpper + ' not found on the server:\n' + e));
    })
    .catch(e => console.log('Error retrieving guild member.\n' + e));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['addplatform'],
};

exports.help = {
  name: 'addplat',
  description: 'Adds platform role. Platforms: PS4, Xbox, PC',
  usage: 'addplat [platform]'
};
