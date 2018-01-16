const chalk = require('chalk');
module.exports = member => {
  member.addRole(member.guild.roles.find('name','HR 1+'));
};
