const settings = require('../settings.json');
const utils = require('../util/utilities.js');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(/\s+/)[0].slice(settings.prefix.length);
  let params = message.content.split(/\s+/).slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) cmd.run(client, message, params);
  else utils.failReact(message);
};
