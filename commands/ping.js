exports.run = (client, message) => {
  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: 'ping',
  description: 'Latency check',
  usage: 'ping'
};
