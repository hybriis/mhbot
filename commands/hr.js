const Discord = require('discord.js');
//const settings = require('../settings.json');

exports.run = (client, message, args) => {
  let hr = Math.floor(args[0]);
  if (isNaN(hr) || hr < 1 || hr > 999) {
    message.channel.send('HR must be a number 1-999.');
  } else {
    let roles = message.guild.roles;

    // create collection of all HR roles from the guild's role list
    let hrRoles = new Discord.Collection();
    var pattern = /HR\s(\d+)\+/;
    roles.forEach( function (role) {
      let match = role.name.match(pattern);
      if (match != null) {
        hrRoles.set(Math.floor(match[1]), role);
      }
    });

    // reverse sort the map by key (HR number)
    hrRoles = hrRoles.sort( function (a,b) {
      return Math.floor(b.name.match(pattern)[1]) - Math.floor(a.name.match(pattern)[1]);
    });

    // set role that matches the HR provided
    let newRole;
    hrRoles.keyArray().find( function (int) {
      if (hr >= int) {
        newRole = hrRoles.get(int);
        return true;
      }
    });

    if (newRole != null) {
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

      message.react('👍');
    } else message.channel.send('No matching HR role found.');

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
