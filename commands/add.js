const itemModel = require("../models/itemSchema.js");
const botModel = require("../models/botSchema.js");
//var ValidationError = mongoose.Error.ValidationError;

module.exports = {
  name: "add",
  description: "Adds input item to food/drink collection.",

  async execute(message, aux, args) {
    console.log(`-----------------------------`);
    console.log(`passed message: ${message}, passed aux: ${aux}`);

    let itemData;

    let itemType = aux.shift().toLowerCase();
    let item = aux.toString().replace(/,/g, " ");

    console.log(`item type: ${itemType}`);
    console.log(`food: ${item}`);

    breaklabel: try {
      itemData = await itemModel.findOne({ item_name: item });
      console.log(`itemData: ${itemData}`);

      //TODO: item validation
      // if (itemType !== 'food' || itemType !== 'drink') {
      //   console.log(`Validation error`);
      //   message.channel.send(`Invalid syntax.
      //   Please add your item using the following syntax:
      //   +add [food/drink] <yourItemHere>`);
      //   break breaklabel;
      // }

      if (!itemData) {
        itemData = itemModel.create({
          item_type: itemType,
          item_name: item,
        });
        message.channel.send(`Your item '${item}' was added successfully.`);
      } else {
        message.channel.send("Item was already added");
      }
    } catch (err) {
      console.log(`Error in adding: ${err}`);
    }


  },
};
