const Discord = require('discord.js');
//const settings = require('../settings.json');
const utils = require('../util/utilities.js');
exports.run = (client, message, args) => {
  let mr = Math.floor(args[0]);
  if (isNaN(mr) || mr < 1 || mr > 999) {
    message.channel.send('MR must be a number 1-999.');
  } else {
    let roles = message.guild.roles;

    // create collection of all MR roles from the guild's role list
    let mrRoles = new Discord.Collection();
    var pattern = /MR\s(\d+)\+/;
    roles.forEach( (role) => {
      let match = role.name.match(pattern);
      if (match != null) {
        mrRoles.set(Math.floor(match[1]), role);
      }
    });

    // reverse sort the map by key (MR number)
    mrRoles = mrRoles.sort( (a,b) => {
      return Math.floor(b.name.match(pattern)[1]) - Math.floor(a.name.match(pattern)[1]);
    });

    // set role that matches the MR provided
    let newRole;
    mrRoles.keyArray().find( (int) => {
      if (mr >= int) {
        newRole = mrRoles.get(int);
        return true;
      }
    });

    // fetch guildmember
    message.guild.fetchMember(message.author)
      .then((member) => {
        if (newRole != null) {
          // add matching MR role if it's not already there
          if (!member.roles.exists('name', newRole.name))
            member.addRole(newRole);

          // remove any conflicting roles
          let filteredRoles = mrRoles.filter((role) => {
            return role.name !== newRole.name;
          });
          filteredRoles.forEach((role) => {
            if (member.roles.exists('name', role.name))
              member.removeRole(role);
          });

          utils.successReact(message);
        } else message.channel.send('No matching MR role found.');
      })
      .catch((e) => console.log('Error retrieving guild member.\n' + e));

    // TODO: setup persistant storage (mongodb?) to store the exact MR
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['masterrank','MR'],
};

exports.help = {
  name: 'mr',
  description: 'Set your MR. Accepts number from 1-999.',
  usage: 'mr [number]'
};
