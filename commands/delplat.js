exports.run = (client, message, args) => {
  let argUpper = args[0].toUpperCase();
  let user = message.member;
  let channel = message.channel;
  if (argUpper === 'XBOX') {
    let role = message.guild.roles.find('name','Xbox');
    if (!user.roles.exists('name','Xbox')) {
      channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      user.removeRole(role);
      channel.send('Removed ' + role.name + ' role from ' + user.displayName + '.');
    }
  } else if (argUpper === 'PS4') {
    let role = message.guild.roles.find('name','PS4');
    if (!user.roles.exists('name','PS4')) {
      channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      user.removeRole(role);
      channel.send('Removed ' + role.name + ' role from ' + user.displayName + '.');
    }
  } else if (argUpper === 'PC') {
    let role = message.guild.roles.find('name','PC');
    if (!user.roles.exists('name','PC')) {
      channel.send('You don\'t have the ' + role.name + ' role.');
    } else {
      user.removeRole(role);
      channel.send('Removed ' + role.name + ' role from ' + user.displayName + '.');
    }
  } else
    channel.send(argUpper + ' is not a recognized platform.');
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
