exports.run = (client, message, args) => {
  let hr = Math.floor(args[0]);
  if (isNaN(hr) || hr < 1 || hr > 999) {
    message.channel.send('HR must be a number 1-999.');
  } else {
    let roles = message.guild.roles;
    // list of all hrRoles on the server.
    // Use settings.json later to store list of HR roles and pick the correct one generically.
    let hrRoles = [roles.find('name','HR 1+'), roles.find('name','HR 4+'), roles.find('name','HR 7+'), roles.find('name','HR 100+')];
    let newRole;

    // set role that matches the HR provided
    if (hr < 4)
      newRole = roles.find('name','HR 1+');
    else if (hr < 7)
      newRole = roles.find('name','HR 4+');
    else if (hr < 100)
      newRole = roles.find('name','HR 7+');
    else
      newRole = roles.find('name','HR 100+');

    // add matching HR role if it's not already there
    if (!message.member.roles.exists('name', newRole.name))
      message.member.addRole(newRole);

    // remove any conflicting roles
    let filteredRoles = hrRoles.filter(function (role) { return role.name !== newRole.name; });
    filteredRoles.forEach( function(role) {
      if (message.member.roles.exists('name', role.name))
        message.member.removeRole(role);
    });

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
