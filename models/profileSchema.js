const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: {
    type: String,
    require: true,
  },
  preference: {
    type: String,
    default: "none set",
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
  additions: {
    type: Number,
    default: 0,
  },
});

const model = mongoose.model("ProfileModels", profileSchema);
module.exports = model;
