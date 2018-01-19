exports.successReact = (message) => {
  try {
    message.react(message.client.emojis.find('name','yamasmile'));
  } catch (err) {
    console.log('Emjoi :yamasmile: is not on this server.');
    message.react('👍');
  }
};

exports.failReact = (message) => {
  try {
    message.react(message.client.emojis.find('name','yamad'));
  } catch (err) {
    console.log('Emjoi :yamad: is not on this server.');
    message.react('👎');
  }
};
