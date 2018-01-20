let db = require('db.js');
let Schema = db.Schema;

let guildCardSchema = new Schema({
  game: {type: String, required: true},
  platform: String,
  characterName: {type: String, required: true},
  hr: Number
});
let guildCard = db.model('GuildCard', guildCardSchema);

let hunterSchema = new Schema({
  userId: {type: String, unique: true, required: true}, // from discord.js userid
  guildCard: { // only 1 guild card allowed for now, more in the future?
    type: db.Schema.Type.ObjectId,
    ref: 'GuildCard'
  }
});
let hunter = db.model('Hunter', hunterSchema);

module.exports = guildCard;
module.exports = hunter;
