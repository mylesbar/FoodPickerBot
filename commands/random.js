//Random command
const { User } = require("discord.js");
const itemModel = require("../models/itemSchema.js");

module.exports = {
  name: "random",
  description: "Prints out a random food item from DB",

  //future rework: multiple argument passing [+random (place/drink/food) ]
  async execute(message, args) {
    console.log("random select");

    let result;

    await itemModel.count().exec(async function (err, count) {
      console.log(`Item count: ${count}`);

      //generate single random number
      var randomNum = Math.floor(Math.random() * count);
      console.log(`random num generated: ${randomNum}`);

      //pulls random document using rng nindex
      result = await itemModel.findOne().skip(randomNum);
      console.log(`result: ${result}`);

      //send message to chat
      //TODO: enum handling--> grammar based on itemType
      message.channel.send(`Your should get: ${result.item_name}`);
    });
  },
};
