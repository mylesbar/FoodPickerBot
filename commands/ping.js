//Ping command
const botModel = require("../models/botSchema.js");
module.exports = {
  name: "ping",
  description: "Ping command",
  async execute(message, aux, args) {
    console.log(`message passed: ${message}`);
    message.channel.send("pong!");

    //debug
    if (aux != undefined) {
      try {
        message.channel.send(`your other args: ${aux}`);
      } catch (err) {
        console.log(err);
      }
    }

    // try{
    // hold = await botModel.updateOne({bot_ID: "bot"} ,{$inc: {total_uses:1 , pings:1} } );
    // console.log("bot updated");
    // hold = await botModel.findOne( {bot_ID :  "bot"});
    // console.log(`Bot after update:
    // total use ${hold.total_uses}
    // pings: ${hold.pings}`);

    // }catch(err){console.log(err);}
  },
};
