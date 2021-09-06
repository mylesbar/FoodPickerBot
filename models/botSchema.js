mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  bot_ID: {
    type: String,
    default: "bot",
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

const modelBot = mongoose.model("botModel", profileSchema);
module.exports = modelBot;
