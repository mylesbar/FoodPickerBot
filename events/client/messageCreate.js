const config = require("../../config.json");
const profileModel = require("../../models/profileSchema.js");
const botModel = require(`../../models/botSchema.js`);

console.log(`-----------------------------------------`);
console.log("Start:");
var uses = 0;

//before db
// var testArray = [
//   "Pizza",
//   "Burger",
//   "Ramen",
//   "Chinese takeout",
//   "Popeyes",
//   "Checkers",
//   "Halal",
//   "Bdubs",
//   "Cook your own food dummy",
//   "Quesadillas",
//   "Tacos",
// ];
// console.log(`Food array: ${testArray}`);

module.exports = async (Discord, client, message) => {
  const prefix = config.PREFIX;

  //checking for valid messsage
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //create user in collection if not already in db
  let profileData;
  try {
    console.log(`Sender ID: ${message.author}`);
    profileData = await profileModel.findOne({ userID: message.author.id });
    //console.log(`loaded profile data: ${profileData}`);
    if (!profileData) {
      console.log("Creating new entry");
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        preference: "none set",
      });
      profile.save();
    } else {
      console.log(`user found: ${profileData.userID}`);
    }
  } catch (err) {
    console.log(err);
  }

  //message reading
  const args = message.content.slice(prefix.length).split("/ +/");
  let command = args.shift().toLowerCase();
  let aux;

  
  console.log(`command: ${command}`);
  if (command.includes(" ")) {
    aux = command.split(" ");
    command = aux.shift().toLowerCase();
    console.log(`aux: ${aux}`);
  }

  //increment Total use counter
  uses++;
  console.log(`uses: ${uses}`);

  try {
    //hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, pings: 1 } });
    //   console.log("bot updated");
    hold = await botModel.findOne({ bot_ID: "bot" });
    //   console.log(`Bot after update:
    //   total use ${hold.total_uses}
    //   pings: ${hold.pings}`);

    // } catch (err) { console.log(err); }


    //TODO: restructure handler

    //command switcher
    if (command === "ping") {
      client.commands.get("ping").execute(message, aux, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, pings: 1 } });
    } else if (command === "random") {
      client.commands.get("random").execute(message, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, random_uses: 1 } });
    } else if (command === "options") {
      client.commands.get("options").execute(message, aux, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, options_uses: 1 } });
    } else if (command === "help") {
      client.commands.get("help").execute(message, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, help_uses: 1 } });
    } else if (command === "user") {
      client.commands.get("user").execute(message, profileData, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, user_uses: 1 } });
    } else if (command === "add") {
      client.commands.get("add").execute(message, aux, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, add_uses: 1 } });
    } else if (command === "resetbot") {
      client.commands.get("resetbot").execute(message, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, bot_resets: 1 } });
    } else if (command === "updates") {
      client.commands.get("updates").execute(message, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, updates_uses: 1 } });
    } else if (command === "choose") {
      client.commands.get("choose").execute(message, aux, args);
      hold = await botModel.updateOne({ bot_ID: "bot" }, { $inc: { total_uses: 1, choose_uses: 1 } });
    } else {
      console.log("default");
    }

    // console.log(`Bot after update:
    //   total use ${hold.total_uses}
    //   hold: ${hold}}`);
  } catch (err) { console.log(err); }


  console.log(`-----------------------------------------`);
};
