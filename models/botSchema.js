mongoose = require("mongoose");

const botSchema = new mongoose.Schema({
  bot_ID: {
    type: String,
    default: "bot",
    unique: true,
  },
  total_uses: {
    type: Number,
    default: 0,
  },
  random_uses: {
    type: Number,
    default: 0,
  },
  help_uses: {
    type: Number,
    default: 0,
  },
  options_uses: {
    type: Number,
    default: 0,
  },
  user_uses: {
    type: Number,
    default: 0,
  },
});

const modelBot = mongoose.model("botModel", botSchema);
module.exports = modelBot;
