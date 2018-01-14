exports.run = (client, message, args) => {
  if (args[0] === 'Xbox') {
    let role = message.guild.roles.find('name','Xbox');
    if (!message.member.roles.exists('name','Xbox')) {
      message.channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      message.member.removeRole(role);
      message.channel.send('Removed ' + role.name + ' role from ' + message.member.displayName + '.');
    }
  } else if (args[0] === 'PS4') {
    let role = message.guild.roles.find('name','PS4');
    if (!message.member.roles.exists('name','PS4')) {
      message.channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      message.member.removeRole(role);
      message.channel.send('Removed ' + role.name + ' role from ' + message.member.displayName + '.');
    }
  } else if (args[0] === 'PC') {
    let role = message.guild.roles.find('name','PC');
    if (!message.member.roles.exists('name','PC')) {
      message.channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      message.member.removeRole(role);
      message.channel.send('Removed ' + role.name + ' role from ' + message.member.displayName + '.');
    }
  } else
    message.channel.send(args[0] + ' is not a recognized platform.');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delplatform'],
};

exports.help = {
  name: 'delplat',
  description: 'Removes platform role. Platforms: PS4, Xbox, PC',
  usage: 'delplat [platform]'
};
