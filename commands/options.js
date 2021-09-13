//Options command

//TODO: read from DB

const itemModel = require("../models/itemSchema.js");

module.exports = {
  name: "options",
  description: "Prints out 5 random options queried from db",

  async execute(message, aux, args) {
    //Psudocode: Generate random number --> Add it to tracking array
    //If rng is in array, regen number
    //Query document from DB and store item name in array.
    //Send array to chat

    console.log("options selected");

    let result = [];
    let i = 0;
    let stringBuild = "";

    try {
      result = await itemModel.aggregate([{ $sample: { size: 5 } }]);

      //console.log(`query result: ${result}`);

      while (i < result.length) {
        console.log(`result name: ${result[i].item_name}`);
        stringBuild += result[i].item_name + ", ";
        i++;
      }
      stringBuild = stringBuild.slice(0, -2);
    } catch (err) {
      console.log(`Error encountered ${err}`);
    }

    message.channel.send(`Here are your options: \n ${stringBuild}`);
  },
};
