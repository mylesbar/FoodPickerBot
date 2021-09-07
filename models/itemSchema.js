mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  item_type: {
    type: String,
    required: true,
    enum : ['food','drink','place'],
    default: 'food',
  },
  times_queried: {
    type: Number,
    default: 0,
  },
});

const itemModel = mongoose.model("itemModels", itemSchema);
module.exports = itemModel;