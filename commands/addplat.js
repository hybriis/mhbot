exports.run = (client, message, args) => {
  if (args[0] === 'Xbox') {
    let role = message.guild.roles.find('name','Xbox');
    if (message.member.roles.exists('name','Xbox')) {
      message.channel.send('You already have the ' + role.name + ' role.');
    } else {
      message.member.addRole(role);
      message.channel.send('Added ' + role.name + ' platform to ' + message.member.displayName + '.');
    }
  } else if (args[0] === 'PS4') {
    let role = message.guild.roles.find('name','PS4');
    if (message.member.roles.exists('name','PS4')) {
      message.channel.send('You already have the ' + role.name + ' role.');
    } else {
      message.member.addRole(role);
      message.channel.send('Added ' + role.name + ' platform to ' + message.member.displayName + '.');
    }
  } else if (args[0] === 'PC') {
    let role = message.guild.roles.find('name','PC');
    if (message.member.roles.exists('name','PC')) {
      message.channel.send('You already have the ' + role.name + ' role.');
    } else {
      message.member.addRole(role);
      message.channel.send('Added ' + role.name + ' platform to ' + message.member.displayName + '.');
    }
  } else
    message.channel.send(args[0] + ' is not a recognized platform.');
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
