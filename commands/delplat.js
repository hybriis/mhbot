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
  else if (argUpper === 'PS5') role = message.guild.roles.find('name','PS5');
  else if (argUpper === 'XBOXSERIESX') role = message.guild.roles.find('name','Xbox Series X');
  else if (argUpper === 'SWITCH') role = message.guild.roles.find('name','Switch');
  else message.channel.send(args[0] + ' is not a recognized platform.');

  message.guild.fetchMember(message.author)
    .then((member) => {
      member.removeRole(role)
        .then(() => utils.successReact(message))
        .catch((e) => console.log('Role for ' + argUpper + ' not found on the server:\n' + e));
    })
    .catch(e => console.log('Error retrieving guild member.\n' + e));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delplatform'],
};

exports.help = {
  name: 'delplat',
  description: 'Removes platform role. Platforms: PS4, Xbox, PC, PS5, XboxSeriesX, Switch',
  usage: 'delplat [platform]'
};
