exports.run = (client, message, args) => {
  let argUpper = args[0].toUpperCase();
  let user = message.member;
  let channel = message.channel;
  if (argUpper === 'XBOX') {
    let role = message.guild.roles.find('name','Xbox');
    if (user.roles.exists('name','Xbox')) {
      channel.send('You already have the ' + role.name + ' role.');
    } else {
      user.addRole(role);
      channel.send('Added ' + role.name + ' platform to ' + user.displayName + '.');
    }
  } else if (argUpper === 'PS4') {
    let role = message.guild.roles.find('name','PS4');
    if (user.roles.exists('name','PS4')) {
      channel.send('You already have the ' + role.name + ' role.');
    } else {
      user.addRole(role);
      channel.send('Added ' + role.name + ' platform to ' + user.displayName + '.');
    }
  } else if (argUpper === 'PC') {
    let role = message.guild.roles.find('name','PC');
    if (user.roles.exists('name','PC')) {
      channel.send('You already have the ' + role.name + ' role.');
    } else {
      user.addRole(role);
      channel.send('Added ' + role.name + ' platform to ' + user.displayName + '.');
    }
  } else
    channel.send(args[0] + ' is not a recognized platform.');
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
