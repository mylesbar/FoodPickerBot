const itemModel = require("../models/itemSchema.js");

module.exports = {
  name: "add",
  description: "Adds input item to food/drink collection.",

  execute(message, aux, args) {
      console.log(`-----------------------------`);
    console.log(`passed message: ${message}, passed aux: ${aux}`);

    let itemData;

    let itemType = aux.shift().toLowerCase();
    let item = aux.toString().replace(/,/g, " ");

    console.log(`item type: ${itemType}`);
    console.log(`food: ${item}`);

    try {

        //findOne returns the whole line as a string. idk why.
      itemData = itemModel.findOne({ item_name: item });
      console.log(`itemData: ${itemData}`);

      if (!itemData) {
        itemData = itemModel.create({
          item_type: itemType,
          item_name: item,
        });
        message.channel.send(`Your item ${item} was added successfully.`);
      } else {
        message.channel.send("Item was already added");
      }
    } catch (err) {
      console.log(`Error in adding: ${err}`);
    }
  },
};
