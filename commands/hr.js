const Discord = require('discord.js');
const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let hr = Math.floor(args[0]);
  if (isNaN(hr) || hr < 1 || hr > 999) {
    message.channel.send('HR must be a number 1-999.');
  } else {
    let roles = message.guild.roles;

    // create collection of all hr roles from settings.json
    let hrRoles = new Discord.Collection();
    settings.hrroles.forEach( function (int) {
      hrRoles.set(int, roles.find('name','HR ' + int + '+'));
    });

    // set role that matches the HR provided
    let newRole;
    hrRoles.keyArray().reverse().find( function (int) {
      if (hr >= int) {
        newRole = hrRoles.get(int);
        return true;
      }
    });

    // add matching HR role if it's not already there
    if (!message.member.roles.exists('name', newRole.name))
      message.member.addRole(newRole);

    // remove any conflicting roles
    let filteredRoles = hrRoles.filter(function (role) {
      return role.name !== newRole.name;
    });
    filteredRoles.forEach( function(role) {
      if (message.member.roles.exists('name', role.name))
        message.member.removeRole(role);
    });

    message.channel.send('HR set to ' + hr + '.');

    // TODO: setup persistant storage (mongodb?) to store the exact HR
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hunterrank'],
};

exports.help = {
  name: 'hr',
  description: 'Set your HR. Accepts number from 1-999.',
  usage: 'hr [number]'
};
