const botModel = require("../models/botSchema.js");

module.exports = {
  name: "resetbot",
  description: "resets bot usage data",

  execute(message) {
    let botData;
    try {
      botData = botModel.findOne({ userID: "bot" });
      if (botData) {
        console.log(`removing current bot document from bot collection`);
        botModel.deleteOne({userID:"bot"}).exec();
        console.log(`bot deleted`);
      } else {
        console.log("bot not found");
      }
    } catch (err) {
      console.log(err);
    }

    botData = botModel.create({
      bot_ID: "bot",
    });
    console.log("successfully reset bot data");
    message.channel.send("Bot data reset");
  },
};
