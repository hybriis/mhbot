let db = require('./db.js');
let Schema = db.Schema;

let guildCardSchema = new Schema({
  userId: {type: String, required: true}, // discord userid
  game: {type: String, required: true},
  platform: String,
  characterName: {type: String, required: true},
  hr: Number
});
let guildCard = db.model('GuildCard', guildCardSchema);

// export schemas
let schemaList = {
  'guildCard': guildCard
};
module.exports = schemaList;
