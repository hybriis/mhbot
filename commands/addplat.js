//const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let argUpper = args[0].toUpperCase();
  let user = message.member;
  let role;

  if (argUpper === 'XBOX') role = message.guild.roles.find('name','Xbox');
  else if (argUpper === 'PS4') role = message.guild.roles.find('name','PS4');
  else if (argUpper === 'PC') role = message.guild.roles.find('name','PC');
  else message.channel.send(args[0] + ' is not a recognized platform.');

  if (role != null && user != null)
    user.addRole(role)
      .then(message.react('👍'))
      .catch( function (e) { console.log(e); });
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
