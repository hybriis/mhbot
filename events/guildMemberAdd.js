module.exports = member => {
  member.addRole(member.guild.roles.find('name','HR 1+'))
    .catch((e) => console.log(`HR 1+ role missing.\n${e}`));
};
